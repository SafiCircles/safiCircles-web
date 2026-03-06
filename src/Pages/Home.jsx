import React, { useRef, useEffect } from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Card/Features'
import Clip from '../components/clip/clip'
import Footer from '../components/Footer/Footer'
import GetStarted from '../components/GetStarted/GetStarted'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Home() {
  const containerRef = useRef(null);

  // Smooth scroll to hash on load or hash change
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        gsap.to(window, {
          scrollTo: hash,
          duration: 1,
          ease: "power2.inOut",
        });
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  useGSAP(
    () => {
      // Find all elements with an ID that we want to snap to
      // We look for direct children of .content or components that have IDs
      const sections = gsap.utils.toArray("#home, #how-it-works, #features, #pricing, #contacts");
      
      const tops = sections.map(section => ScrollTrigger.create({
        trigger: section,
        start: "top top"
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (progress, self) => {
            let panelStarts = tops.map(st => st.start),
                snapScroll = gsap.utils.snap(panelStarts, self.scroll());
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
          },
          duration: 0.5
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="homepage" ref={containerRef}>
      <div className="content">
        <Navbar />
        <Hero />
        <Clip />
        <Features />
        <GetStarted />
        <Footer />
      </div>
    </div>
  )
}
export default Home
