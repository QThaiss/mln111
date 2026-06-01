import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, FileQuestion, Play, AlertCircle } from 'lucide-react'
import { QUIZ_QUESTIONS } from '../data/content'

// Quiz phases: 'idle' -> 'active' -> 'results'
const TOTAL = QUIZ_QUESTIONS.length

export default function StudentSection() {
  const [phase, setPhase] = useState('idle')      // 'idle' | 'active' | 'results'
  const [currentIdx, setCurrentIdx] = useState(0)  // index of current question (0-based)
  const [answers, setAnswers] = useState({})       // { questionId: selectedOptionId }
  const [revealed, setRevealed] = useState(false)   // whether the answer feedback is shown

  const currentQuestion = QUIZ_QUESTIONS[currentIdx]
  const selectedOptId = answers[currentQuestion?.id]
  const hasSelected = selectedOptId !== undefined
  const isAnswerCorrect = hasSelected && selectedOptId === currentQuestion?.correctAnswer
  const isLastQuestion = currentIdx === TOTAL - 1

  // --- Handlers ---
  const handleStart = () => {
    setPhase('active')
    setCurrentIdx(0)
    setAnswers({})
    setRevealed(false)
  }

  const handleSelect = (optId) => {
    if (phase !== 'active' || revealed) return // prevent changing answer after reveal
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optId }))
    setRevealed(true)
  }

  const handleNext = () => {
    if (!revealed) return
    if (isLastQuestion) {
      setPhase('results')
      setRevealed(false)
      setTimeout(() => {
        document.getElementById('quiz-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    } else {
      setRevealed(false)
      setCurrentIdx(prev => prev + 1)
    }
  }

  const handleRetry = () => {
    setPhase('idle')
    setCurrentIdx(0)
    setAnswers({})
    setRevealed(false)
    document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' })
  }

  // --- Results calculation ---
  const results = useMemo(() => {
    if (phase !== 'results') return null
    let correct = 0
    QUIZ_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++
    })
    const incorrect = TOTAL - correct
    const percentage = Math.round((correct / TOTAL) * 100)

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

    return { correct, incorrect, total: TOTAL, percentage, message, colorClass }
  }, [answers, phase])

  // --- Render ---
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
            {phase === 'idle' && 'Kiểm tra kiến thức của bạn với 20 câu hỏi trắc nghiệm. Kết quả mỗi câu sẽ hiển thị ngay sau khi bạn chọn đáp án.'}
            {phase === 'active' && 'Chọn đáp án bạn cho là đúng. Kết quả sẽ hiển thị ngay lập tức.'}
            {phase === 'results' && 'Dưới đây là kết quả chi tiết bài quiz của bạn.'}
          </motion.p>
        </div>

        {/* ====== PHASE: IDLE — Start Screen ====== */}
        <AnimatePresence mode="wait">
          {phase === 'idle' && (
            <motion.div
              key="start-screen"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-[var(--color-surface-1)] border border-[rgba(59,130,246,0.15)] rounded-3xl p-10 md:p-14 max-w-[520px] mx-auto">
                <div className="w-20 h-20 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center mx-auto mb-8">
                  <FileQuestion size={36} className="text-[var(--color-future-blue)]" />
                </div>
                <h3 className="font-[var(--font-display)] text-2xl font-bold text-[#e8e4dc] mb-3">
                  Sẵn sàng chưa?
                </h3>
                <p className="text-[#9a9588] mb-2 text-sm">
                  {TOTAL} câu hỏi trắc nghiệm • Không giới hạn thời gian
                </p>
                <p className="text-[#9a9588] mb-8 text-sm">
                  Kết quả mỗi câu sẽ hiển thị ngay sau khi bạn chọn đáp án.
                </p>
                <button
                  onClick={handleStart}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-[var(--color-future-blue)] to-[#2563eb] text-white font-bold text-lg rounded-xl hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  <Play size={22} />
                  Bắt đầu làm Quiz
                </button>
              </div>
            </motion.div>
          )}

          {/* ====== PHASE: ACTIVE — One Question at a Time ====== */}
          {phase === 'active' && (
            <motion.div
              key={`question-${currentIdx}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#9a9588]">
                    Câu <span className="text-[var(--color-future-blue)]">{currentIdx + 1}</span> / {TOTAL}
                  </span>
                  <span className="text-sm font-semibold text-[#9a9588]">
                    {Math.round(((currentIdx + 1) / TOTAL) * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-[var(--color-surface-2)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[var(--color-future-blue)] to-[#2563eb] rounded-full"
                    initial={{ width: `${(currentIdx / TOTAL) * 100}%` }}
                    animate={{ width: `${((currentIdx + 1) / TOTAL) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Question card */}
              <div className="bg-[var(--color-surface-1)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 md:p-8 mb-8">
                <h4 className="font-bold text-lg md:text-xl text-[#e8e4dc] mb-6 leading-relaxed">
                  <span className="text-[var(--color-future-blue)] mr-2 font-[var(--font-display)]">Câu {currentIdx + 1}.</span>
                  {currentQuestion.question}
                </h4>
                <div className="space-y-3">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selectedOptId === opt.id
                    const isCorrectOpt = opt.id === currentQuestion.correctAnswer

                    // Determine styling based on reveal state
                    let bgClass, textClass, radioClass, icon = null

                    if (revealed) {
                      if (isCorrectOpt) {
                        // Always highlight the correct answer in green
                        bgClass = "bg-[rgba(45,143,94,0.15)] border-[var(--color-vn-green)]"
                        textClass = "text-[var(--color-vn-bright)]"
                        radioClass = "border-[var(--color-vn-green)] bg-[var(--color-vn-green)]"
                        icon = <CheckCircle2 className="w-5 h-5 ml-auto text-[var(--color-vn-green)] shrink-0" />
                      } else if (isSelected && !isCorrectOpt) {
                        // User's wrong choice in red
                        bgClass = "bg-[rgba(184,48,48,0.15)] border-[var(--color-red)]"
                        textClass = "text-[var(--color-red-bright)]"
                        radioClass = "border-[var(--color-red)] bg-[var(--color-red)]"
                        icon = <XCircle className="w-5 h-5 ml-auto text-[var(--color-red)] shrink-0" />
                      } else {
                        // Unselected, non-correct options dimmed
                        bgClass = "bg-[var(--color-surface-2)] border-[rgba(255,255,255,0.02)] opacity-40"
                        textClass = "text-[#9a9588]"
                        radioClass = "border-[rgba(255,255,255,0.2)]"
                      }
                    } else {
                      // Not revealed yet — normal interactive state
                      bgClass = isSelected
                        ? "bg-[rgba(59,130,246,0.15)] border-[var(--color-future-blue)]"
                        : "bg-[var(--color-surface-2)] border-[rgba(255,255,255,0.05)] hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.05)] cursor-pointer"
                      textClass = isSelected
                        ? "text-[#e8e4dc]"
                        : "text-[#9a9588] hover:text-[#e8e4dc]"
                      radioClass = isSelected
                        ? "border-[var(--color-future-blue)] bg-[var(--color-future-blue)]"
                        : "border-[rgba(255,255,255,0.2)]"
                    }

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelect(opt.id)}
                        className={`flex items-center p-4 rounded-xl border transition-all duration-200 ${revealed ? '' : 'cursor-pointer'} ${bgClass}`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center mr-4 shrink-0 transition-colors ${radioClass}`}>
                          {(isSelected || (revealed && isCorrectOpt)) && <div className="w-2 h-2 rounded-full bg-[var(--color-bg-deep)]" />}
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
              </div>

              {/* Answer feedback banner */}
              <AnimatePresence>
                {revealed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`flex items-center gap-3 p-4 rounded-xl border mb-6 ${
                      isAnswerCorrect
                        ? 'bg-[rgba(45,143,94,0.12)] border-[rgba(45,143,94,0.3)]'
                        : 'bg-[rgba(184,48,48,0.12)] border-[rgba(184,48,48,0.3)]'
                    }`}
                  >
                    {isAnswerCorrect
                      ? <CheckCircle2 className="w-6 h-6 text-[var(--color-vn-green)] shrink-0" />
                      : <AlertCircle className="w-6 h-6 text-[var(--color-red)] shrink-0" />
                    }
                    <div>
                      <p className={`font-bold text-base ${
                        isAnswerCorrect ? 'text-[var(--color-vn-bright)]' : 'text-[var(--color-red-bright)]'
                      }`}>
                        {isAnswerCorrect ? 'Chính xác!' : 'Chưa đúng!'}
                      </p>
                      {!isAnswerCorrect && (
                        <p className="text-sm text-[#9a9588] mt-1">
                          Đáp án đúng: <span className="text-[var(--color-vn-bright)] font-semibold">{currentQuestion.correctAnswer}</span>
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next / Finish button */}
              <div className="text-center">
                <button
                  onClick={handleNext}
                  disabled={!revealed}
                  className={`inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl transition-all duration-300 ${
                    revealed
                      ? 'bg-gradient-to-br from-[var(--color-future-blue)] to-[#2563eb] text-white hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]'
                      : 'bg-[var(--color-surface-2)] text-[#555] cursor-not-allowed border border-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {isLastQuestion ? 'Hoàn thành & Xem kết quả' : 'Câu tiếp theo'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ====== PHASE: RESULTS ====== */}
          {phase === 'results' && results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Score card */}
              <div
                id="quiz-results"
                className="bg-[var(--color-surface-1)] border border-[var(--color-future-blue)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-10"
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
                    <div className="text-xs text-[var(--color-red)] uppercase tracking-wider">Câu sai</div>
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
              </div>

              {/* Detail review — show all questions with correct/wrong highlights */}
              <div className="space-y-6">
                <h3 className="font-[var(--font-display)] text-xl font-bold text-[#e8e4dc] text-center mb-2">
                  Xem lại chi tiết
                </h3>
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const userAnswer = answers[q.id]
                  const isCorrectAnswer = userAnswer === q.correctAnswer

                  return (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className={`bg-[var(--color-surface-1)] border rounded-2xl p-6 md:p-8 ${
                        isCorrectAnswer
                          ? 'border-[rgba(45,143,94,0.3)]'
                          : 'border-[rgba(184,48,48,0.3)]'
                      }`}
                    >
                      <h4 className="font-bold text-lg text-[#e8e4dc] mb-4 leading-relaxed flex items-start gap-2">
                        <span className="shrink-0 mt-0.5">
                          {isCorrectAnswer
                            ? <CheckCircle2 className="w-5 h-5 text-[var(--color-vn-green)]" />
                            : <XCircle className="w-5 h-5 text-[var(--color-red)]" />
                          }
                        </span>
                        <span>
                          <span className="text-[var(--color-future-blue)] mr-2 font-[var(--font-display)]">Câu {idx + 1}.</span>
                          {q.question}
                        </span>
                      </h4>
                      <div className="space-y-2">
                        {q.options.map((opt) => {
                          const isUserChoice = userAnswer === opt.id
                          const isCorrect = q.correctAnswer === opt.id

                          let bgClass = "bg-[var(--color-surface-2)] border-[rgba(255,255,255,0.02)] opacity-40"
                          let textClass = "text-[#9a9588]"
                          let icon = null

                          if (isCorrect) {
                            bgClass = "bg-[rgba(45,143,94,0.15)] border-[var(--color-vn-green)]"
                            textClass = "text-[var(--color-vn-bright)]"
                            icon = <CheckCircle2 className="w-5 h-5 ml-auto text-[var(--color-vn-green)] shrink-0" />
                          } else if (isUserChoice && !isCorrect) {
                            bgClass = "bg-[rgba(184,48,48,0.15)] border-[var(--color-red)]"
                            textClass = "text-[var(--color-red-bright)]"
                            icon = <XCircle className="w-5 h-5 ml-auto text-[var(--color-red)] shrink-0" />
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`flex items-start p-3 rounded-xl border transition-all duration-200 ${bgClass}`}
                            >
                              <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center mr-4 shrink-0 ${
                                isCorrect
                                  ? 'border-[var(--color-vn-green)] bg-[var(--color-vn-green)]'
                                  : isUserChoice && !isCorrect
                                    ? 'border-[var(--color-red)] bg-[var(--color-red)]'
                                    : 'border-[rgba(255,255,255,0.2)]'
                              }`}>
                                {(isUserChoice || isCorrect) && <div className="w-2 h-2 rounded-full bg-[var(--color-bg-deep)]" />}
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

              {/* Bottom retry button */}
              <div className="text-center mt-10">
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-[var(--color-future-blue)] to-[#2563eb] text-white font-bold rounded-xl hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  <RotateCcw size={18} />
                  Làm lại Quiz
                </button>
              </div>
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
