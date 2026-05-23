import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VIETNAM_BRANCHES } from '../data/content'

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
          <h3 className="text-[var(--color-accent)] font-[var(--font-display)] text-lg font-bold mb-4">
            📍 Bối cảnh & Sự thống nhất Lợi ích
          </h3>
          <p className="text-[#9a9588] leading-relaxed text-base mb-4">
            Tiếp nối tư tưởng biện chứng, tại Việt Nam, sự nghiệp đấu tranh của giai cấp công nhân <strong className="text-[var(--color-vn-bright)]">hoàn toàn thống nhất</strong> với lợi ích của dân tộc và sự tiến bộ của nhân loại. Dưới sự lãnh đạo của Đảng Cộng sản, mục tiêu cuối cùng là giải phóng dân tộc, giải phóng giai cấp và giải phóng con người.
          </p>
          <p className="text-[#9a9588] leading-relaxed text-base m-0">
            Tuy nhiên, quá trình này diễn ra trong điều kiện <strong className="text-[var(--color-accent)]">quá độ gián tiếp bỏ qua chế độ tư bản chủ nghĩa</strong>. Do xuất phát điểm kinh tế thấp, lực lượng sản xuất chưa phát triển cao, xã hội vẫn tồn tại nhiều thành phần kinh tế đan xen, tất yếu dẫn đến sự phân hóa lợi ích và những mâu thuẫn giai cấp mới. Đấu tranh giai cấp hiện nay không phải là bạo lực lật đổ, mà mang những hình thức và nội dung hoàn toàn mới.
          </p>
        </motion.div>

        {/* Mindmap */}
        <div className="max-w-[1000px] mx-auto">
          {/* Core circle */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mindmap-core inline-flex items-center justify-center w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[rgba(45,143,94,0.15)] to-[rgba(200,160,74,0.1)] border-2 border-[var(--color-vn-green)] font-[var(--font-display)] font-bold text-lg text-center text-[#e8e4dc] shadow-[0_0_60px_rgba(45,143,94,0.15)] leading-snug p-4">
              Nội dung & Hình thức<br />
              Đấu tranh<br />
              thời đại mới
            </div>
          </motion.div>

          {/* Branch cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VIETNAM_BRANCHES.map((branch, i) => (
              <motion.div
                key={i}
                className={`mindmap-branch bg-[var(--color-surface-1)] border rounded-2xl p-5 cursor-pointer relative overflow-hidden ${
                  expandedIndex === i
                    ? 'border-[var(--color-vn-green)] bg-[var(--color-surface-2)] shadow-lg shadow-[rgba(45,143,94,0.1)]'
                    : 'border-[rgba(200,160,74,0.08)]'
                }`}
                onClick={() => toggleBranch(i)}
                onMouseEnter={() => setExpandedIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-[var(--color-vn-green)] transition-opacity duration-200 ${
                    expandedIndex === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">{branch.icon}</span>
                  <span className="font-[var(--font-display)] font-bold text-base text-[#e8e4dc]">
                    {branch.title}
                  </span>
                </div>
                <p className="text-sm text-[#5e5a52] m-0 mb-1">{branch.preview}</p>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[#9a9588] leading-relaxed m-0 pt-3 mt-3 border-t border-[rgba(200,160,74,0.08)]">
                        {branch.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Alliance emphasis */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-[rgba(45,143,94,0.08)] to-[rgba(45,143,94,0.03)] border border-[var(--color-vn-green)] rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-[var(--font-display)] text-[clamp(1.1rem,2vw,1.35rem)] font-semibold text-[#e8e4dc] m-0 leading-relaxed">
              🤝{' '}
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
