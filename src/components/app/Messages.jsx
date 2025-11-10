import React, { useState } from 'react'
import './Messages.css'

function Messages({ onNavigate }) {
  const [messages] = useState([
    {
      id: 1,
      sender: 'Dra. Ríos',
      message: 'Hola Carlos, ajusté tu dosis según los últimos biomarcadores. Deberías notar una mejora en los próximos días.',
      time: 'Hace 2 horas',
      type: 'received'
    },
    {
      id: 2,
      sender: 'Sistema',
      message: 'Tu Bio-Harmonizer se recargó exitosamente. Reservorio al 100% y batería al 95%.',
      time: 'Ayer, 10:30 PM',
      type: 'system'
    },
    {
      id: 3,
      sender: 'Tú',
      message: 'Gracias doctora, noto que me siento mejor. ¿Debo hacer algún cambio en mi rutina?',
      time: 'Hace 1 hora',
      type: 'sent'
    }
  ])

  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    if (newMessage.trim()) {
      // Aquí se enviaría el mensaje
      setNewMessage('')
    }
  }

  return (
    <div className="messages">
      <header className="messages-header">
        <button className="back-button" onClick={() => onNavigate('dashboard')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Mensajes</h1>
        <div style={{ width: '40px' }}></div>
      </header>

      <div className="messages-content">
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-item ${msg.type}`}>
              {msg.type === 'received' && (
                <div className="message-avatar">
                  {msg.sender.charAt(0)}
                </div>
              )}
              <div className="message-bubble">
                {msg.type === 'system' ? (
                  <div className="system-message">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                    <span>{msg.message}</span>
                  </div>
                ) : (
                  <>
                    <p className="message-sender">{msg.sender}</p>
                    <p className="message-text">{msg.message}</p>
                    <p className="message-time">{msg.time}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="messages-input-container">
          <input
            type="text"
            className="messages-input"
            placeholder="Escribe un mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Messages

