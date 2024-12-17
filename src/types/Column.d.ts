type ColumnType = {
  id: number;
  picture: string;
  date: string;
  description: string;
  tags: string[];
};

type FetchColumnParams = RequestPagniateParams & {};

type FetchColumnData = ResponsePaginateData & {
  data: ColumnType[];
};
