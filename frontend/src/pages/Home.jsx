import React, { useEffect, useState, useRef } from 'react';
import LazyYouTubeEmbed from '../components/LazyYouTubeEmbed';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Mail, Instagram, Linkedin, Play, Twitter, X } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import { projects, showreelVideos, stats, capabilities, marqueeWords } from '../mock';
import './Home.css';

// About Image Component with Ultra-Smooth Glow
const AboutImageWithGlow = () => {
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);
  const rafRef = useRef(null);
  const targetPosition = useRef({ x: 50, y: 50 });

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      targetPosition.current = { x, y };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      const animate = () => {
        setGlowPosition(prev => {
          const newX = lerp(prev.x, targetPosition.current.x, 0.1);
          const newY = lerp(prev.y, targetPosition.current.y, 0.1);

          if (Math.abs(newX - targetPosition.current.x) > 0.5 || 
              Math.abs(newY - targetPosition.current.y) > 0.5) {
            rafRef.current = requestAnimationFrame(animate);
          }

          return { x: newX, y: newY };
        });
      };

      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    targetPosition.current = { x: 50, y: 50 };
    
    const animate = () => {
      setGlowPosition(prev => {
        const newX = lerp(prev.x, 50, 0.08);
        const newY = lerp(prev.y, 50, 0.08);

        if (Math.abs(newX - 50) > 0.5 || Math.abs(newY - 50) > 0.5) {
          rafRef.current = requestAnimationFrame(animate);
        }

        return { x: newX, y: newY };
      });
    };

    rafRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="about-image-wrapper">
      <div 
        className="neon-glow-interactive"
        style={{
          left: `${glowPosition.x}%`,
          top: `${glowPosition.y}%`,
        }}
      />
      <img 
        ref={imageRef}
        src="https://customer-assets.emergentagent.com/job_motion-vault-2/artifacts/9xphuwjx_me.jpg" 
        alt="Jatin Goyal"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <div className="est-badge">EST 2022</div>
    </div>
  );
};

