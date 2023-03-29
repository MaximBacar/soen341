//  Components
import Navbar from "../Components/navbar";
import Postings from "../Components/feed/Postings";

//  Style
import "./styles/feed.css";

//  Librairies
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function Feed() {

  var j = [{"id" : 2},{"id" : 4}, {"id" : 5}, {"id" : 2},{"id" : 4}, {"id" : 5}];

  return (
    <div className="feed">

        <Navbar/>

        <div className="search_bar">
          <div id="search_zone">
            <input placeholder="Search" autoComplete="off" id="search" type="text" cols="50"/>
            <button id="search_btn">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 32 32">
                <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path>
              </svg>
            </button>
          </div>
          

        </div>

        <div className="posting_body">
          <div className="postings">


            <Postings jobs={j}/>

            {/* <div id="post_main">

              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>
              <div id="post"></div>

            </div> */}
            <div id="post_more"></div>

          </div>
            
        </div>

    </div>

  );
}
export default Feed;
