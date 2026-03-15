import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-text">
          © {new Date().getFullYear()} Shiva · AI/ML Engineer
        </span>
        <span className="footer-subtext">Built with React, TypeScript & Three.js</span>
      </div>
    </footer>
  )
}

