import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Apart form Learnings and coding <br/> <span className="purple"> <b>My Achievements are :  </b></span>
             </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Udacity-Microsoft Machine Learning Scholarship
              <p>Learned so much from this wonderfull opportunity there were mainly 1000 applicants 
                who were selected for the scholarship and this was the first round where as in second 
                round 300 applicants were selected <br/>and out of those i was also one of them  for the phase 2 of  
                <span className="purple"> Microsoft Azure nanodegree program</span> This opportunity 
                make me learn so many new things as in this program we learned some of the amazing insights of 
                <span className="purple"> AZURE </span>
              </p>
            </li>
            <li className="about-activity">
              <ImPointRight /> NIMCET AIR RANK -123
              <p>This is an common entrance examination for the selection for students for
              MCA program in <span className="purple">NIT's</span></p>
            </li>
            
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
