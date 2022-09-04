import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Order Summary
      </button>
    </>
  );
};

export default Home;
