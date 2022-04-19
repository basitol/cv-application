import React from "react";

export default function Header() {
  const user = {
    name: "Abdulbasit",
    email: "basitolaitan27@gmail.com",
    phonenumber: "09131171967",
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phonenumber}</p>
    </div>
  );
}