// Stat Item Component with Counter Animation
const StatItem = ({ stat }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const endNum = parseInt(stat.number.replace(/[^0-9]/g, ''));
          const duration = 2000;
          const increment = endNum / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= endNum) {
              setCount(endNum);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, stat.number]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {stat.number.includes('M') ? `${count}M+` : `${count}+`}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState('longForm');
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const heroRef = useRef(null);
  const manifestoRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect for contact section
  const fullText = "READY TO STAND OUT ONLINE?";
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[textIndex]);
        setTextIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  // Smooth scroll initialization
  useEffect(() => {
    const Lenis = require('@studio-freight/lenis');
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Smooth scroll initialization
  useEffect(() => {
    const Lenis = require('@studio-freight/lenis');
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProjects = () => {
    scrollToSection('projects');
  };

  const tabConfig = {
    longForm: { data: projects.longForm, aspectRatio: '16/9' },
    shortForm: { data: projects.shortForm, aspectRatio: '9/16' },
    thumbnails: { data: projects.thumbnails, aspectRatio: '16/9' },
    creative: { data: projects.creative, aspectRatio: '1/1' }
  };

  return (
    <div className="portfolio">
      <CustomCursor />

      {/* Minimal Header - Shows on Scroll */}
      <motion.header 
        className={`header-minimal ${showHeader ? 'visible' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="header-content">
          <div className="logo">Jatin.MotionLab</div>
          <nav className="nav">
            <button onClick={() => scrollToSection('projects')} className="nav-link">WORK</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">ABOUT</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <motion.div 
          className="hero-background"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_motion-vault-2/artifacts/4aqqvvpo_Bg%20Image.png" 
            alt="Hero Background" 
          />
          <div className="hero-overlay" />
        </motion.div>
        
        {/* Top Left Badge */}
        <motion.div
          className="hero-badge-top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="badge-line" />
          <span>VIDEO EDITOR & MOTION DESIGNER</span>
        </motion.div>

        <div className="hero-content">
          <motion.div 
            className="hero-text-left"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="hero-title-new">
              <span className="title-solid">VISUALS</span>
              <span className="title-outline">THAT STOP</span>
              <span className="title-green">THE SCROLL</span>
            </h1>
            <motion.div
              className="hero-text-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="hero-subtitle-new">
                Editing. Motion Designing. Storytelling.<br /> 
                Shaping raw footage into content people actually watch. 
              </p>
              <motion.button 
                className="cta-button-new"
                onClick={scrollToProjects}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch me Cook ⚡
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Vertical Scroll Indicator */}
        <div className="scroll-indicator-vertical">
          <span className="scroll-text-vertical">SCROLL</span>
          <motion.div 
            className="scroll-line-animated"
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content">
            {[...marqueeWords, ...marqueeWords].map((word, index) => (
              <span key={index} className="marquee-word">{word}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Dashboard */}
      <section className="projects" id="projects">
        <div className="projects-header">
          <h2 className="section-title">SELECTED WORK</h2>
          <div className="project-tabs">
            <button 
              className={`tab ${activeTab === 'longForm' ? 'active' : ''}`}
              onClick={() => setActiveTab('longForm')}
            >
              LONG FORM
            </button>
            <button 
              className={`tab ${activeTab === 'shortForm' ? 'active' : ''}`}
              onClick={() => setActiveTab('shortForm')}
            >
              SHORT FORM
            </button>
            <button 
              className={`tab ${activeTab === 'thumbnails' ? 'active' : ''}`}
              onClick={() => setActiveTab('thumbnails')}
            >
              THUMBNAIL
            </button>
            <button 
              className={`tab ${activeTab === 'creative' ? 'active' : ''}`}
              onClick={() => setActiveTab('creative')}
            >
              CREATIVE
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className={`project-grid ${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {tabConfig[activeTab].data.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-thumbnail" style={{ aspectRatio: tabConfig[activeTab].aspectRatio }}>
  {project.videoId ? (
    <LazyYouTubeEmbed 
      videoId={project.videoId}
      title={project.title}
      aspectRatio={tabConfig[activeTab].aspectRatio}
      autoplay={false}
    />
  ) : (
    <img src={project.thumbnail} alt={project.title || 'Thumbnail'} />
  )}
</div>
                {(project.title || project.description || project.duration) && (
                  <div className="project-info">
                    {project.title && <h3>{project.title}</h3>}
                    {project.description && <p>{project.description}</p>}
                    {project.duration && <span className="project-meta">{project.duration}</span>}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Manifesto Section */}
      <section className="manifesto" ref={manifestoRef}>
        <div className="manifesto-wrapper">
          <h2 className="manifesto-text">
            {[
              "I'm", "a", "creative-thinking", "video", "editor", "with", "strong", 
              "focus", "on", "crafting", "visually", "striking", "&", "emotionally", 
              "impactful", "stories."
            ].map((word, index) => (
              <motion.span
                key={index}
                className="manifesto-word"
                initial={{ color: 'rgba(255, 255, 255, 0.15)' }}
                whileInView={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  transition: {
                    delay: index * 0.1,
                    duration: 0.35
                  }
                }}
                viewport={{ amount: 0.8, once: false }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AboutImageWithGlow />
          </motion.div>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0, delay: 0.0 }}
          >
            <h2 className="section-title-small">ABOUT ME</h2>
            <h3 className="about-main-title">VISUAL DESIGNER</h3>
            <p className="about-description">
              I’m a video editor based in Punjab, India, with a background in graphic design and a growing focus on video and motion. 
              I help creators and businesses turn raw footage into structured, watchable content for social platforms and long-form formats.
              I’ve mainly worked on freelance and independent client projects, managing edits, timelines, and client expectations end-to-end.
            </p>
            <div className="about-tags">
              <span className="about-tag">GRAPHIC DESIGN</span>
              <span className="about-tag">VIDEO EDITING</span>
              <span className="about-tag">MOTION DESIGN</span>
            </div>
            <div className="stats-grid-new">
              {stats.map((stat, index) => (
                <StatItem key={index} stat={stat} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Technical Capabilities */}
      <section className="capabilities">
        <div className="capabilities-container">
          <div className="capabilities-sticky">
            <h2 className="section-title">TECHNICAL<br />CAPABILITIES</h2>
          </div>
          <div className="capabilities-scroll">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="capability-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="capability-image">
                  <img src={capability.image} alt={capability.title} />
                </div>
                <div className="capability-content">
                  <div className="capability-header">
                    <h3>{capability.title}</h3>
                  </div>
                  <p>{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showreel */}
      <section className="showreel">
        <h2 className="section-title">MOTION GRAPHICS</h2>
        <div className="showreel-grid">
          {showreelVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="showreel-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="showreel-video">
  <LazyYouTubeEmbed 
    title={`Showreel ${index + 1}`}
    aspectRatio="16/9"
    autoplay={true}
    loop={true}
    videoSrc={video.videoSrc}
  />
</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="contact" id="contact">
        <div className="contact-content">
          <h2 className="contact-title">{currentText}<span className="cursor-blink">|</span></h2>
          <p className="contact-subtitle">Make your videos work harder for you.</p>
          <div className="contact-buttons">
            <a href="mailto:jatinmotionlab@gmail.com" className="contact-button">
              <Mail size={20} />
              <span>EMAIL ME</span>
            </a>
            <a href="https://www.instagram.com/jatin.motionlab/" target="_blank" rel="noopener noreferrer" className="contact-button">
              <Instagram size={20} />
              <span>INSTAGRAM</span>
            </a>
            <a href="https://x.com/Jatinmotionlab" target="_blank" rel="noopener noreferrer" className="contact-button">
              <X size={20} />
              <span>KABUTAR</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Jatin.MotionLab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;