import logo from './logo.svg';
import React, {useState} from 'react';
import { BrowserRouter as Router, useHistory, Link, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="text">
      &emsp;&emsp;I'm Az, a computer-science graduates that's aiming to become full stack Developer. My very first aim when
      taking my major was to join GameDev Industry. But as the day goes, i realized demand on Web Development is higher
      than GameDev. So i start to learn more about HTML, CSS, and mostly JavaScripts
      <br/>
      &emsp;&emsp;Compile-based Frameworks are on high demand right now. NodeJs, ReactJs, and VueJs are few of frameworks
      that i tried to understand. Infact, you're looking at one ReactJS app now! I'm practicing, learning, and developing. 
      I have huge excitement to develop and I surely hope to find team that will help me Grow!
    </div>
  );
}
function Edu() {
  return (
    <div className="scrollable">
      <div className="edu-card">
        <div className="edu-header">
          <h3>Computer Science Major (Indonesia)</h3>
          <h4>(August 2017-August 2021)</h4>
        </div>
        <hr/>
        <div className="edu-details">
          GPA:3.63/4.00<br/>
          Researched Initial Basic Feasible Solution for Transportation Problem(TP)
          <br/>
          <a>Transcript (Indonesian)</a>
          <a></a>
        </div>
      </div>
      <br/>
      <div className="edu-card">
        <div className="edu-header">
          <h3>Senior High School (Indonesia)</h3>
          <h4>(July 2014-July 2017)</h4>
        </div>
        <hr/>
        <div className="edu-details">
          Math and Science Minor
        </div>
      </div>
    </div>
    );
}
function Portofolios() {
  return <h2>Portofolios</h2>;
}
function Skills() {
  return <h2>Skills</h2>;
}
function Contact() {
  return <h2>Contact</h2>;
}

function App(props) {
  return (
    <Router>
    <div className="App">
      <div className="container table">
        <div className="container-profile cell">
          <div className="nama row">
            {props.name}
          </div>
          <div className="profile row">
            <img src={props.photoLink}></img>
          </div>
          <div className="icons row">
            <a href={"https://github.com/"+props.github}><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
            <a href={"mailto:"+props.email+"?subject=Portofolio%20React&body=Hello%20Az,"}><img src="https://cdn-icons-png.flaticon.com/512/1782/1782765.png"></img></a>
          </div>
        </div>
        <div className="container-details cell">
          <div className="navbar row">
                
                 <NavLink className="default" activeClassName="active" to="/" >Profile</NavLink> 
                 <NavLink className="default" activeClassName="active" to="/Edu">Education</NavLink> 
                 <NavLink className="default" activeClassName="active" to="/Portfolio">Creation</NavLink> 
                 <NavLink className="default" activeClassName="active" to="/Ability">Skills</NavLink> 
                 <NavLink className="default" activeClassName="active" to="/Contact">Contact</NavLink> 
                
            </div>
          <div className="content row">
              <Routes>
                <Route path="/Edu" element={<Edu/>}/>
                <Route path="/Portfolio" element={<Portofolios/>}/>
                <Route path="/Ability" element={<Skills/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
              </Routes>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
