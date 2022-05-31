import React from "react";
import "../styles/Home.css";
import Nav from "../components/Nav";


function Home()
{
    return (
        <div className="Home">
        <Nav/>

        <p className="Title">Samuel Emard-Thibault</p>
  
        <div className="Video">
          <iframe width="900" height="195" src="https://www.youtube.com/embed/r6shGPorn1M?controls=0&playlist=r6shGPorn1M&autoplay=1&loop=1&showinfo=0&rel=0&modestbranding=1"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
}

export default Home;