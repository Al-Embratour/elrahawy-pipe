
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, Users, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Hero from "../Components/about/Hero";
import Story from "../Components/about/Story";
import Values from "../Components/about/Values";
import Stats from "../Components/Leder/Stats";
import Team from "../Components/about/Team";
import CTA from "../Components/about/CTA";


const AboutPage = () => {


  return (
    <>
      <Hero />
      <Story />
      <Stats />
      <Values/>
      <Team/>
      <CTA/>
    </>
  );
};

export default AboutPage;