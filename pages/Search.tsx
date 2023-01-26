import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { Proto } from '@/api/protocol'
import { makeDummySearchView } from '@/mock/mock'

const inter = Inter({ subsets: ['latin'] })

// 検索結果画面の例
export const getServerSideProps: GetServerSideProps = async (context) => {
	const word = context.query.word as string

	const data = await fetch('http://w-lu.net:18080/api/search?word=' + word ,{method:'GET'}).then( async(r) => { return r.arrayBuffer() } )
	const decoded = Proto.SearchView.decode(new Uint8Array(data))
	//stringifity：JSObj→JSON parse：JSON→JSObj
	const decoded_JSON = JSON.parse(JSON.stringify(decoded))

	const apiData = await decoded_JSON
	
	return {
		props: {
			apiData:apiData,
			word:word
		}
	}
}

export default function SearchResult(props: { apiData: Proto.ISearchView, word:string}){
	return (
		<div>
			{props.apiData?.titles?.map((title, index) => (
				<div>
					<p key={index}>{title.id}</p>
					<p key={index}>{title.name}</p>
					<p><img src = {title.thumbnailUrl!}/></p>
					<p key={index}>{title.description}</p>
					<p key={index}>{title.likeCount}</p>
				</div>
			))}      
		</div>
    
	)
}