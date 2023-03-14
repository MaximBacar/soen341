import Navbar from "../Components/navbar_connected";
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


function Dashboard() {

  //  List of jobs
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/api/recommended")
    .then(response => response.json()).then(json => {
      console.log("j",json);
      if (json.length != 0){
        var postings = []
        for (var i = 0; i < 5; i++){
        
          const temp_dict = {title: json[i].name, body : json[i].description, author : "EMPLOYER", id : json[i].posting_id, date : json[i].date};
          postings.push(temp_dict);
          
        }

        setJobs(postings);
      }
    
    }).catch(e => {
      console.log("e", e)
    })
  },[]) 

  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/user")
    .then(response => response.json()).then(json => {
      console.log(json)
      if (json.length != 0){
        
        setInfo(json); 
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
          <About text={info.about}/>
          <Experience/>
          <Education/>
          <Skills/>
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
