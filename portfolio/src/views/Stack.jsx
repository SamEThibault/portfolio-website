import React from "react";
import Nav from "../components/Nav";
import "../styles/Stack.css";

function Stack() {
    return (
        <div>
            <Nav />
            <h1 className="intro-text" >Tech Stack</h1>
            <h2 className="languages"> Languages: </h2>

            <div className="icons-container-languages">
                <img className="icons" width="130" alt="Java" src="https://img.shields.io/badge/-Java-black?style=flat-square&logo=java"></img>
                <img className="icons" width="212" alt="Js" src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"></img>
                <img className="icons" width="170" alt="C++" src="https://img.shields.io/badge/-C/C++-black?style=flat-square&logo=c"></img>
                <img className="icons" width="170" alt="Python" src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python"></img>
            </div>

            <h2 className="web"> Web: </h2>

            <div className="icons-container-web">
                <img className="icons" width="205" alt="SpringBoot" src="https://img.shields.io/badge/-SpringBoot-black?style=flat-square&logo=springboot"></img>
                <img className="icons" width="137" alt="React" src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react"></img>
                <img className="icons" width="137" alt="Flask" src="https://img.shields.io/badge/-Flask-black?style=flat-square&logo=flask"></img>
                <img className="icons" width="157" alt="HTML" src="https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white"></img>
                <img className="icons" width="138" alt="CSS" src="https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3"></img>
                <img className="icons" width="196" alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-black?style=flat-square&logo=bootstrap"></img>
            </div>


        </div>
    );
}

export default Stack;