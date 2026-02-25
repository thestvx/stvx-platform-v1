'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, Instagram, Dribbble, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/lib/projects';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const services = [
  {
    title: 'Brand Positioning',
    text: 'Strategic identity systems designed to make premium brands unmistakable in saturated markets.'
  },
  {
    title: 'Digital Experience',
    text: 'Editorial-grade websites and interaction systems balancing storytelling, conversion, and atmosphere.'
  },
  {
    title: 'Creative Direction',
    text: 'Cross-channel visual narratives that align campaigns, product moments, and long-term brand equity.'
  },
  {
    title: 'Launch Architecture',
    text: 'Structured go-to-market planning that unifies messaging, visuals, and customer journey touchpoints.'
  }
];


function PremiumCursor() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };

    const onDown = () => setActive(true);
    const onUp = () => setActive(false);

    window.addEventListener('mousemove', update);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', update);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <motion.span
      className="cursor"
      animate={{
        x: point.x - 11,
        y: point.y - 11,
        scale: active ? 0.75 : 1
      }}
      transition={{ type: 'spring', damping: 26, stiffness: 430, mass: 0.28 }}
    />
  );
}

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -120]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <PremiumCursor />
      <header className="siteHeader">
        <Link href="/" className="logo">
          Velour Atelier
        </Link>

        <nav className={`mainNav ${menuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="menuButton"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <motion.div style={{ y: heroParallax }} className="heroGlow" />
          <motion.p className="heroKicker" variants={reveal} initial="hidden" animate="show">
            CREATIVE DIRECTOR / DIGITAL STRATEGIST
          </motion.p>
          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
          >
            Building iconic digital presence for modern premium brands.
          </motion.h1>
          <motion.p
            className="heroSub"
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            I partner with founders and category leaders to craft elevated online experiences that communicate
            authority, clarity, and taste.
          </motion.p>
          <motion.a
            href="#projects"
            className="cta"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            Explore Projects
            <ArrowUpRight size={16} />
          </motion.a>
        </section>

        <motion.section
          id="about"
          className="section about"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="sectionLabel">About</p>
          <div className="aboutGrid">
            <h2>
              A boutique studio approach focused on precision, mood, and measurable brand perception.
            </h2>
            <p>
              Over the last decade, I have led multidisciplinary teams across luxury retail, hospitality, and
              architecture. Every engagement starts with positioning and ends with a polished experience engineered
              for long-term differentiation.
            </p>
          </div>
        </motion.section>

        <section id="services" className="section">
          <motion.p
            className="sectionLabel"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            Services
          </motion.p>
          <div className="serviceGrid">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="serviceCard"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <motion.p
            className="sectionLabel"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            Selected Work
          </motion.p>
          <div className="projectGrid">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                className="projectCard"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="imageWrap">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={760}
                      height={620}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="projectMeta">
                    <p>{project.category}</p>
                    <h3>
                      {project.title} <ArrowUpRight size={14} />
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          className="section ctaPanel"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p>Let&apos;s shape your next defining brand moment.</p>
          <a href="mailto:hello@velouratelier.com" className="cta">
            Start a Project <ArrowUpRight size={16} />
          </a>
        </motion.section>
      </main>

      <footer>
        <p>© {year} Velour Atelier</p>
        <div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble">
            <Dribbble size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
