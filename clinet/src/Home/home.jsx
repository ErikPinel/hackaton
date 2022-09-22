import "./home.css";
import { motion, useScroll, useSpring } from "framer-motion";

function HomePage() {
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
        <div className="first-container">
          <h1 className="first-header">first hospital department</h1>
        </div>
      </div>
      <div className="second-homepage-background">
        <div className="second-container">
          <h1 className="second-header">second hospital department</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
