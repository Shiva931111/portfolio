import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const ROLES = [
  "AI / ML Developer",
  "AI Automation Builder",
  "RAG & LLM Engineer",
  "ML Systems Architect",
];

// Cinematic canvas background — animated red+blue light beams
function useCinematicCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      t += 0.008;
      const { width, height } = canvas;

      // Clear
      ctx.clearRect(0, 0, width, height);

      // Deep background
      ctx.fillStyle = "#03020a";
      ctx.fillRect(0, 0, width, height);

      // --- Red cinematic beam (left-bottom) ---
      const redGrad = ctx.createRadialGradient(
        width * 0.12,
        height * 0.85,
        0,
        width * 0.12,
        height * 0.85,
        width * 0.65
      );
      redGrad.addColorStop(0, `rgba(220, 38, 80, ${0.22 + Math.sin(t * 0.7) * 0.06})`);
      redGrad.addColorStop(0.5, `rgba(180, 20, 60, ${0.1 + Math.sin(t * 0.5) * 0.03})`);
      redGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = redGrad;
      ctx.fillRect(0, 0, width, height);

      // --- Blue cinematic beam (right-top) ---
      const blueGrad = ctx.createRadialGradient(
        width * 0.88,
        height * 0.15,
        0,
        width * 0.88,
        height * 0.15,
        width * 0.7
      );
      blueGrad.addColorStop(0, `rgba(59, 130, 246, ${0.24 + Math.cos(t * 0.6) * 0.06})`);
      blueGrad.addColorStop(0.5, `rgba(37, 99, 235, ${0.12 + Math.cos(t * 0.4) * 0.03})`);
      blueGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = blueGrad;
      ctx.fillRect(0, 0, width, height);

      // --- Purple center accent ---
      const purpleGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        width * 0.4
      );
      purpleGrad.addColorStop(0, `rgba(139, 92, 246, ${0.07 + Math.sin(t * 0.9) * 0.03})`);
      purpleGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = purpleGrad;
      ctx.fillRect(0, 0, width, height);

      // --- Floating particles ---
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const seed = i * 137.5;
        const px = ((seed + t * (5 + (i % 5))) % width + width) % width;
        const py = ((seed * 1.7 + t * (3 + (i % 3)) * 0.5) % height + height) % height;
        const alpha = 0.08 + ((Math.sin(t * 2 + i) + 1) / 2) * 0.25;
        const size = 0.5 + (i % 3) * 0.8;

        // Alternate red/blue/purple particles
        let color: string;
        if (i % 3 === 0) color = `rgba(232, 52, 92, ${alpha})`;
        else if (i % 3 === 1) color = `rgba(96, 165, 250, ${alpha})`;
        else color = `rgba(167, 139, 250, ${alpha})`;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      // --- Scanline overlay ---
      for (let y = 0; y < height; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.03)";
        ctx.fillRect(0, y, width, 1);
      }

      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Hero: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCinematicCanvas(canvasRef);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentWord = ROLES[roleIndex];
    const speed = isDeleting ? 55 : 105;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.substring(0, text.length + 1);
        setText(next);
        if (next === currentWord) setTimeout(() => setIsDeleting(true), 1100);
      } else {
        const next = currentWord.substring(0, text.length - 1);
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="hero-cinematic">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Cinematic vignette */}
      <div className="hero-vignette" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUpFast} className="hero-badge">
            <span className="hero-badge-dot" />
            <span>AI / ML Portfolio</span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="hero-name-cinematic">
            <span className="hero-name-word gradient-text-cinematic">Shiva</span>
          </motion.h1>

          {/* Role typing */}
          <motion.div variants={fadeUp} className="hero-role-row">
            <span className="hero-role-cin">
              {text}
              <span className="hero-caret" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeUpFast} className="hero-tagline-cin">
            Building intelligent systems — from document understanding
            and RAG agents to recommendation engines and automation workflows.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUpFast} className="hero-actions-cin">
            <motion.button
              className="btn-cin primary-cin"
              whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(232,52,92,0.55), 0 0 60px rgba(59,130,246,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </motion.button>

            <motion.button
              className="btn-cin ghost-cin"
              whileHover={{ scale: 1.03, borderColor: "rgba(96,165,250,0.8)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Metrics strip */}
          <motion.div variants={fadeUpFast} className="hero-metrics-cin">
            <div className="hero-metric-cin">
              <span className="hero-metric-val">3+</span>
              <span className="hero-metric-lbl">AI Projects</span>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric-cin">
              <span className="hero-metric-val">RAG</span>
              <span className="hero-metric-lbl">LangChain · FAISS</span>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric-cin">
              <span className="hero-metric-val">OCR</span>
              <span className="hero-metric-lbl">Invoice Automation</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.div
            className="hero-scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};