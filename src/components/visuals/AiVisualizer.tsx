import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const AiVisualizer: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight || 360

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const nodeGeometry = new THREE.SphereGeometry(0.06, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x818cf8 })
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.5 })

    const nodes: THREE.Mesh[] = []
    const lines: THREE.Line[] = []

    const nodeCount = 60
    for (let i = 0; i < nodeCount; i += 1) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      const radius = 2 + Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      node.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      )
      group.add(node)
      nodes.push(node)
    }

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        if (Math.random() > 0.1) continue
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position,
          nodes[j].position,
        ])
        const line = new THREE.Line(geometry, lineMaterial)
        group.add(line)
        lines.push(line)
      }
    }

    const light = new THREE.PointLight(0xffffff, 1.5, 50)
    light.position.set(0, 0, 6)
    scene.add(light)

    let frameId: number
    const animate = () => {
      group.rotation.y += 0.0015
      group.rotation.x += 0.0007
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight || 360
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      nodeGeometry.dispose()
      nodeMaterial.dispose()
      lineMaterial.dispose()
      lines.forEach((line) => line.geometry.dispose())
    }
  }, [])

  return <div ref={containerRef} className="ai-visualizer" aria-hidden="true" />
}

export default AiVisualizer

