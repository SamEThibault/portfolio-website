import React from "react";
import "../styles/Home.css";
import Nav from "../components/Nav";


function Home() {
    return (
        <div className="Home">
            <Nav />

            <p className="Title">Samuel Emard-Thibault</p>

            <div className="Video">
                <iframe width="900" height="195" src="https://www.youtube.com/embed/r6shGPorn1M?controls=0&playlist=r6shGPorn1M&autoplay=1&loop=1&showinfo=0&rel=0&modestbranding=1"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <img className="hand-gif" src="https://c.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif" width="80" />

            <div className="intro-container">
                <p className="intro-text">
                    I'm a Computer Engineering Student at Queen's University in Ontario, Canada. When I need a break from my studies, I enjoy working on web applications and exploring the constant flow of emerging frameworks / libraries.
                    Feel free to reach out via my LinkedIn profile <a className="link" href="https://www.linkedin.com/in/samuelemardthibault/" > right here!</a>
                </p>

                <h1 className="intro-text" >Tech Stack</h1>
                <h2 className="languages"> Languages: </h2>

                <div className="icons-container-languages">
                    <img className="icons" width="130" src="https://img.shields.io/badge/-Java-black?style=flat-square&logo=java"></img>
                    <img className="icons" width="212" src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"></img>
                    <img className="icons" width="170" src="https://img.shields.io/badge/-C/C++-black?style=flat-square&logo=c"></img>
                    <img className="icons" width="170" src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python"></img>
                </div>
            </div>


        </div>
    );
}

export default Home;