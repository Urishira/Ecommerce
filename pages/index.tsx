import type { InferGetStaticPropsType, NextPage } from "next";
import getAllProducts from "../framework/shopify/products/getAllProducts";
export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
    revalidate: 2 * 60 * 60,
  };
};

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{JSON.stringify(products)}</div>;
};

export default Home;
