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
  return (
    <div className="scrollable">
      <div className="porto-container">
        <div className="porto-img">
          <img src="https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/217041259_1302707083460393_5880006625345283172_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGQ1LDOt-rf5P9fAOWXIkVINo1G1SzOw_U2jUbVLM7D9VzWiGYQk6PuC2tvhlm5frhqbms_orqTqy4R5n4bFXxC&_nc_ohc=TuKhiCYhhBMAX-xbNmi&_nc_ht=scontent.fcgk18-1.fna&oh=ca40301b14d27f38e771693ebc82585b&oe=619B895A"/>
        </div>
        <div className="porto-metadata">
            <h3>Portofolio Card</h3>
            <hr/>
            This Project is about testing all feature of JSX, react,
            and integration between files in ReactJs App. It also shows
            my profile and education for reader.
        </div>
      </div>
      
      <div className="porto-container">
        <div className="porto-img">
          <img src="https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/217041259_1302707083460393_5880006625345283172_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGQ1LDOt-rf5P9fAOWXIkVINo1G1SzOw_U2jUbVLM7D9VzWiGYQk6PuC2tvhlm5frhqbms_orqTqy4R5n4bFXxC&_nc_ohc=TuKhiCYhhBMAX-xbNmi&_nc_ht=scontent.fcgk18-1.fna&oh=ca40301b14d27f38e771693ebc82585b&oe=619B895A"/>
        </div>
        <div className="porto-metadata">
            <h3>Portofolio Card</h3>
            <hr/>
            This Project is about testing all feature of JSX, react,
            and integration between files in ReactJs App. It also shows
            my profile and education for reader.
        </div>
      </div>
      
      <div className="porto-container">
        <div className="porto-img">
          <img src="https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/217041259_1302707083460393_5880006625345283172_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGQ1LDOt-rf5P9fAOWXIkVINo1G1SzOw_U2jUbVLM7D9VzWiGYQk6PuC2tvhlm5frhqbms_orqTqy4R5n4bFXxC&_nc_ohc=TuKhiCYhhBMAX-xbNmi&_nc_ht=scontent.fcgk18-1.fna&oh=ca40301b14d27f38e771693ebc82585b&oe=619B895A"/>
        </div>
        <div className="porto-metadata">
            <h3>Portofolio Card</h3>
            <hr/>
            This Project is about testing all feature of JSX, react,
            and integration between files in ReactJs App. It also shows
            my profile and education for reader.
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const array=["https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
               "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png",
               "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
  ]
  return (
   <div className="skill">
      {array.map(array=>(
        <img src={array}></img>
      ))
    }
   </div> 
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

function App(props) {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <div className="container-profile cell">
          <div className="nama row">
            {props.name}
          </div>
          <div className="profile row">
            <img src={props.photoLink}></img>
          </div>
          <div className="icons">
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
