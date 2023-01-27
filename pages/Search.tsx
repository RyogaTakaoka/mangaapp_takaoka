import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Search.module.scss'
import { Proto } from '@/api/protocol'
import { GetServerSideProps } from 'next'
import Home from '.'

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
			<div className={styles.result}>
				{'" ' + props.word + ' "の検索結果'}
			</div>
			{props.apiData?.titles?.map((title, index) => (
			<div className={styles.home}>
				<div className={styles.titles}>
					<a href={'/TitleDetail/' + title.id}>
						<img src = {title.thumbnailUrl!}/>
						<p className={styles.name} key={index}>{title.name}</p>
						<p className={styles.description} key={index}>{title.description? title.description:"作品概要なし"}</p>
						<p key={index}>{title.likeCount}</p>
					</a>
				</div>
			</div>
			))}      
		</div>
	)
}