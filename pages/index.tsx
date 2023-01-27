import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { Proto } from '@/api/protocol'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

//http://w-lu.net:18080/api/home

const inter = Inter({ subsets: ['latin'] })

export const getHome: () => Promise<{data:Proto.HomeView | null}>= async () => {
	try{
		const data = await fetch('http://w-lu.net:18080/api/home',{method:'GET'}).then( async(r) => { return r.arrayBuffer() } )

		const decoded = Proto.HomeView.decode(new Uint8Array(data))
		//stringifity：JSObj→JSON parse：JSON→JSObj
		const decoded_JSON = JSON.parse(JSON.stringify(decoded))
		//console.log(decoded_JSON)
		
		return{
			data:decoded_JSON,
			error:null
		}

	}catch(e){
		console.log('null')
		return{
			data:null,
			error:{statusCode:404, message:'Contents Not Found'}
		}
	}
}

export const getStaticProps: GetStaticProps = async () => {
	const apiData = await getHome()
	.then(response => {
		console.log(response.data)
		return response.data
	})
	
	return {
		props: {apiData:apiData }
	}
}

export default function Home(props: { apiData: Proto.IHomeView }){

	//ルーターの取得
	const router = useRouter()
  	const [word, setWord] = useState("")

	const onClickSearch = () =>{
		if (!word) return

		router.push({
			pathname:"/Search",   //URL
			query: {word :word} //検索クエリ
		});
	}

	const cutStr = (str:string) => {
		if(str==undefined)return
		const len:number =16;
		
		if(str.length > len){
			return str.substring(0,len) + '...'
		}else{
			return str
		}
	}

	return (
		<div>
			<div className={styles.searcharea}>
				<input type={"text"}
					className={styles.searchbox}
					value={word}
					onChange={(event) => setWord(event.target.value)}
					placeholder="作品をさがす"
				/>
				<button onClick={onClickSearch}> 検索</button>
			</div>
			<div className={styles.home}>
						
				{props.apiData?.titlesByTag?.map((titlesByTag, index) => (
				<div>	
					<p className={styles.tag} key={index}>{titlesByTag.tag?.name}</p>
					{titlesByTag.titles?.map((title, index) => (
					<div className={styles.titles}>
						<a href={'/TitleDetail/' + title.id}>
							<img src = {title.thumbnailUrl!}/>
							<p className={styles.name} key={index}>{title.name}</p>
							<p className={styles.description} key={index}>{title.description? title.description:"作品概要なし"}</p>
							<p key={index}>{title.likeCount}</p>
						</a>
					</div>
					))}
				</div>
				))}
			</div>
		</div>
	)
}