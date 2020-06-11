import React from 'react';

import { Link } from 'react-router-dom'

const Education = () => {
  const myEducation = [
    {
      id: "123",
      schoolName: "Ironhack",
      city: "Miami",
      country: "US",
      degree: "Full-Stack Web Developer",
      schoolStarted: "2017",
      schoolEnded: "2017"
    },
    {
      id: "124",
      schoolName: "University of Cool Things",
      city: "Paris",
      country: "France",
      degree: "MS of Cool Things",
      schoolStarted: "2015",
      schoolEnded: "2017"
    },
    {
      id: "125",
      schoolName: "University of Chill Vibe",
      city: "Berlin",
      country: "Germany",
      degree: "BS of Super Science",
      schoolStarted: "2012",
      schoolEnded: "2015"
    }
  ]

  return (
    <div>
      <h2>Education:</h2>
      {myEducation.map((oneSchool, index) => {
        return (
          <div key={index}>
            <h3><Link to={"/education/" + oneSchool.id}>{oneSchool.schoolName}</Link></h3>
          </div>
        )
      })}
    </div>
  )
}

export default Education;