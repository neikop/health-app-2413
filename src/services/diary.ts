const fetchDiary = (params: FetchDiaryParams): Promise<FetchDiaryData> => {
  const { page = 1, size = 8 } = params;
  return new Promise((resolve, reject) => {
    resolve({
      totalPage: 4,
      currentPage: page,
      data: Array.from({ length: size }).map((_, index) => {
        return {
          id: Math.random(),
          date: '2021.05.21 23:25',
          content: `私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキステキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス`,
        };
      }),
    });
  });
};

export default {
  fetchDiary,
};
