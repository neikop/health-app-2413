type MealType = {
  id: number;
  picture: string;
  name: string;
};

type FetchMealParams = RequestPagniateParams & {
  type?: string;
};

type FetchMealData = ResponsePaginateData & {
  data: MealType[];
};
