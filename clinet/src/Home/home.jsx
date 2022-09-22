import "./home.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

function HomePage() {
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </span>
      </section>
    );
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="homepage-container">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="first-homepage-background">
        <motion.div
          className="box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <div className="first-container">
            <SearchBar></SearchBar>
          </div>
        </motion.div>
      </div>
      <div className="second-homepage-background">
        <Section>
          <div className="second-container">
            <h1 className="second-header">second hospital department</h1>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
