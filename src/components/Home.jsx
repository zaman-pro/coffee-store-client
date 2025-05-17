import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();

  console.log(coffees);
  return <div>this is home</div>;
};

export default Home;
