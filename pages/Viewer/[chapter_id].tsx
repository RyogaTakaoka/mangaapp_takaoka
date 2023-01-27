import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Viewer.module.scss'
import { Proto } from '@/api/protocol'
import {GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

//http://w-lu.net:18080/api/home

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = async (context) => {
	const chapterId = context.params?.chapter_id

	const data = await fetch('http://w-lu.net:18080/api/viewer?chapter_id=' + chapterId,{method:'GET'}).then( async(r) => { return r.arrayBuffer() } )

	const decoded = Proto.ViewerView.decode(new Uint8Array(data))
	//stringifity：JSObj→JSON parse：JSON→JSObj
	const decoded_JSON = JSON.parse(JSON.stringify(decoded))
	
	return {
		props: {
			apiData:decoded_JSON,
			chapterId:chapterId
		}	
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { chapter_id: '1'} }],
		fallback: true,
	}
}

export default function Home(props: { apiData: Proto.ViewerView}){
	const router = useRouter()

	const [page, setPage] = useState(0)

	const handlePages = (isNext:boolean) =>{
		if(isNext){
			if(props.apiData?.imageUrls[page]){
				setPage(page+1)
			}else{
				router.push({
					pathname:"/",   //URL
					query: {word :""} //検索クエリ
				});
			}
		}else{
			setPage(page>0?page-1:page)
		}

	}

	return (
		<div>
			<div className={styles.name}>
				{props.apiData?.chapter?.name}
			</div>
				
			<div className={styles.viewer}>
				<img src = {props.apiData?.imageUrls[page]}/>
			</div>
			<div className={styles.pagebutton}>
				<button onClick={() => handlePages(false)} disabled = {!(page>0)}>前へ</button>
				<button onClick={() => handlePages(true)}>{props.apiData?.imageUrls[page]?"次へ":"ホームへ"}</button>
			</div>
		</div>
	)
}