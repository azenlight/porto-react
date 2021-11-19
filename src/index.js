import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const profile={
  name: "azenlight",
  photoLink: "https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/217041259_1302707083460393_5880006625345283172_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGQ1LDOt-rf5P9fAOWXIkVINo1G1SzOw_U2jUbVLM7D9VzWiGYQk6PuC2tvhlm5frhqbms_orqTqy4R5n4bFXxC&_nc_ohc=TuKhiCYhhBMAX-xbNmi&_nc_ht=scontent.fcgk18-1.fna&oh=ca40301b14d27f38e771693ebc82585b&oe=619B895A",
  github:"azenlight",
  email:"azenlightech@gmail.com",
}
ReactDOM.render(
  <React.StrictMode>
    <App {...profile}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
