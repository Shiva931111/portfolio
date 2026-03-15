import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ROLES = [
  "AI/ML Engineer",
  "AIML Student",
  "AI Automation Builder"
];

export const Hero: FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // GSAP Intro Animation
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-gradient-orbit", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      });

      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        });
      }

      if (buttonsRef.current) {
        gsap.from(buttonsRef.current.children, {
          opacity: 0,
          y: 18,
          duration: 0.6,
          delay: 0.25,
          ease: "power3.out",
          stagger: 0.1
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Typing Animation
  useEffect(() => {
    const currentWord = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const nextText = currentWord.substring(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div ref={heroRef} className="hero-grid hero-gradient">
      <div className="hero-copy">

        <p className="eyebrow">Shiva · AI/ML Portfolio</p>

        <h1 ref={titleRef} className="hero-title">

          <span className="hero-name gradient-text">
            Shiva
          </span>

          {/* Typing Role */}
          <span className="hero-role typing">
            {text}
            <span className="caret"></span>
          </span>

          <span className="hero-tagline">
            Building intelligent systems using machine learning,
            automation and AI.
          </span>

        </h1>

        <p className="hero-subtitle">
          I design and build applied AI systems — from document understanding
          and RAG agents to recommendation engines and automation workflows.
        </p>

        <div ref={buttonsRef} className="hero-actions">

          <button
            className="btn primary"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            View Projects
          </button>

          <button
            className="btn ghost"
            onClick={() =>
              window.open("https://github.com/your-github", "_blank")
            }
          >
            GitHub
          </button>

          <button
            className="btn ghost"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            Contact
          </button>

        </div>

        <div className="hero-metrics">

          <div className="metric">
            <span className="metric-label">Focus Areas</span>
            <span className="metric-value">
              Machine Learning · AI Automation · Document AI · RAG
            </span>
          </div>

          <div className="metric">
            <span className="metric-label">Tech Stack</span>
            <span className="metric-value">
              Python · LangChain · React · Three.js
            </span>
          </div>

        </div>

      </div>

      <div className="hero-visual-placeholder hero-visual-elevated">
        <div className="hero-gradient-orbit" />

        <p className="hero-visual-caption">
          Interactive 3D neural network rendered in real time.
        </p>
      </div>
    </div>
  );
};