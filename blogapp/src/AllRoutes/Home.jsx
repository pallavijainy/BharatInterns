import React from "react";
import ArticleList from "../component/ArticleList";
import CreateButton from "./../component/CreateButton";

const Home = () => {
  return (
    <>
      <CreateButton />
      <ArticleList />
    </>
  );
};

export default Home;
