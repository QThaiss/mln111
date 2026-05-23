import { useState, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useParticles } from './hooks/useParticles'
import { useScrollReveal } from './hooks/useScrollReveal'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DecodeSection from './components/DecodeSection'
import TimelineSection from './components/TimelineSection'
import NationSection from './components/NationSection'
import DialecticalRelationSection from './components/DialecticalRelationSection'
import VietnamSection from './components/VietnamSection'
import FlashcardSection from './components/FlashcardSection'
import StudentSection from './components/StudentSection'
import Footer from './components/Footer'

function App() {
  const [sectionUnlocked, setSectionUnlocked] = useState(true) // Set to true to easily view all sections
  const canvasRef = useRef(null)

  useParticles(canvasRef)
  useScrollReveal('.reveal', 0.12)

  const handleUnlock = useCallback(() => {
    setSectionUnlocked(true)
  }, [])

  return (
    <>
      <LoadingScreen />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      <Navbar />
      <HeroSection />

      {/* Section divider */}
      <div className="section-divider" />

      <DecodeSection onUnlock={handleUnlock} />

      <AnimatePresence>
        {sectionUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="section-divider" />
            <TimelineSection />

            <div className="section-divider" />
            <NationSection />

            <div className="section-divider" />
            <DialecticalRelationSection />

            <div className="section-divider" />
            <VietnamSection />

            <div className="section-divider" />
            <FlashcardSection />

            <div className="section-divider" />
            <StudentSection />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
