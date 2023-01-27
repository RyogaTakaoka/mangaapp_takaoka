import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/TitleDetail.module.scss'
import { Proto } from '@/api/protocol'
import {GetStaticPaths, GetStaticProps } from 'next'

//http://w-lu.net:18080/api/home

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = async (context) => {
	const titleId = context.params?.title_id

	const data = await fetch('http://w-lu.net:18080/api/title/detail?title_id=' + titleId,{method:'GET'}).then( async(r) => { return r.arrayBuffer() } )

	const decoded = Proto.TitleDetailView.decode(new Uint8Array(data))
	//stringifity：JSObj→JSON parse：JSON→JSObj
	const decoded_JSON = JSON.parse(JSON.stringify(decoded))
	
	return {
		props: {
			apiData:decoded_JSON,
			titleId:titleId
		}	
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { title_id: '1'} }],
		fallback: true,
	}
}

export default function Home(props: { apiData: Proto.TitleDetailView,titleId:string }){
	return (
		<div>
			<div className={styles.titlename}>
				{props.apiData?.title.name}
			</div>
			<div className={styles.text}>
				作品一覧
			</div>
			{props.apiData?.chapters.map((chapter, index) => (
			
			<a href={'/Viewer/' + chapter.id} className={styles.chapters}>
				<img src = {chapter.thumbnailUrl!}/>
				<p key={index}>{chapter.name}</p>
			</a>
				
			))}
		</div>
	)
}