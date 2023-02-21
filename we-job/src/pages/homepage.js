import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "./homepage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Homepage() {
  return (

      <div id="home">
        <Navbar />
        <Footer />
      </div>
   
  );
}
export default Homepage;
