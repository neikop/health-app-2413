const random03 = () => '0' + Math.ceil(Math.random() * 3);
const randomType = () => ['m', 'l', 'd', 's'][Math.floor(Math.random() * 4)];

const fetchMeal = (params: FetchMealParams): Promise<FetchMealData> => {
  const { page = 1, size = 8 } = params;
  return new Promise((resolve, reject) => {
    resolve({
      totalPage: 4,
      currentPage: page,
      data: Array.from({ length: size }).map((_, index) => {
        const type = params.type || randomType();
        const id = Math.random();
        return {
          id,
          name: `${page}_${type}_${id.toString().slice(2, 6)}`,
          picture: require(`assets/images/meal_${type}_${random03()}.jpg`),
        };
      }),
    });
  });
};

export default {
  fetchMeal,
};
