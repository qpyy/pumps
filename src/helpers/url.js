const updateUrlParams = (searchParams, setSearchParams, params) => {
  const updatedParams = { ...Object.fromEntries(searchParams.entries()), ...params };

  setSearchParams(updatedParams);
};

const getParamFromUrl = (searchParams, paramName) => {
  const param = searchParams.get(paramName);

  return param ? param.split(",").map(Number) : [];
};

export { updateUrlParams, getParamFromUrl };
