type DiaryType = {
  id: number;
  date: string;
  content: string;
};

type FetchDiaryParams = RequestPagniateParams & {};

type FetchDiaryData = ResponsePaginateData & {
  data: DiaryType[];
};
