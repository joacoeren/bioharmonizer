import React from 'react'
import './History.css'

function History({ onNavigate }) {
  const historyItems = [
    { date: '15 de enero', event: 'Dosis ajustada remotamente por Dra. Ríos. (Ver Mensajes)', status: 'info', hasLink: true },
    { date: '14 de enero', event: 'Recarga de Brazalete completada.', status: 'success' },
    { date: '10 de enero', event: 'Alerta de niveles de estrés detectados.', status: 'warning' },
    { date: '8 de enero', event: 'Recarga de Brazalete completada.', status: 'success' },
    { date: '2 de enero', event: 'Recarga de Brazalete completada.', status: 'success' }
  ]

  return (
    <div className="history">
      <header className="history-header">
        <button className="back-button" onClick={() => onNavigate('dashboard')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Historial</h1>
        <div style={{ width: '40px' }}></div>
      </header>

      <div className="history-content">
        <div className="history-list">
          {historyItems.map((item, index) => (
            <div key={index} className="history-item">
              <div className="history-timeline">
                <div className="history-dot"></div>
                {index < historyItems.length - 1 && <div className="history-line"></div>}
              </div>
              <div className="history-details">
                <div className="history-header-item">
                  <p className="history-event">{item.event}</p>
                  <span className={`history-status ${item.status}`}>
                    {item.status === 'success' ? '✓' : item.status === 'warning' ? '⚠' : 'ℹ'}
                  </span>
                </div>
                <p className="history-date">{item.date}</p>
                {item.hasLink && (
                  <button 
                    className="history-link-button"
                    onClick={() => onNavigate('messages')}
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.5rem',
                      background: '#f5f5f5',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#667eea',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Ver Mensajes →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History

