import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const QUOTE = 'Lịch sử của mỗi xã hội từ trước đến nay là lịch sử đấu tranh giai cấp.'

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < QUOTE.length) {
        setDisplayText(QUOTE.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => setTypingDone(true), 500)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const handleExplore = useCallback((e) => {
    e.preventDefault()
    const target = document.getElementById('decode')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // Find the phrase to highlight
  const highlightPhrase = 'đấu tranh giai cấp'
  const highlightIndex = displayText.lastIndexOf(highlightPhrase)
  let beforeHighlight, highlighted, afterHighlight
  if (highlightIndex >= 0) {
    beforeHighlight = displayText.slice(0, highlightIndex)
    highlighted = displayText.slice(highlightIndex, highlightIndex + highlightPhrase.length)
    afterHighlight = displayText.slice(highlightIndex + highlightPhrase.length)
  }

  return (
    <header className="hero" id="hero">
      {/* Background effects */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="hero-radial hero-radial-1" />
        <div className="hero-radial hero-radial-2" />
      </div>

      <div className="max-w-[900px] mx-auto px-8 text-center relative z-[2]">
        {/* Ornament */}
        <motion.div
          className="hero-ornament"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        {/* Quote with typewriter */}
        <div className="mb-4">
          <p className="font-[var(--font-display)] text-[clamp(1.5rem,3.5vw,2.4rem)] font-normal italic leading-relaxed text-[#e8e4dc] opacity-90">
            &ldquo;
            {highlightIndex >= 0 ? (
              <>
                {beforeHighlight}
                <span className="text-[var(--color-accent)] font-bold not-italic">{highlighted}</span>
                {afterHighlight}
              </>
            ) : (
              displayText
            )}
            {displayText.length === QUOTE.length ? '.' : ''}
            &rdquo;
            {!typingDone && <span className="typewriter-cursor" />}
          </p>
        </div>

        {/* Author */}
        <motion.p
          className="font-[var(--font-body)] text-sm text-[#5e5a52] tracking-[3px] uppercase mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: typingDone ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          — Karl Marx, Tuyên ngôn của Đảng Cộng sản (1848) —
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-[var(--font-cinzel)] text-[clamp(2.5rem,5.5vw,4.5rem)] font-black tracking-tight mb-6 bg-gradient-to-br from-[#e8e4dc] via-[#e8e4dc] to-[var(--color-accent)] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Dòng Chảy Lịch Sử
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-[#9a9588] max-w-[600px] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Khám phá bản chất của đấu tranh giai cấp và mối quan hệ giai cấp – dân tộc —
          động lực trực tiếp thúc đẩy xã hội phát triển — qua trải nghiệm tương tác hiện đại.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: typingDone ? 1 : 0, y: typingDone ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dim)] text-[var(--color-bg-deep)] font-semibold text-base rounded-full cursor-pointer tracking-wide hover:brightness-110 hover:-translate-y-1 transition-all duration-200"
            onClick={handleExplore}
          >
            ✦ Khám phá ngay
          </button>
          <a
            href="#student"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#e8e4dc] font-semibold text-base rounded-full border border-[rgba(200,160,74,0.2)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-200 no-underline"
          >
            Góc sinh viên
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="text-[0.7rem] text-[#5e5a52] tracking-[2px] uppercase">Cuộn xuống</span>
      </div>
    </header>
  )
}
