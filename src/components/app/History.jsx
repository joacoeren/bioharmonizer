import React from 'react'
import './History.css'

function History({ onNavigate }) {
  const historyItems = [
    { date: 'Hoy', time: '10:30 PM', event: 'Recarga completada', status: 'success' },
    { date: 'Ayer', time: '10:15 PM', event: 'Recarga iniciada', status: 'info' },
    { date: '15 Ene', time: '10:30 PM', event: 'Recarga completada', status: 'success' },
    { date: '14 Ene', time: '10:20 PM', event: 'Ajuste de dosis remoto', status: 'info' },
    { date: '13 Ene', time: '10:30 PM', event: 'Recarga completada', status: 'success' },
    { date: '12 Ene', time: '09:45 AM', event: 'Calibración del brazalete', status: 'success' }
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
                    {item.status === 'success' ? '✓' : 'ℹ'}
                  </span>
                </div>
                <p className="history-date">{item.date} • {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History

