import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 150)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loading-logo">Dòng Chảy Lịch Sử</div>
          <div className="loading-bar-track">
            <div
              className="loading-bar-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-[#5e5a52] text-xs tracking-[4px] uppercase mt-2">
            Đang tải trải nghiệm...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
