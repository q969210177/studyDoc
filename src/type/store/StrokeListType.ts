export interface IStrokeListItem {
  id: string;
  name: string;
  price: number;
}
export interface IStrokeListPage {
  page: number;
  pageSize: number;
  total: number;
  list: IStrokeListItem[];
}
