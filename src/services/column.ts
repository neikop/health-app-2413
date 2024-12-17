const random08 = () => '0' + Math.ceil(Math.random() * 8);

const fetchColumn = (params: FetchColumnParams): Promise<FetchColumnData> => {
  const { page = 1, size = 8 } = params;
  return new Promise((resolve, reject) => {
    resolve({
      totalPage: 4,
      currentPage: page,
      data: Array.from({ length: size }).map((_, index) => {
        return {
          id: Math.random(),
          picture: require(`assets/images/column_${random08()}.jpg`),
          date: '2021.05.17 23:25',
          description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリリリリ。',
          tags: ['#魚料理', '#和食', '#DHA'],
        };
      }),
    });
  });
};

export default {
  fetchColumn,
};
