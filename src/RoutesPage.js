import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../src/Home"));
const NewMobiles = lazy(() => import("../src/OurServices/NewMobiles"));
const UsedMobiles = lazy(() => import("../src/OurServices/UsedMobiles"));
const Accessories = lazy(() => import("../src/OurServices/Accessories"));
const Services = lazy(() => import("../src/OurServices/Services"));
const About = lazy(() => import("../src/OurServices/About"));
const ContactUs = lazy(() => import("../src/OurServices/ContactUs"));


function RoutesPage() {
  return (
    <React.Suspense >
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/NewMobiles" element={<NewMobiles />} />
      <Route  path="/UsedMobiles" element={<UsedMobiles />} />
      <Route  path="/Accessories" element={<Accessories />} />
      <Route  path="/Services" element={<Services />} />
      <Route  path="/About" element={<About />} />
      <Route  path="/ContactUs" element={<ContactUs />} />

  

    </Routes>
  </React.Suspense>  )
}

export default RoutesPage