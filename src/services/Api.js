const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.results;
      console.log(data.results);
      return cleanData;
    });
};
export default getDataFromApi;
