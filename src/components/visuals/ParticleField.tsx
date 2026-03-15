import type { FC } from 'react'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  speed: number
}

export const ParticleField: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 20000))
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random(),
        speed: 0.2 + Math.random() * 0.4,
      }))
    }

    const render = () => {
      const particles = particlesRef.current
      const { width, height } = canvas

      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.y += p.speed
        if (p.y > height) {
          p.y = 0
          p.x = Math.random() * width
        }

        const alpha = 0.1 + p.z * 0.5
        const size = 1 + p.z * 2

        ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    resize()
    createParticles()
    render()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}

