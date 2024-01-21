"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import { motion } from "framer-motion";
const FrontPage = React.lazy(() => import("../homepage/page"));
const About = React.lazy(() => import("../about/page"));
const Gallery = React.lazy(() => import("../gallery/page"));
const Contact = React.lazy(() => import("../contact/page"));
const ReadyVelocity = React.lazy(() => import("../ready/readyVelocity"));

const WholePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <main>
          <FrontPage />
          <About />
          <ReadyVelocity />
          <Gallery />
          <Contact />
        </main>
      </motion.div>
    </Suspense>
  );
};

export default WholePage;
