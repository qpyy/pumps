import { pumpsDatabase } from "../assets/data/data.js";

const getAllCategories = () => {
  return pumpsDatabase.map((categoryEntry) => {
    const category = categoryEntry.category;

    return {
      id: category.id,
      name: category.name,
    };
  });
};

const getSeriesByCategoryId = (categoryId) => {
  const category = pumpsDatabase.find((entry) => entry.category.id === categoryId);

  if (category) {
    return category.category.series.map(({ id, name, image }) => ({
      id,
      name,
      image,
    }));
  }

  return [];
};

export { getAllCategories, getSeriesByCategoryId };
