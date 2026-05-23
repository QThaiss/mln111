import { useEffect, useRef } from 'react'

export function useParticles(canvasRef) {
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    const PARTICLE_COUNT = 70

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = -Math.random() * 0.5 - 0.1
        this.opacity = Math.random() * 0.4 + 0.05
        this.fadeSpeed = Math.random() * 0.002 + 0.0005
        const hue = 35 + Math.random() * 20
        const sat = 60 + Math.random() * 30
        const light = 55 + Math.random() * 25
        this.color = `hsla(${hue}, ${sat}%, ${light}%, `
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.opacity -= this.fadeSpeed
        this.x += Math.sin(this.y * 0.008) * 0.15

        if (this.opacity <= 0 || this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset()
          this.y = canvas.height + 10
          this.opacity = Math.random() * 0.4 + 0.05
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.opacity + ')'
        ctx.fill()
      }
    }

    function init() {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animRef.current = requestAnimationFrame(animate)
    }

    resize()
    init()
    animate()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [canvasRef])
}
