import React from 'react'
import './Support.css'

function Support({ onNavigate }) {
  const supportOptions = [
    {
      icon: 'phone',
      title: 'Llamar al Soporte',
      description: 'Línea directa 24/7',
      action: 'Llamar'
    },
    {
      icon: 'chat',
      title: 'Chat en Vivo',
      description: 'Habla con un especialista',
      action: 'Iniciar Chat'
    },
    {
      icon: 'emergency',
      title: 'Emergencia',
      description: 'Protocolo de emergencia',
      action: 'Activar'
    },
    {
      icon: 'faq',
      title: 'Preguntas Frecuentes',
      description: 'Encuentra respuestas rápidas',
      action: 'Ver FAQ'
    }
  ]

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        )
      case 'chat':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )
      case 'emergency':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )
      case 'faq':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="support">
      <header className="support-header">
        <button className="back-button" onClick={() => onNavigate('dashboard')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Soporte</h1>
        <div style={{ width: '40px' }}></div>
      </header>

      <div className="support-content">
        <div className="support-options">
          {supportOptions.map((option, index) => (
            <div key={index} className="support-card">
              <div className="support-icon" style={{
                background: index === 2 
                  ? 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}>
                {getIcon(option.icon)}
              </div>
              <div className="support-info">
                <h3 className="support-title">{option.title}</h3>
                <p className="support-description">{option.description}</p>
              </div>
              <button className="support-action">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        <div className="support-contact">
          <h3 className="contact-title">Información de Contacto</h3>
          <div className="contact-item">
            <span className="contact-label">Teléfono:</span>
            <span className="contact-value">0800-BIO-HARM</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <span className="contact-value">soporte@bioharmonizer.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Horario:</span>
            <span className="contact-value">24/7</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support

