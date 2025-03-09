import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../../context/UserContext";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://png.pngtree.com/thumb_back/fw800/background/20241127/pngtree-hearts-light-up-the-sky-in-this-romantic-traffic-light-illustration-image_16687451.jpg)] h-screen pt-5 flex justify-between flex-col w-full ">
        <img
          className=" w-14 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
