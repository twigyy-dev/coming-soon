import React, { useState } from "react";
import { userStore } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import herologo from "./images/herologo.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import "../Styles/Home.css";

var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //email pattern

export default function Home() {

  const [user, setUser] = useState({
    email: "",
    date: ""
  })


  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function writeToDb() {
    const { email } = user;
    if (email.match(emailPattern) === null) {
      window.alert("Please enter a valid email address");
    } else {
      const currDate = Date()
      window.alert("Form Submitted")
      delay(5000)
      const docData = await addDoc(userStore, { email: email, date:currDate })
      window.location.reload();
    }
  }

  return (
    <div className="home-container">
      <div className="home-left">
        <div className="home-title">
          <h1>--Join Beta--</h1>
          {/* <h1 style={{ marginTop: -30 }}>This Summer</h1> */}
          <p>Connect | Create | Inspire</p>
        </div>

        {/* Mobile view */}
        {/* <div className="home-mid">
          <img src={herologo} alt="" className="hero-logo" />
          <div className="greenmid"></div>
        </div> */}

        <div className="get-email">
          <p>Get notified when we launch</p>
          <a href="https://beta.twigyy.com/" target="_blank" className="button_redirect">Twigyy Beta</a>
          {/* <div className="email-input">
            <input type="email" placeholder="enter your email" name="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <button onClick={writeToDb}>Sign- up</button>
          </div> */}
        </div>
        <div className="social-links">
          {/* <a href="https://twitter.com/Twigyy3?t=asL621oyiYwdkfRqlw8sfw&s=09"><img src={twitter} alt="" /></a> */}
          <a href="https://instagram.com/_twigyy_?igshid=YmMyMTA2M2Y=" target='_blank'><img src={instagram} alt="" /></a>
          <a href="https://www.linkedin.com/company/twigyy.com/about/" target="_blank"><img src={linkedin} alt="" /></a>
        </div>
      </div>
      <div className="home-right">
        <div className="greentop"></div>
        <img src={herologo} alt="" className="hero-logo" />
        <div className="greenbottom"></div>
      </div>
    </div>
  );
}
