"use client";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Loading from "./loading";
import FrontPage from "./homepage/page";
import About from "./about/page";
import Gallery from "./gallery/page";
import Contact from "./contact/page";
import { motion } from "framer-motion";
import ReadyPage from "./ready/page";
import ReadyVelocity from "./ready/readyVelocity";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <main>
        <FrontPage />
        <About />
        {/* <ReadyPage /> */}
        <ReadyVelocity />
        <Gallery />
        <Contact />
      </main>
    </motion.div>
  );
}
