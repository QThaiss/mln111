import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Building2, BookOpen, Zap } from 'lucide-react'
import { TIMELINE_DATA, STRUGGLE_FORMS } from '../data/content'

const ICONS = { TrendingUp, Building: Building2, BookOpen }

export default function TimelineSection() {
  const [visibleNodes, setVisibleNodes] = useState(new Set())
  const trackRef = useRef(null)

  useEffect(() => {
    const nodes = trackRef.current?.querySelectorAll('.tl-node')
    if (!nodes) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleNodes((prev) => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => nodes.forEach((n) => observer.unobserve(n))
  }, [])

  return (
    <section className="py-[clamp(80px,12vh,140px)] px-0 relative bg-[var(--color-bg-main)] overflow-hidden" id="timeline">
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
            Phần 3
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-[var(--color-accent)]">Động lực</span> của Lịch sử
          </motion.h2>

          <motion.p
            className="text-lg text-[#9a9588] leading-relaxed max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vì sao đấu tranh giai cấp lại là &ldquo;lịch sử của mọi xã hội&rdquo;?
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div ref={trackRef} className="timeline-track relative max-w-[800px] mx-auto mb-16">
          {TIMELINE_DATA.map((item, i) => {
            const isLeft = i % 2 === 0
            const isVisible = visibleNodes.has(String(i))

            return (
              <div
                key={i}
                className="tl-node relative pb-12"
                data-index={i}
              >
                {/* Dot */}
                <div className={`timeline-dot ${isVisible ? 'active' : ''}`} />

                {/* Card */}
                <motion.div
                  className={`relative md:w-[calc(50%-40px)] ${
                    isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  } ml-14 md:ml-0`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className={`bg-[var(--color-surface-1)] border border-[rgba(200,160,74,0.08)] rounded-2xl p-6 transition-all duration-500 ${
                    isVisible ? 'border-[rgba(200,160,74,0.2)] shadow-lg shadow-[rgba(200,160,74,0.05)]' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-accent)] m-0">
                        {item.era}
                      </h3>
                    </div>
                    <p className="text-[0.95rem] text-[#9a9588] leading-relaxed m-0">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Central emphasis */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(200,160,74,0.08)] to-[rgba(184,48,48,0.05)] border border-[var(--color-accent)] rounded-3xl p-10 text-center relative mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-bg-main)] px-4">
            <Zap className="text-[var(--color-accent)]" size={32} />
          </div>
          <p className="font-[var(--font-display)] text-[clamp(1.1rem,2vw,1.4rem)] font-semibold leading-relaxed m-0 text-[#e8e4dc]">
            Trong xã hội có giai cấp, đấu tranh giai cấp chính là{' '}
            <span className="text-[var(--color-accent)] font-bold">
              động lực trực tiếp, quan trọng của lịch sử
            </span>
            , là chiếc chìa khóa để giải quyết mâu thuẫn giữa{' '}
            <span className="text-[var(--color-accent)] font-bold">Lực lượng sản xuất</span> và{' '}
            <span className="text-[var(--color-accent)] font-bold">Quan hệ sản xuất</span>.
          </p>
        </motion.div>

        {/* Struggle forms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRUGGLE_FORMS.map((form, i) => {
            const IconComponent = ICONS[form.icon]
            return (
              <motion.div
                key={i}
                className="struggle-card bg-[var(--color-surface-1)] border border-[rgba(200,160,74,0.08)] rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div
                  className="struggle-icon-wrapper mx-auto"
                  style={{ color: form.color, background: `${form.color}15` }}
                >
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold mb-3 text-[#e8e4dc]">
                  {form.label}
                </h3>
                <p className="text-sm text-[#9a9588] leading-relaxed m-0">
                  {form.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
