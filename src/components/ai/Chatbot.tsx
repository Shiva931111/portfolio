import type { FC, FormEvent } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'How did you build the RAG system?',
  'Tell me about the invoice automation pipeline.',
  'What tools do you use for financial AI?',
]

const Chatbot: FC = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content:
        "Hi, I'm Shiva’s AI assistant. Ask about projects, tech stack, or how we can work together.",
    },
  ])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
    }

    const assistantMessage: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      content:
        "Thanks for the question! This portfolio chatbot is a client-side demo. Reach out via email for a detailed walkthrough tailored to your use case.",
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput('')
  }

  const handleSuggestionClick = (text: string) => {
    setInput(text)
  }

  return (
    <div className="chatbot-root">
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
          >
            <div className="chatbot-header">
              <div>
                <p className="chatbot-title">AI Assistant</p>
                <p className="chatbot-subtitle">Ask about Shiva&apos;s AI projects</p>
              </div>
              <button
                type="button"
                aria-label="Close assistant"
                className="chatbot-close"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`chatbot-message ${
                    m.role === 'assistant' ? 'assistant' : 'user'
                  }`}
                >
                  {m.content}
                </div>
              ))}
            </div>

            <div className="chatbot-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="chatbot-suggestion"
                  onClick={() => handleSuggestionClick(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <form className="chatbot-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ask a question about my work…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle AI assistant"
      >
        <span className="chatbot-toggle-orb" />
        <span className="chatbot-toggle-text">AI Assistant</span>
      </button>
    </div>
  )
}

export default Chatbot

