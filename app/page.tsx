'use client'
import React from "react";
import { Chips, Content } from "./Testing";

export default function Home() {
  return (
    <div>
      <Content Heading="Welcome to Over-Engineered." text="This Website allows One to review the endless pieces of Software beng constantly produced. Wether it be a javascript framework or a Python Library or a new language." HL1="Give them the rating you want to." HL2="See what other developers are using and prefer." src="/images/Over-Engine.png"/>
      <Content Heading="What's More?" text = "You can fund your next project. Be the next Enterpeneur you want to be. Or host your own articles for discussion if you are a Tech Enthuisast." HL1 = "Discuss with like-minded Tech Enthuisasts." HL2="Fund Yourself!" src="/images/cover-image.jpg"/>
      <Chips /> 
    </ div>
  );
}