import React from "react";

export default function Navbar() {
  const education = {
    schoolName: "Lagos state University",
    course: "Electronic and computer Engineering",
    date: "2017-2022",
  };
  return (
    <section>
      <h1>Education</h1>
      <h3>{education.schoolName}</h3>
      <p>{education.course}</p>
      <p>{education.date}</p>
    </section>
  );
}
