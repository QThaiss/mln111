import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Handshake, MapPin } from 'lucide-react'
import { VIETNAM_BRANCHES } from '../data/content'

// Unique accent color per branch card for premium icon badges
const BRANCH_ACCENTS = [
  { bg: 'rgba(224, 80, 80, 0.12)', border: 'rgba(224, 80, 80, 0.25)', glow: 'rgba(224, 80, 80, 0.2)', color: '#e05050' },     // Red - Mục tiêu
  { bg: 'rgba(59, 130, 246, 0.12)', border: 'rgba(59, 130, 246, 0.25)', glow: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6' },    // Blue - Bảo vệ
  { bg: 'rgba(200, 160, 74, 0.12)', border: 'rgba(200, 160, 74, 0.25)', glow: 'rgba(200, 160, 74, 0.2)', color: '#c8a04a' },    // Gold - CNH
  { bg: 'rgba(168, 85, 247, 0.12)', border: 'rgba(168, 85, 247, 0.25)', glow: 'rgba(168, 85, 247, 0.2)', color: '#a855f7' },    // Purple - Giáo dục
  { bg: 'rgba(45, 143, 94, 0.12)', border: 'rgba(45, 143, 94, 0.25)', glow: 'rgba(45, 143, 94, 0.2)', color: '#2d8f5e' },       // Green - Liên minh
  { bg: 'rgba(34, 211, 238, 0.12)', border: 'rgba(34, 211, 238, 0.25)', glow: 'rgba(34, 211, 238, 0.2)', color: '#22d3ee' },     // Cyan - Hội nhập
]

export default function VietnamSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleBranch = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section
      className="py-[clamp(80px,12vh,140px)] px-0 relative overflow-hidden"
      id="vietnam"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-main) 0%, rgba(45,143,94,0.03) 50%, var(--color-bg-deep) 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(45,143,94,0.08)] border border-[rgba(45,143,94,0.15)] rounded-full text-xs font-semibold text-[var(--color-vn-bright)] tracking-[2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-vn-green)]" />
            Phần 5
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Thực tiễn tại <span className="text-[var(--color-vn-bright)]">Việt Nam</span>
          </motion.h2>

          <motion.div
            className="inline-block font-[var(--font-display)] text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold italic text-[var(--color-accent)] px-8 py-4 border border-[rgba(200,160,74,0.2)] rounded-2xl bg-[rgba(200,160,74,0.04)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Việt Nam hiện nay còn đấu tranh giai cấp không?
          </motion.div>
        </div>

        {/* Context card */}
        <motion.div
          className="bg-[var(--color-surface-1)] border border-[rgba(200,160,74,0.08)] rounded-3xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[rgba(200,160,74,0.15)] to-[rgba(200,160,74,0.05)] border border-[rgba(200,160,74,0.25)] shadow-[0_0_20px_rgba(200,160,74,0.1)]">
              <MapPin size={22} className="text-[var(--color-accent-bright)]" />
            </div>
            <h3 className="text-[var(--color-accent)] font-[var(--font-display)] text-lg font-bold m-0">
              Bối cảnh & Sự thống nhất Lợi ích
            </h3>
          </div>
          <p className="text-[#9a9588] leading-relaxed text-base mb-4">
            Tiếp nối tư tưởng biện chứng, tại Việt Nam, sự nghiệp đấu tranh của giai cấp công nhân <strong className="text-[var(--color-vn-bright)]">hoàn toàn thống nhất</strong> với lợi ích của dân tộc và sự tiến bộ của nhân loại. Dưới sự lãnh đạo của Đảng Cộng sản, mục tiêu cuối cùng là giải phóng dân tộc, giải phóng giai cấp và giải phóng con người.
          </p>
          <p className="text-[#9a9588] leading-relaxed text-base m-0">
            Tuy nhiên, quá trình này diễn ra trong điều kiện <strong className="text-[var(--color-accent)]">quá độ gián tiếp bỏ qua chế độ tư bản chủ nghĩa</strong>. Do xuất phát điểm kinh tế thấp, lực lượng sản xuất chưa phát triển cao, xã hội vẫn tồn tại nhiều thành phần kinh tế đan xen, tất yếu dẫn đến sự phân hóa lợi ích và những mâu thuẫn giai cấp mới. Đấu tranh giai cấp hiện nay không phải là bạo lực lật đổ, mà mang những hình thức và nội dung hoàn toàn mới.
          </p>
        </motion.div>

        {/* Mindmap */}
        <div className="max-w-[1000px] mx-auto">
          {/* Core circle — premium with triple ring */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-flex items-center justify-center">
              {/* Outermost pulsing ring */}
              <div className="absolute inset-0 -m-6 rounded-full border border-[rgba(45,143,94,0.1)] animate-[coreRipple_4s_ease-out_infinite]" />
              <div className="absolute inset-0 -m-4 rounded-full border border-[rgba(45,143,94,0.15)] animate-[coreRipple_4s_0.8s_ease-out_infinite]" />

              <div className="mindmap-core relative inline-flex items-center justify-center w-[210px] h-[210px] rounded-full bg-gradient-to-br from-[rgba(45,143,94,0.18)] via-[rgba(45,143,94,0.08)] to-[rgba(200,160,74,0.12)] border-2 border-[var(--color-vn-green)] font-[var(--font-display)] font-bold text-lg text-center text-[#e8e4dc] shadow-[0_0_80px_rgba(45,143,94,0.15),inset_0_0_40px_rgba(45,143,94,0.05)] leading-snug p-5 backdrop-blur-sm">
                <span>Nội dung & Hình thức<br />Đấu tranh<br />thời đại mới</span>
              </div>
            </div>
          </motion.div>

          {/* Branch cards — premium icon badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VIETNAM_BRANCHES.map((branch, i) => {
              const accent = BRANCH_ACCENTS[i] || BRANCH_ACCENTS[0]
              const isActive = expandedIndex === i

              return (
                <motion.div
                  key={i}
                  className={`group relative bg-[var(--color-surface-1)] border rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'border-[var(--color-vn-green)] bg-[var(--color-surface-2)]'
                      : 'border-[rgba(200,160,74,0.08)] hover:border-[rgba(200,160,74,0.15)]'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 8px 32px ${accent.glow}, 0 0 0 1px ${accent.border}` : 'none',
                  }}
                  onClick={() => toggleBranch(i)}
                  onMouseEnter={() => setExpandedIndex(i)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full transition-all duration-300"
                    style={{
                      background: isActive ? `linear-gradient(to bottom, ${accent.color}, transparent)` : 'transparent',
                      opacity: isActive ? 1 : 0,
                    }}
                  />

                  {/* Background glow on hover */}
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: accent.color,
                      opacity: isActive ? 0.06 : 0,
                    }}
                  />

                  <div className="flex items-start gap-4 mb-2 relative z-[1]">
                    {/* Premium icon badge */}
                    <div className="relative flex-shrink-0">
                      {/* Glow ring */}
                      <div
                        className="absolute inset-0 -m-1 rounded-2xl transition-all duration-500"
                        style={{
                          background: isActive ? accent.bg : 'transparent',
                          boxShadow: isActive ? `0 0 20px ${accent.glow}` : 'none',
                        }}
                      />
                      <div
                        className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border"
                        style={{
                          background: `linear-gradient(135deg, ${accent.bg}, rgba(255,255,255,0.02))`,
                          borderColor: isActive ? accent.border : 'rgba(255,255,255,0.04)',
                          boxShadow: isActive ? `inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px ${accent.glow}` : 'inset 0 1px 0 rgba(255,255,255,0.03)',
                        }}
                      >
                        <div style={{ color: accent.color }} className="transition-transform duration-300 group-hover:scale-110">
                          {branch.icon}
                        </div>
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <span className="font-[var(--font-display)] font-bold text-base text-[#e8e4dc] block mb-0.5">
                        {branch.title}
                      </span>
                      <p className="text-sm text-[#5e5a52] m-0 leading-relaxed">{branch.preview}</p>
                    </div>

                    {/* Expand indicator */}
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 mt-1"
                      style={{
                        background: isActive ? accent.bg : 'rgba(255,255,255,0.03)',
                        color: isActive ? accent.color : '#5e5a52',
                        transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    >
                      ›
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden relative z-[1]"
                      >
                        <p className="text-sm text-[#9a9588] leading-relaxed m-0 pt-4 mt-3 border-t border-[rgba(200,160,74,0.06)] pl-[72px]">
                          {branch.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Alliance emphasis — upgraded with icon badge */}
          <motion.div
            className="mt-14 relative bg-gradient-to-br from-[rgba(45,143,94,0.1)] via-[rgba(45,143,94,0.04)] to-[rgba(200,160,74,0.04)] border border-[var(--color-vn-green)] rounded-3xl p-10 text-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[var(--color-vn-green)] to-transparent opacity-40" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full bg-[var(--color-vn-green)] opacity-[0.03] blur-3xl" />

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(45,143,94,0.12)] border border-[rgba(45,143,94,0.25)] mb-5 shadow-[0_0_30px_rgba(45,143,94,0.15)]">
              <Handshake size={28} className="text-[var(--color-vn-bright)]" />
            </div>

            <p className="font-[var(--font-display)] text-[clamp(1.1rem,2vw,1.35rem)] font-semibold text-[#e8e4dc] m-0 leading-relaxed">
              <span className="text-[var(--color-vn-bright)]">
                Liên minh công nhân — nông dân — trí thức
              </span>{' '}
              là nền tảng xã hội vững chắc cho khối đại đoàn kết toàn dân tộc.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
