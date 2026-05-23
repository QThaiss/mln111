import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DIALECTIC_NODES } from '../data/content'

export default function DialecticalRelationSection() {
  const [activeNode, setActiveNode] = useState(DIALECTIC_NODES[0])

  return (
    <section
      className="py-[clamp(80px,12vh,140px)] px-0 relative overflow-hidden"
      id="dialectic"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-main) 0%, rgba(200,160,74,0.03) 50%, var(--color-bg-main) 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-[2]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(200,160,74,0.08)] border border-[rgba(200,160,74,0.15)] rounded-full text-xs font-semibold text-[var(--color-accent)] tracking-[2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Biện chứng 3 mặt
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Giai cấp - Dân tộc - <span className="text-[var(--color-future-blue)]">Nhân loại</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#9a9588] leading-relaxed max-w-[700px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Lợi ích nhân loại không tồn tại trừu tượng, mà được cụ thể hóa qua lăng kính của lợi ích giai cấp và dân tộc. Sự thống nhất giữa chúng chính là chìa khóa giải phóng con người.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Orbital Interactive Diagram */}
          <motion.div
            className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Orbits */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-dashed border-[rgba(200,160,74,0.2)] rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] border border-[rgba(200,160,74,0.1)] rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            </div>

            {/* Core Intersection */}
            <div className="absolute z-10 w-[140px] h-[140px] md:w-[160px] md:h-[160px] bg-[var(--color-bg-deep)] border-2 border-[var(--color-accent)] rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(200,160,74,0.15)] text-center p-4">
              <span className="font-[var(--font-display)] font-bold text-[#e8e4dc] text-sm md:text-base leading-tight">
                Giá trị<br/>Tiến bộ
              </span>
              <span className="text-[0.65rem] text-[#9a9588] mt-1 uppercase tracking-widest">Giao thoa</span>
            </div>

            {/* Orbiting Nodes */}
            {DIALECTIC_NODES.map((node, i) => {
              // Calculate positions (0, 120, 240 degrees)
              const angle = (i * 120 - 90) * (Math.PI / 180);
              const radius = window.innerWidth < 768 ? 130 : 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const isActive = activeNode.id === node.id;

              return (
                <motion.div
                  key={node.id}
                  className={`absolute z-20 cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}`}
                  style={{ x, y }}
                  onClick={() => setActiveNode(node)}
                >
                  <div 
                    className="flex flex-col items-center"
                    style={{ filter: isActive ? `drop-shadow(0 0 20px ${node.color}40)` : 'none' }}
                  >
                    <div 
                      className={`w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${isActive ? 'bg-[var(--color-surface-2)]' : 'bg-[var(--color-surface-1)]'}`}
                      style={{ 
                        borderColor: node.color,
                        color: node.color
                      }}
                    >
                      {node.icon}
                    </div>
                    <span 
                      className="mt-3 font-[var(--font-display)] font-bold text-sm md:text-base transition-colors duration-300"
                      style={{ color: isActive ? '#e8e4dc' : '#9a9588' }}
                    >
                      {node.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interactive Info Panel */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--color-surface-1)] border border-[rgba(200,160,74,0.1)] rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                {/* Accent glow line top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: activeNode.color }}
                />
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border bg-[rgba(255,255,255,0.03)]"
                  style={{ borderColor: activeNode.color, color: activeNode.color }}
                >
                  {activeNode.icon}
                </div>

                <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold mb-4 text-[#e8e4dc]">
                  Lợi ích <span style={{ color: activeNode.color }}>{activeNode.title}</span>
                </h3>
                
                <p className="text-base md:text-lg text-[#9a9588] leading-relaxed mb-6">
                  {activeNode.desc}
                </p>

                <div className="bg-[var(--color-surface-2)] rounded-xl p-5 border border-[rgba(255,255,255,0.02)]">
                  <h4 className="font-bold text-sm text-[#e8e4dc] uppercase tracking-wider mb-2">Điểm Giao Thoa</h4>
                  <p className="text-sm text-[#9a9588] m-0 leading-relaxed">
                    Khi giai cấp đại diện cho xu thế tiến bộ (chống áp bức bóc lột, bảo vệ hòa bình, công bằng, độc lập), lợi ích của giai cấp đó sẽ <strong className="text-[#e8e4dc]">thống nhất hoàn toàn</strong> với lợi ích chân chính của dân tộc và nhân loại.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Conclusion Quote */}
        <motion.div
          className="mt-20 max-w-[850px] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <blockquote className="font-[var(--font-display)] text-[clamp(1.1rem,2vw,1.4rem)] italic text-[#e8e4dc] leading-relaxed relative px-8 py-6 border-l-4 border-r-4 border-[var(--color-accent)] bg-gradient-to-r from-[rgba(200,160,74,0.05)] via-transparent to-[rgba(200,160,74,0.05)] rounded-lg shadow-lg">
            "Trong xã hội có giai cấp, lợi ích nhân loại không đứng ngoài lịch sử cụ thể; nó chỉ trở thành hiện thực khi gắn với những lực lượng xã hội và dân tộc đại diện cho sự tiến bộ."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
