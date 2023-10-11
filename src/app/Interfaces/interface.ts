export interface ICard{
  "id"?:number,
  "title"?:string,
  "subtitle"?:string,
  "img"?:string,
  "url"?:string
}

export interface IBarChart {
  title?: string
  type?: string
  data?: IBarData[]
}

export interface IBarData {
  label: string
  vote: number
}
