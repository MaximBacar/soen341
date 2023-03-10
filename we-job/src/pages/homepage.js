import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "./homepage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import JobList from "../Components/jobList";
import ProfileMini from "../Components/profileMini";

function Homepage() {
  // var postings
  // fetch('http://127.0.0.1:5000/api/session')
  //   .then(response =>response.json())
  //   .then(data =>{
  //     postings = data;
  //   })
  //   .then(() =>{
  //     console.log(postings);
  //   })
    
  const [jobs, setJobs] = useState([
    { title: "job1", body: "HELLO", author: "asmae", id: 1 },
    { title: "job2", body: "HELLO2", author: "asmae", id: 2 },
    { title: "job3", body: "HELLO3", author: "asmae", id: 3 },
    { title: "job4", body: "HELLO", author: "asmae", id: 4 },
    { title: "job4", body: "HELLO", author: "asmae", id: 5 },
    { title: "job4", body: "HELLO", author: "asmae", id: 6 },
    { title: "job4", body: "HELLO", author: "asmae", id: 7 },
    { title: "job4", body: "HELLO", author: "asmae", id: 8 },
    { title: "job4", body: "HELLO", author: "asmae", id: 9 },
    { title: "job4", body: "HELLO", author: "asmae", id: 10 },
  ]);

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
