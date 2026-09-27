import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { animate, inView } from 'motion/react';
import './background.css';
import caduceus from '../assets/images/caduceus-transparent.png';

function CaduceusBackground() {
  return (
    <div className="caduceus-background" aria-hidden="true">
      <img className="caduceus" src={caduceus} alt="" />
    </div>
  );
}

function HomeAnimation() {
  useEffect(() => {
    const hero = document.querySelector('#accueil');

    if (!hero) {
      document.body.classList.remove('js-loading');
      return;
    }

    const elements = hero.querySelectorAll(
      '.eyebrow, h1, .hero-subtitle, .hero-description, .hero-actions'
    );

    const animations = [];

    elements.forEach((element, index) => {
      animations.push(
        animate(
          element,
          {
            opacity: [0, 1],
            y: [12, 0],
          },
          {
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }
        )
      );
    });

    document.body.classList.remove('js-loading');

    return () => {
      animations.forEach((animation) => animation.stop());
    };
  }, []);

  return null;
}

function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    elements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';
    });

    const stopWatching = inView(
      elements,
      (element) => {
        animate(
          element,
          {
            opacity: [0, 1],
            y: [16, 0],
          },
          {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }
        );

        const children = element.querySelectorAll(
          'h3, h4, p, ul, li, .institution, .date, a, button'
        );

        children.forEach((child, index) => {
          animate(
            child,
            {
              opacity: [0, 1],
              y: [10, 0],
            },
            {
              duration: 0.5,
              delay: 0.15 + index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }
          );
        });
      },
      {
        amount: 0.15,
      }
    );

    return () => stopWatching();
  }, []);

  return null;
}

function App() {
  return (
    <>
      <CaduceusBackground />
      <HomeAnimation />
      <ScrollReveal />
    </>
  );
}

const rootElement = document.getElementById('react-background');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}