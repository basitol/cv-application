import React from "react";

export default function Contact() {
  const user = {
    name: "Abdulbasit",
    email: "basitolaitan27@gmail.com",
    phonenumber: "09131171967",
  };
  return (
    <section className="mx-14">
      <h1>Contact</h1>
      <p>{user.phonenumber}</p>
      <p>{user.email}</p>
    </section>
  );
}
