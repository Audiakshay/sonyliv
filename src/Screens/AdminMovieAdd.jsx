import React, { useRef } from "react";
import "../CssFolder/AdminDashboard.css";
import axiosInstance from "../utils/Axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminMovieAdd() {
  const nav = useNavigate()
  const posterRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const voteRef = useRef();
  const obj = useSelector((state) => state.slider[0]);
  console.log("obj", obj);

  const addMovie = (e) => {
    e.preventDefault();
    axiosInstance.put("/slider/1", {
      ...obj,
      results: [
        ...obj.results,
        {
          poster_path: posterRef.current.value,
          title: titleRef.current.value,
          overview: descRef.current.value,
          vote_average: voteRef.current.value,
        },
      ],
    });
    nav('/admin/adminDashboard');
  
  };

  return (
    <form className="addMovieContainer" onSubmit={addMovie}>
      <label htmlFor="moviePoster">Movie Poster</label>
      <input type="text" ref={posterRef} className="input" id="moviePoster" />
      <label htmlFor="movieTitle">Movie Title</label>
      <input type="text" ref={titleRef} className="input" id="movieTitle" />
      <label htmlFor="movieDescription">Movie Description</label>
      <input
        type="text"
        ref={descRef}
        className="input"
        id="movieDescription"
      />
      <label htmlFor="movieVote">Movie Vote</label>
      <input type="number" ref={voteRef} className="input" id="movieVote" />
      <button className="addBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AdminMovieAdd;
