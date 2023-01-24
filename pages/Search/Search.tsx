import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Proto } from '@/api/protocol'
import { makeDummySearchView } from '@/mock/mock'

const inter = Inter({ subsets: ['latin'] })

// 検索結果画面の例
export const getServerSideProps: GetServerSideProps = async (context) => {
	const word = context.query.word as string
	const data = makeDummySearchView(word)  // モックデータを取得
  console.log(data)
	return {

		props: { data },
	}
}

// export const getStaticProps: GetStaticProps = async (context) => {
// 	const apiData = await fetch('http://w-lu.net:18080')
// 	return {
// 		props: { ...apiData }
// 	}
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [
// 			{ params: { title_id: '1', chapter_id: '2' } },
// 			{ params: { title_id: '2', chapter_id: '2' } },
// 			...
// 		],
// 		fallback: true,
// 	}
// }

export default function SearchResult(props: { data: Proto.ISearchView }){
	// 例えば、マンガのタイトルを表示するときはprops.data?.titles[index].nameを渡せばよい
  console.log(props.data)
	return (
		<div>
			{props.data?.titles?.map((title, index) => {
				return <p key={index}>{title.name}</p>
			})}      
		</div>
    
	)
}