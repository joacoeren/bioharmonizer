import React, { useState } from 'react'
import './Messages.css'

function Messages({ onNavigate }) {
  const [activeChat, setActiveChat] = useState('rios')
  
  const chats = [
    { id: 'rios', name: 'Dra. Ríos', active: true },
    { id: 'support', name: 'Polo Soporte Técnico', active: false }
  ]

  const messages = {
    rios: [
      {
        id: 1,
        sender: 'Dra. Ríos',
        message: 'Hola Carlos, un gusto hablar con vos. Como te dije, los biomarcadores se estabilizaron perfectamente con la nueva dosis. Estarás en control por una semana. Cualquier duda, no dudes en escribirme.',
        time: 'Hoy, 14:30',
        type: 'received'
      }
    ],
    support: []
  }

  const currentMessages = messages[activeChat] || []

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
        <button className="new-message-button" style={{ width: '40px', height: '40px', border: 'none', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </header>

      <div className="messages-content">
        {/* Lista de Chats */}
        <div className="chats-list">
          {chats.map((chat) => (
            <div 
              key={chat.id}
              className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="chat-avatar">
                {chat.name.charAt(0)}
              </div>
              <div className="chat-info">
                <p className="chat-name">{chat.name}</p>
                {chat.active && <span className="chat-badge">Activo</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Mensajes del chat activo */}
        <div className="messages-list">
          {currentMessages.map((msg) => (
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

