const fetchApi = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
    });
    return data.json();
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async () => {
  const allProducts = await fetchApi();

  return allProducts;
};

export default getAllProducts;
