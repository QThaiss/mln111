import { useState } from 'react'
import { motion } from 'framer-motion'
import { COMMUNITIES, EUROPE_STEPS, VIETNAM_STEPS } from '../data/content'

export default function NationSection() {
  const [expandedCommunity, setExpandedCommunity] = useState(null)

  return (
    <section
      className="py-[clamp(80px,12vh,140px)] px-0 relative overflow-hidden"
      id="nation"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-deep) 0%, rgba(184,48,48,0.03) 40%, rgba(200,160,74,0.04) 70%, var(--color-bg-main) 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(184,48,48,0.08)] border border-[rgba(184,48,48,0.15)] rounded-full text-xs font-semibold text-[var(--color-red-bright)] tracking-[2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)]" />
            Phần 4 — Trọng tâm
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Dân tộc & <span className="text-[var(--color-red-bright)]">Đặc thù Phương Đông</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#9a9588] leading-relaxed max-w-[700px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Quá trình hình thành dân tộc gắn liền với đấu tranh giai cấp. Tuy nhiên, sự ra đời của dân tộc mang tính đặc thù lịch sử sâu sắc, đặc biệt là sự khác biệt giữa phương Tây và phương Đông.
          </motion.p>
        </div>

        {/* Communities before nation */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-[var(--font-display)] text-xl font-bold text-center mb-8 text-[#e8e4dc]">
            Tiến trình cộng đồng người <span className="text-[var(--color-accent)]">trước dân tộc</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITIES.map((c, i) => (
              <motion.div
                key={i}
                className={`community-card bg-[var(--color-surface-1)] border rounded-2xl p-6 cursor-pointer relative overflow-hidden ${
                  expandedCommunity === i
                    ? 'border-[var(--color-accent)] shadow-lg shadow-[rgba(200,160,74,0.1)]'
                    : 'border-[rgba(200,160,74,0.08)]'
                }`}
                onClick={() => setExpandedCommunity(expandedCommunity === i ? null : i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Arrow connector for non-last items */}
                {i < COMMUNITIES.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[var(--color-accent)] text-xl z-10">
                    →
                  </div>
                )}
                <div className="text-center">
                  <span className="mb-4 flex justify-center text-[var(--color-accent)]">{c.icon}</span>
                  <span className="text-[0.7rem] text-[#5e5a52] tracking-[1px] uppercase block mb-2">
                    {c.period}
                  </span>
                  <h4 className="font-[var(--font-display)] text-lg font-bold text-[#e8e4dc] mb-2">
                    {c.name}
                  </h4>
                  <p className="text-sm text-[#9a9588] leading-relaxed m-0">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dual comparison: Europe vs Vietnam */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-[var(--font-display)] text-xl font-bold text-center mb-12 text-[#e8e4dc]">
            Sự khác biệt trong <span className="text-[var(--color-accent)]">Hình thành Dân tộc</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative">
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(200,160,74,0.2)] to-transparent -translate-x-1/2" />

            {/* Left Column: Phương Tây */}
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-block px-6 py-2 rounded-full border border-[var(--color-accent)] bg-[rgba(200,160,74,0.08)] text-[var(--color-accent)] font-bold text-lg">
                  🌍 Phương Tây (Châu Âu)
                </div>
              </div>
              <div className="space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-[rgba(200,160,74,0.15)]">
                {EUROPE_STEPS.map((step, i) => (
                  <motion.div
                    key={`eu-${i}`}
                    className="flex gap-6 relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-surface-2)] border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(200,160,74,0.2)]">
                      {step.icon}
                    </div>
                    <div className="bg-[var(--color-surface-1)] border border-[rgba(200,160,74,0.08)] rounded-xl p-5 flex-1 hover:border-[var(--color-accent)] transition-colors">
                      <h4 className="font-[var(--font-display)] text-base font-bold mb-2 text-[var(--color-accent)]">
                        {step.label}
                      </h4>
                      <p className="text-sm text-[#9a9588] leading-relaxed m-0">{step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Phương Đông (Việt Nam) */}
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-block px-6 py-2 rounded-full border border-[var(--color-red)] bg-[rgba(184,48,48,0.08)] text-[var(--color-red-bright)] font-bold text-lg">
                  🇻🇳 Phương Đông (Việt Nam)
                </div>
              </div>
              <div className="space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-[rgba(184,48,48,0.15)]">
                {VIETNAM_STEPS.map((step, i) => (
                  <motion.div
                    key={`vn-${i}`}
                    className="flex gap-6 relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-surface-2)] border-2 border-[var(--color-red-bright)] text-[var(--color-red-bright)] flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(184,48,48,0.2)]">
                      {step.icon}
                    </div>
                    <div className="bg-[var(--color-surface-1)] border border-[rgba(184,48,48,0.08)] rounded-xl p-5 flex-1 hover:border-[var(--color-red-bright)] transition-colors">
                      <h4 className="font-[var(--font-display)] text-base font-bold mb-2 text-[var(--color-red-bright)]">
                        {step.label}
                      </h4>
                      <p className="text-sm text-[#9a9588] leading-relaxed m-0">{step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Conclusion Point */}
          <motion.div
            className="mt-16 mx-auto max-w-[800px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[rgba(200,160,74,0.08)] to-[rgba(184,48,48,0.05)] border border-[rgba(200,160,74,0.2)] rounded-3xl p-8 md:p-10 text-center relative shadow-2xl">
              {/* Connector from timeline above (only visible on desktop) */}
              <div className="hidden lg:block absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-[rgba(200,160,74,0.2)] to-[rgba(200,160,74,0.5)] -translate-x-1/2" />
              
              <h4 className="font-[var(--font-display)] text-[clamp(1.2rem,2vw,1.5rem)] font-bold text-[#e8e4dc] mb-4">
                Kết luận sự khác biệt
              </h4>
              <p className="text-base md:text-lg text-[#9a9588] leading-relaxed m-0">
                Ở Phương Tây, dân tộc hình thành gắn liền với sự phát triển của <strong className="text-[var(--color-accent)]">Chủ nghĩa Tư bản</strong> và thị trường thống nhất. Trái lại, ở Phương Đông (đặc biệt là Việt Nam), dân tộc hình thành từ rất sớm, xuất phát từ nhu cầu <strong className="text-[var(--color-red-bright)]">cố kết cộng đồng, trị thủy và chống ngoại xâm</strong> để bảo vệ nền văn hóa và lãnh thổ thiêng liêng.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
