import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, RotateCcw, Send, FileQuestion } from 'lucide-react'
import { QUIZ_QUESTIONS } from '../data/content'

export default function StudentSection() {
  const [answers, setAnswers] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSelect = (qId, oId) => {
    if (isSubmitted) return
    setAnswers(prev => ({ ...prev, [qId]: oId }))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    // Optional: Scroll to results
    setTimeout(() => {
      document.getElementById('quiz-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  const handleRetry = () => {
    setAnswers({})
    setIsSubmitted(false)
    document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' })
  }

  const answeredCount = Object.keys(answers).length

  const results = useMemo(() => {
    if (!isSubmitted) return null
    let correct = 0
    QUIZ_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++
    })
    const total = QUIZ_QUESTIONS.length
    const incorrect = total - correct
    const percentage = Math.round((correct / total) * 100)
    
    let message = ""
    let colorClass = ""
    if (percentage >= 80) {
      message = "Xuất sắc! Bạn nắm rất vững kiến thức lý luận."
      colorClass = "text-[var(--color-vn-bright)]"
    } else if (percentage >= 50) {
      message = "Khá tốt! Tuy nhiên bạn nên ôn lại một số khái niệm."
      colorClass = "text-[var(--color-accent)]"
    } else {
      message = "Cần cố gắng! Hãy đọc kỹ lại các nội dung phía trên nhé."
      colorClass = "text-[var(--color-red-bright)]"
    }

    return { correct, incorrect, total, percentage, message, colorClass }
  }, [answers, isSubmitted])

  return (
    <section
      className="py-[clamp(80px,12vh,140px)] px-0 relative overflow-hidden"
      id="student"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-deep) 0%, rgba(59,130,246,0.03) 50%, var(--color-bg-main) 100%)',
      }}
    >
      <div className="max-w-[800px] mx-auto px-6 relative z-[2]">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.15)] rounded-full text-xs font-semibold text-[var(--color-future-blue)] tracking-[2px] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-future-blue)]" />
            Phần 6
          </motion.div>

          <motion.h2
            className="font-[var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-bold mb-4 text-[#e8e4dc]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Quiz: <span className="text-[var(--color-future-blue)]">Giai cấp & Dân tộc</span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#9a9588] leading-relaxed max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Mời bạn hoàn thành 20 câu hỏi trắc nghiệm dưới đây để tự đánh giá mức độ hiểu bài. Bạn có thể nộp bài bất cứ lúc nào (câu chưa chọn sẽ bị tính là sai).
          </motion.p>
          
          {/* Progress Badge */}
          <motion.div 
            className="mt-6 inline-flex items-center gap-2 bg-[var(--color-surface-2)] border border-[rgba(255,255,255,0.05)] px-4 py-2 rounded-xl text-sm font-semibold text-[#e8e4dc]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FileQuestion size={18} className="text-[var(--color-future-blue)]" />
            Đã chọn: <span className="text-[var(--color-future-blue)]">{answeredCount}</span> / 20
          </motion.div>
        </div>

        {/* Quiz Container */}
        <div className="space-y-8 mb-12">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const selectedOptId = answers[q.id]
            
            return (
              <motion.div 
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 > 0.5 ? 0 : idx * 0.05 }}
                className="bg-[var(--color-surface-1)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 md:p-8"
              >
                <h4 className="font-bold text-lg md:text-xl text-[#e8e4dc] mb-6 leading-relaxed">
                  <span className="text-[var(--color-future-blue)] mr-2 font-[var(--font-display)]">Câu {idx + 1}.</span>
                  {q.question}
                </h4>
                <div className="space-y-3">
                  {q.options.map((opt) => {
                    const isSelected = selectedOptId === opt.id
                    const isCorrect = q.correctAnswer === opt.id
                    
                    let bgClass = "bg-[var(--color-surface-2)] border-[rgba(255,255,255,0.05)]"
                    let textClass = "text-[#9a9588]"
                    let icon = null

                    if (isSubmitted) {
                      if (isCorrect) {
                        // Highlight the correct answer green regardless of selection
                        bgClass = "bg-[rgba(45,143,94,0.15)] border-[var(--color-vn-green)]"
                        textClass = "text-[var(--color-vn-bright)]"
                        icon = <CheckCircle2 className="w-5 h-5 ml-auto text-[var(--color-vn-green)] shrink-0" />
                      } else if (isSelected && !isCorrect) {
                        // Highlight wrong choice red
                        bgClass = "bg-[rgba(184,48,48,0.15)] border-[var(--color-red)]"
                        textClass = "text-[var(--color-red-bright)]"
                        icon = <XCircle className="w-5 h-5 ml-auto text-[var(--color-red)] shrink-0" />
                      } else {
                        // Dim other choices
                        bgClass = "bg-[var(--color-surface-2)] border-[rgba(255,255,255,0.02)] opacity-40"
                      }
                    } else {
                      if (isSelected) {
                        bgClass = "bg-[rgba(59,130,246,0.15)] border-[var(--color-future-blue)]"
                        textClass = "text-[#e8e4dc]"
                      } else {
                        bgClass = "hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.05)] cursor-pointer"
                        textClass = "hover:text-[#e8e4dc]"
                      }
                    }

                    return (
                      <div 
                        key={opt.id}
                        onClick={() => handleSelect(q.id, opt.id)}
                        className={`flex items-start p-4 rounded-xl border transition-all duration-200 ${bgClass}`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center mr-4 shrink-0 transition-colors ${
                          isSelected && !isSubmitted 
                            ? 'border-[var(--color-future-blue)] bg-[var(--color-future-blue)]' 
                            : isSubmitted && isCorrect
                              ? 'border-[var(--color-vn-green)] bg-[var(--color-vn-green)]'
                              : isSubmitted && isSelected && !isCorrect
                                ? 'border-[var(--color-red)] bg-[var(--color-red)]'
                                : 'border-[rgba(255,255,255,0.2)]'
                        }`}>
                          {(isSelected || (isSubmitted && isCorrect)) && <div className="w-2 h-2 rounded-full bg-[var(--color-bg-deep)]" />}
                        </div>
                        <span className={`font-medium text-[0.95rem] leading-relaxed ${textClass}`}>
                          <span className="mr-2 font-bold">{opt.id}.</span>
                          {opt.text}
                        </span>
                        {icon}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Submit Button & Results */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="submit-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <button 
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-[var(--color-future-blue)] to-[#2563eb] text-white font-bold rounded-xl hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <Send size={20} />
                Nộp bài đánh giá
              </button>
            </motion.div>
          ) : (
            <motion.div 
              id="quiz-results"
              key="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--color-surface-1)] border border-[var(--color-future-blue)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-future-blue)] to-transparent" />
              
              <h3 className="font-[var(--font-display)] text-3xl font-bold text-[#e8e4dc] mb-2">Kết quả của bạn</h3>
              <p className={`font-bold text-lg mb-8 ${results.colorClass}`}>
                {results.message}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-[var(--color-surface-2)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <div className="text-3xl font-black text-[var(--color-future-blue)] mb-1">{results.total}</div>
                  <div className="text-xs text-[#9a9588] uppercase tracking-wider">Tổng số câu</div>
                </div>
                <div className="bg-[rgba(45,143,94,0.1)] p-4 rounded-xl border border-[rgba(45,143,94,0.2)]">
                  <div className="text-3xl font-black text-[var(--color-vn-bright)] mb-1">{results.correct}</div>
                  <div className="text-xs text-[var(--color-vn-green)] uppercase tracking-wider">Câu đúng</div>
                </div>
                <div className="bg-[rgba(184,48,48,0.1)] p-4 rounded-xl border border-[rgba(184,48,48,0.2)]">
                  <div className="text-3xl font-black text-[var(--color-red-bright)] mb-1">{results.incorrect}</div>
                  <div className="text-xs text-[var(--color-red)] uppercase tracking-wider">Câu sai / Bỏ trống</div>
                </div>
                <div className="bg-[var(--color-surface-2)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <div className="text-3xl font-black text-[#e8e4dc] mb-1">{results.percentage}%</div>
                  <div className="text-xs text-[#9a9588] uppercase tracking-wider">Tỷ lệ chính xác</div>
                </div>
              </div>

              <button 
                onClick={handleRetry}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-surface-2)] border border-[rgba(255,255,255,0.1)] text-[#e8e4dc] font-semibold rounded-xl hover:bg-[var(--color-surface-1)] hover:border-[var(--color-future-blue)] hover:text-[var(--color-future-blue)] transition-all duration-300"
              >
                <RotateCcw size={18} />
                Làm lại Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Academic Conclusion (Preserved) */}
        <motion.div
          className="mt-24 max-w-[800px] mx-auto text-center border-t border-[rgba(59,130,246,0.15)] pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 rounded-full border border-[var(--color-future-blue)] text-[var(--color-future-blue)] mx-auto flex items-center justify-center mb-6 opacity-60">
            <span className="font-[var(--font-display)] text-2xl font-bold">∞</span>
          </div>
          <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[#e8e4dc] mb-6">
            Dòng Chảy Lịch Sử Vẫn Tiếp Tục
          </h3>
          <p className="text-lg text-[#9a9588] leading-relaxed text-justify md:text-center">
            Từ những mầm mống bất công đầu tiên khi chế độ tư hữu xuất hiện, trải qua hàng thiên niên kỷ đấu tranh rực lửa, nhân loại đang từng bước tiến về phía ánh sáng của sự tự do và bình đẳng. Đấu tranh giai cấp không phải là một định mệnh khắc nghiệt, mà là <strong className="text-[#e8e4dc]">động lực vĩ đại</strong> để tháo gỡ xiềng xích, đánh thức khát vọng giải phóng dân tộc và con người. Dòng chảy ấy sẽ không dừng lại cho đến khi mọi áp bức bị xóa bỏ, và mỗi chúng ta đều là một giọt nước mang trong mình sức mạnh kiến tạo nên đại dương lịch sử.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
