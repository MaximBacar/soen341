import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "./homepage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import JobList from "../Components/jobList";
import ProfileMini from "../Components/profileMini";

function Homepage() {
  const [jobs, setJobs] = useState([]);
  var j = []
  useEffect(() => {
    fetch("http://localhost:3000/api/recommended")
    .then(response => response.json()).then(json => {
      console.log("j",json);
      if (json.length != 0){
        var postings = []
        for (var i = 0; i < 5; i++){
        
          const temp_dict = {title: json[i].name, body : json[i].description, author : "EMPLOYER", id : json[i].posting_id};
          postings.push(temp_dict);
          
        }

        setJobs(postings);
      }
      
      

    }).catch(e => {
      console.log("e", e)
    })
  },[]) 
  
  

  return (
    <div id="home">
      <Navbar />
      <ProfileMini />
      <JobList jobs={jobs} />
      <Footer />
    </div>
  );
}
export default Homepage;
