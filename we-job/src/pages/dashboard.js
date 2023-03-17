import Navbar from "../Components/navbar_connected";
import React, { useContext } from 'react';
//import Footer from "../Components/footer";
import About from "../Components/profile/profile_about";
import Info from "../Components/profile/profile_info";
import Skills from "../Components/profile/profile_skills";
import JobList from "../Components/profile/jobList";
import Experience from "../Components/profile/profile_experience";
import Education from "../Components/profile/profile_education";



import "./styles/dashboard.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";



function Dashboard() {

  //  List of jobs

  const jwt_token = Cookies.get("auth_token");
  
  if (jwt_token == undefined){
    window.location.replace("/");
  }

  const [info, setInfo] = useState({});
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [userID, setUserID] = useState(jwt_token);

  
  
  
  useEffect(() => {
    fetch("http://localhost:3000/api/dashboard?token=".concat(userID.toString()))
    .then(response => response.json()).then(json => {
      if (json.length != 0){

        setInfo(json["info"])

        var postings = []
        for (var i = 0; i < 5; i++){
        
          const temp_dict = {title: json["recommended_posts"][i].name, body : json["recommended_posts"][i].description, author : "EMPLOYER", id : json["recommended_posts"][i].posting_id, date : json["recommended_posts"][i].date};
          postings.push(temp_dict);
          
        }

        setJobs(postings);


        var skill_list = []
        for (var i = 0; i < json["skills"].nbElement; i++){
          const temp_dict = {title: json["skills"].skills[i].skill_name, id : json["skills"].skills[i].skill_id};
          skill_list.push(temp_dict);
          
        }
        
        setSkills(skill_list); 
      }
    
    }).catch(e => {
      console.log("e", e)
    })
  },[]) 
  
  

  return (
    <div id="home">
      <header>
      <Navbar />
      </header>

      <div className="dashboard">
        <div className="profile">
          <Info info={info}/>
          <About info={info}/>
          <Experience/>
          <Education/>
          <Skills skills={skills}/>
        </div>
        <div className="recommended">
          <h2>Recommended job offers</h2>
          <JobList jobs={jobs} />
        </div>
      </div>
      <footer></footer>
      {/* <Footer /> */}
    </div>

  );
}
export default Dashboard;
