import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { Proto } from '@/api/protocol'
import { makeDummySearchView } from '@/mock/mock'
import { ReactPropTypes, useState } from 'react'
import Link from 'next/link'

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

export const getStaticProps: GetStaticProps = async (context) => {
	const apiData = await getHome()
	.then(response => {
		console.log(response.data)
		return response.data
	})
	
	return {
		props: {apiData:apiData }
	}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [
// 			{ params: { title_id: '1', chapter_id: '2' } },
// 			{ params: { title_id: '2', chapter_id: '2' } },
// 		],
// 		fallback: true,
// 	}
// }

export default function Home(props: { apiData: Proto.IHomeView }){
	
	const [text, setText] = useState("")

	return (
		<div>
			<div className={styles.home}>
				<input type={"text"}
					className={styles.searchbox}
					value={text}
					onChange={(event) => setText(event.target.value)}
					placeholder="作品をさがす"
				/>
			</div>
			<div className={styles.home}>
						
				{props.apiData?.titlesByTag?.map((titlesByTag, index) => (
				<div>	
					<p className={styles.tag} key={index}>{titlesByTag.tag?.name}</p>
					{titlesByTag.titles?.map((title, index) => (
					<div className={styles.title}>
						<p className={styles.name} key={index}>{title.name}</p>
						<p><img src = {title.thumbnailUrl!}/></p>
						<p key={index}>{title.description}</p>
						<p key={index}>{title.likeCount}</p>
					</div>
					))}
				</div>
				))}
			</div>
			<div><p className={styles.menu}><Link href = "/Search">仮Link</Link></p></div>
		</div>
	)
}