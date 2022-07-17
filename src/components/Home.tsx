import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/sample1">example1</Link>
    </>
  );
};

export default Home;
