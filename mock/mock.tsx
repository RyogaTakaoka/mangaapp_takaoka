import { Proto } from "@/api/protocol"

// Proto.ITitle型のモックデータの例
export const makeDummyTitle = (id: number): Proto.ITitle => {
	return {
		id: id,
		name: "Title_" + id,
		description: "ローラはオーストリアのシュタイアーマルクという自然豊かな土地で、幼い頃に母を亡くし、父と城に暮らしていた。",
		thumbnailUrl: "https://placehold.jp/640x360.png?text=" + id,
		likeCount: '1260',
	}
}

// Proto.ISearchView型のモックデータの例
export const makeDummySearchView = (word: string): Proto.ISearchView => {
	return {
		titles: [1,2,3,4,5].map(v => makeDummyTitle(v)),  // 要素数が5つの配列を作って返す
	}
}