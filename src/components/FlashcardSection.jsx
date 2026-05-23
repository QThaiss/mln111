import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Shuffle, 
  CheckCircle2, 
  XCircle,
  RefreshCw,
  Layers
} from 'lucide-react'
import { FLASHCARD_DATA } from '../data/content'

const FILTERS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'class', label: 'Giai cấp' },
  { id: 'nation', label: 'Dân tộc' },
  { id: 'dialectic', label: 'Biện chứng' },
]

export default function FlashcardSection() {
  const [filter, setFilter] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mastered, setMastered] = useState(new Set())
  const [needReview, setNeedReview] = useState(new Set())
  const [isShuffling, setIsShuffling] = useState(false)

  const filteredCards = useMemo(() => {
    if (filter === 'all') return FLASHCARD_DATA
    return FLASHCARD_DATA.filter(c => c.category === filter)
  }, [filter])

  const total = filteredCards.length
  const currentCard = filteredCards[currentIndex]

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const navigate = (direction) => {
    if (total === 0) return
    setIsFlipped(false)
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % total)
      } else {
        setCurrentIndex((prev) => (prev - 1 + total) % total)
      }
    }, 150)
  }

  const handleMark = (status, e) => {
    e.stopPropagation() // Prevent card flip
    if (!currentCard) return
    
    if (status === 'mastered') {
      setMastered(prev => new Set(prev).add(currentCard.id))
      setNeedReview(prev => {
        const next = new Set(prev)
        next.delete(currentCard.id)
        return next
      })
    } else {
      setNeedReview(prev => new Set(prev).add(currentCard.id))
      setMastered(prev => {
        const next = new Set(prev)
        next.delete(currentCard.id)
        return next
      })
    }
    navigate('next')
  }

  const handleShuffle = () => {
    setIsShuffling(true)
    setIsFlipped(false)
    setTimeout(() => {
      let rand = Math.floor(Math.random() * total)
      if (rand === currentIndex && total > 1) rand = (rand + 1) % total
      setCurrentIndex(rand)
      setIsShuffling(false)
    }, 300)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setMastered(new Set())
    setNeedReview(new Set())
  }

  const progress = total > 0 ? ((currentIndex + 1) / total) * 100 : 0
  const isCardMastered = currentCard && mastered.has(currentCard.id)
  const isCardNeedReview = currentCard && needReview.has(currentCard.id)

  return (
    <section
      className="py-[clamp(80px,12vh,140px)] px-0 relative overflow-hidden bg-[var(--color-bg-deep)]"
      id="flashcards"
    >
      <div className="max-w-[1000px] mx-auto px-6 relative z-[2]">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(200,160,74,0.08)] border border-[rgba(200,160,74,0.15)] rounded-full text-xs font-semibold text-[var(--color-accent)] tracking-[2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Layers className="w-4 h-4 text-[var(--color-accent)]" />
            Phần 5
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Học nhanh với <span className="text-[var(--color-accent)]">Flashcards</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#9a9588] leading-relaxed max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Lật từng thẻ để ghi nhớ nhanh các khái niệm và luận điểm trọng tâm. Việc lặp lại thụ động sẽ giúp bạn nắm vững lý luận chính trị.
          </motion.p>
        </div>

        {/* Toolbar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Filters */}
          <div className="flex flex-wrap justify-center bg-[var(--color-surface-2)] p-1 rounded-xl border border-[rgba(255,255,255,0.05)] shadow-lg">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === f.id 
                    ? 'bg-[var(--color-surface-3)] text-[#e8e4dc] shadow-md border border-[rgba(255,255,255,0.1)]' 
                    : 'text-[#9a9588] hover:text-[#e8e4dc] hover:bg-[rgba(255,255,255,0.02)]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-6 items-center bg-[var(--color-surface-1)] px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[var(--color-vn-green)]" />
              <span className="text-sm text-[#9a9588]">Đã nhớ: <strong className="text-[#e8e4dc] ml-1">{mastered.size}</strong></span>
            </div>
            <div className="w-px h-4 bg-[rgba(255,255,255,0.1)]"></div>
            <div className="flex items-center gap-2">
              <XCircle size={16} className="text-[var(--color-red)]" />
              <span className="text-sm text-[#9a9588]">Cần ôn: <strong className="text-[#e8e4dc] ml-1">{needReview.size}</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Card Area */}
        {total > 0 ? (
          <motion.div
            className="w-full max-w-[850px] mx-auto relative mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Progress bar */}
            <div className="absolute -top-4 left-0 right-0 h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[var(--color-accent-dim)] to-[var(--color-accent)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="absolute -top-10 right-0 text-xs font-bold text-[var(--color-accent)] tracking-widest uppercase">
              Thẻ {currentIndex + 1} / {total}
            </div>

            {/* 3D Card */}
            <div 
              className={`click-flip-card w-full aspect-[4/3] sm:aspect-[2/1] cursor-pointer ${isFlipped ? 'is-flipped' : ''} ${isShuffling ? 'opacity-50 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="click-flip-card-inner">
                {/* Front */}
                <div className="click-flip-card-front text-center">
                  <span className="absolute top-6 left-6 text-[0.7rem] tracking-widest text-[#5e5a52] uppercase font-bold">Mặt trước</span>
                  <div className="absolute top-6 right-6 flex gap-2">
                    {isCardMastered && <CheckCircle2 className="text-[var(--color-vn-green)] opacity-50" size={20} />}
                    {isCardNeedReview && <XCircle className="text-[var(--color-red)] opacity-50" size={20} />}
                  </div>
                  
                  <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e8e4dc] leading-tight max-w-[85%]">
                    {currentCard.front}
                  </h3>
                  
                  <span className="absolute bottom-6 text-sm text-[var(--color-accent)] opacity-60 flex items-center gap-2">
                    <RefreshCw size={14} /> Bấm để lật thẻ
                  </span>
                </div>

                {/* Back */}
                <div className="click-flip-card-back text-center">
                  <span className="absolute top-6 left-6 text-[0.7rem] tracking-widest text-[var(--color-future-blue)] opacity-70 uppercase font-bold">Mặt sau (Giải nghĩa)</span>
                  
                  <p className="font-body text-lg sm:text-xl text-[#e8e4dc] leading-relaxed max-w-[90%]">
                    {currentCard.back}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              <button 
                onClick={(e) => { e.stopPropagation(); navigate('prev') }}
                className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#9a9588] hover:text-[#e8e4dc] hover:bg-[rgba(255,255,255,0.05)] transition-all"
                title="Thẻ trước"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={(e) => handleMark('needReview', e)}
                className="px-5 py-3 rounded-xl border border-[rgba(184,48,48,0.2)] bg-[rgba(184,48,48,0.05)] text-[var(--color-red-bright)] font-semibold flex items-center gap-2 hover:bg-[rgba(184,48,48,0.15)] transition-all"
              >
                <XCircle size={18} /> Cần ôn lại
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped) }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-dim)] to-[var(--color-accent)] text-[var(--color-bg-deep)] font-bold shadow-lg hover:shadow-[0_0_20px_rgba(200,160,74,0.4)] transition-all"
              >
                <RefreshCw size={18} className="inline mr-2" />
                Lật thẻ
              </button>

              <button 
                onClick={(e) => handleMark('mastered', e)}
                className="px-5 py-3 rounded-xl border border-[rgba(45,143,94,0.2)] bg-[rgba(45,143,94,0.05)] text-[var(--color-vn-bright)] font-semibold flex items-center gap-2 hover:bg-[rgba(45,143,94,0.15)] transition-all"
              >
                <CheckCircle2 size={18} /> Đã nhớ
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); navigate('next') }}
                className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#9a9588] hover:text-[#e8e4dc] hover:bg-[rgba(255,255,255,0.05)] transition-all"
                title="Thẻ tiếp theo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Extra Controls */}
            <div className="mt-8 flex justify-center gap-6">
              <button 
                onClick={handleShuffle}
                className="text-sm text-[#9a9588] hover:text-[var(--color-accent)] flex items-center gap-2 transition-colors"
              >
                <Shuffle size={14} /> Xáo trộn thẻ
              </button>
              <div className="w-px h-5 bg-[rgba(255,255,255,0.1)]"></div>
              <button 
                onClick={handleRestart}
                className="text-sm text-[#9a9588] hover:text-[#e8e4dc] flex items-center gap-2 transition-colors"
              >
                <RotateCcw size={14} /> Học lại từ đầu
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-20 text-[#9a9588]">
            Không có thẻ học nào trong bộ lọc này.
          </div>
        )}
      </div>
    </section>
  )
}
