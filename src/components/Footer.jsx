import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-1)] border-t border-[rgba(200,160,74,0.08)] pt-12 pb-6 relative">
      <div className="footer-glow" />

      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-[var(--font-cinzel)] text-2xl font-bold mb-2 text-[#e8e4dc]">
            Dòng Chảy <span className="text-[var(--color-accent)]">Lịch Sử</span>
          </div>
          <p className="text-sm text-[#5e5a52] max-w-[500px] mx-auto mb-8">
            Bản sắc của đấu tranh — Trang web tương tác phục vụ học tập
            môn Chủ nghĩa xã hội khoa học.
          </p>

          <div className="w-[60px] h-px bg-[rgba(200,160,74,0.2)] mx-auto mb-6" />

          <p className="text-xs text-[#5e5a52]">
            © 2025 — Dự án học tập MLN111 • FPT University
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
