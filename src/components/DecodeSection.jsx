import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, Lightbulb, XCircle } from 'lucide-react'
import { FLIP_CARDS } from '../data/content'

const CORRECT_ANSWER = 'chế độ chiếm hữu tư nhân về tư liệu sản xuất'

export default function DecodeSection({ onUnlock }) {
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const sectionRef = useRef(null)

  const normalize = (str) =>
    str.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.,;:!?]/g, '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!answer.trim()) return

    const norm = normalize(answer)
    const target = normalize(CORRECT_ANSWER)

    if (
      norm.includes(target) ||
      norm.includes('chiếm hữu tư nhân') ||
      norm.includes('tư hữu tư liệu sản xuất') ||
      norm.includes('tư hữu về tư liệu sản xuất') ||
      norm.includes('chế độ tư hữu')
    ) {
      setFeedback(<span className="flex items-center"><Unlock className="w-4 h-4 mr-1.5" /> Chính xác! Phần tiếp theo đã được mở khóa.</span>)
      setFeedbackType('success')
      setUnlocked(true)
      onUnlock()
    } else {
      setAttempts((prev) => prev + 1)
      if (attempts >= 2) {
        setFeedback(<span className="flex items-center"><Lightbulb className="w-4 h-4 mr-1.5" /> Gợi ý: Đáp án liên quan đến "chế độ chiếm hữu tư nhân về tư liệu sản xuất".</span>)
      } else {
        setFeedback(<span className="flex items-center"><XCircle className="w-4 h-4 mr-1.5" /> Chưa đúng. Hãy suy nghĩ về nguồn gốc trực tiếp sinh ra giai cấp...</span>)
      }
      setFeedbackType('error')
    }
  }

  useEffect(() => {
    if (unlocked) {
      setTimeout(() => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
      }, 1500)
    }
  }, [unlocked])

  // Observe cards for reveal
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.decode-card')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.index
            setVisibleCards((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.3 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => cards.forEach((card) => observer.unobserve(card))
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-[clamp(80px,12vh,140px)] px-0 relative bg-[var(--color-bg-deep)]"
      id="decode"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(200,160,74,0.06)] border border-[rgba(200,160,74,0.08)] rounded-full text-xs font-semibold text-[var(--color-accent)] tracking-[2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Phần 2
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Giải mã <span className="text-[var(--color-accent)]">&ldquo;Giai cấp&rdquo;</span> là gì?
          </motion.h2>

          <motion.p
            className="text-lg text-[#9a9588] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lật từng thẻ để ghép nối các mảnh ghép định nghĩa về giai cấp
          </motion.p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FLIP_CARDS.map((card, i) => (
            <motion.div
              key={i}
              className="decode-card flip-card h-[320px] cursor-pointer"
              data-index={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <span className="absolute top-4 right-5 font-[var(--font-display)] text-5xl font-black text-[var(--color-accent)] opacity-10">
                    0{i + 1}
                  </span>
                  <span className="text-4xl mb-5 filter-none">{card.icon}</span>
                  <h3 className="font-[var(--font-display)] text-lg font-semibold text-center text-[#e8e4dc]">
                    {card.title}
                  </h3>
                  <span className="absolute bottom-4 text-[0.7rem] text-[#5e5a52] tracking-[1px]">
                    DI CHUỘT ĐỂ LẬT →
                  </span>
                </div>
                <div className="flip-card-back">
                  <p
                    className="text-base leading-relaxed text-center text-[#e8e4dc] m-0"
                    dangerouslySetInnerHTML={{ __html: card.back }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emphasis box */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(200,160,74,0.06)] to-[rgba(184,48,48,0.04)] border border-[rgba(200,160,74,0.2)] rounded-2xl p-10 text-center mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="absolute -top-4 left-4 text-8xl text-[var(--color-accent)] opacity-5 font-[var(--font-display)]">
            ❝
          </span>
          <p className="font-[var(--font-display)] text-[clamp(1.1rem,2vw,1.4rem)] font-semibold leading-relaxed m-0 text-[#e8e4dc]">
            Thực chất của quan hệ giai cấp chính là{' '}
            <span className="text-[var(--color-accent)] font-bold">
              quan hệ giữa bóc lột và bị bóc lột
            </span>
            , tập đoàn này chiếm đoạt lao động của tập đoàn khác. Đây là
            bản chất sâu xa nhất của mọi quan hệ giai cấp trong lịch sử.
          </p>
        </motion.div>

        {/* Gate Quiz */}
        <motion.div
          className="max-w-[700px] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.div key="quiz" exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }}>
                <h3 className="flex items-center justify-center font-[var(--font-display)] text-xl font-bold mb-2 text-[#e8e4dc]">
                  <Lock className="w-5 h-5 mr-2" /> Câu hỏi mở khóa
                </h3>
                <p className="text-[#9a9588] mb-6 text-base">
                  Theo bạn, <strong className="text-[#e8e4dc]">nguồn gốc trực tiếp</strong> nào sinh ra giai cấp?
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-3 mb-3 flex-col sm:flex-row">
                    <input
                      type="text"
                      className="gate-input"
                      placeholder="Nhập câu trả lời của bạn..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="shrink-0 px-6 py-3 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dim)] text-[var(--color-bg-deep)] font-semibold rounded-xl cursor-pointer hover:brightness-110 transition-all duration-200 whitespace-nowrap"
                    >
                      Trả lời
                    </button>
                  </div>
                </form>
                {feedback && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm mt-2 ${
                      feedbackType === 'error' ? 'text-[var(--color-red-bright)]' : 'text-[var(--color-vn-bright)]'
                    }`}
                  >
                    {feedback}
                  </motion.p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3"
                style={{ animation: 'unlockGlow 1.5s ease-out' }}
              >
                <Unlock className="w-12 h-12 text-[var(--color-accent)] mb-2" />
                <p className="text-[var(--color-vn-bright)] font-bold text-lg">
                  Phần tiếp theo đã được mở khóa!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
