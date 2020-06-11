import React from 'react';

import { Link } from 'react-router-dom'

const EducationDetail = (props) => {
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

  let educationDetail = myEducation.filter(e => e.id === props.match.params.id)[0]

  return (
    <div>
      <div>{educationDetail.schoolName}</div>
      <div>{educationDetail.city}</div>
      <div>{educationDetail.country}</div>
      <div>{educationDetail.degree}</div>
    </div>
  )
}

export default EducationDetail;