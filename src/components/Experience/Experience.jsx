import React from "react";

export default function Experience() {
  const exp = {
    title: "Wavepalm Technology", //Project Title - Add Your Project Title Here
    para: "Lagos, Nigeria", // Add Your Service Type Here
    time: "September 2021 - October 2021",
    role: "Frontend Developer",
  };
  return (
    <section className="mx-14">
      <h1>Experience</h1>
      <h5>{exp.title}</h5>
      <p>{exp.time}</p>
      <p>{exp.role}</p>
    </section>
  );
}
