import React from "react";

export default function Header() {
  const user = {
    name: "Abdulbasit",
    email: "basitolaitan27@gmail.com",
    phonenumber: "09131171967",
    headerTagline: [
      //Line 1 For Header
      "I implement",
      //Line 2 For Header
      "beautiful and interactive",
      //Line 3 For Header
      "web applications",
    ],
  };
  return (
    <section className="top">
      <div className="flex flex-jc-sb">
        <p className="portfolio">Portfolio.</p>
        <p className="home">Home</p>
      </div>
      <main className="mt-30 flex flex-col flex-jc-c flex-ai-c">
        <h5 className="mx-14">
          Hi I'm {user.name}{" "}
          <span role="img" aria-label="Emoji">
            👋
          </span>
        </h5>
        <div className="mx-26 tag">
          <h4>{user.headerTagline[0]}</h4>
          <h4>{user.headerTagline[1]}</h4>
          <h4>{user.headerTagline[2]}</h4>
        </div>
        <h1>About</h1>
        <p>
          I’m a Front-End Developer with over 3 years experience, I have a
          serious passion for the UI effects with web applications by giving it
          an outstanding look and feel by creating intuitive, dynamic user
          experiences
        </p>
      </main>
    </section>
  );
}
