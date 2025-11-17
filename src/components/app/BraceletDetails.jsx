import React from 'react'
import './BraceletDetails.css'

function BraceletDetails({ onNavigate }) {
  // Gráfico mostrando pico antes del ajuste y luego estabilización
  const chartData = [
    { time: '00:00', value: 45 },
    { time: '04:00', value: 50 },
    { time: '08:00', value: 65 },
    { time: '12:00', value: 85 }, // Pico antes del ajuste
    { time: '16:00', value: 70 }, // Después del ajuste
    { time: '20:00', value: 68 },
    { time: '24:00', value: 70 }
  ]

  const maxValue = Math.max(...chartData.map(d => d.value))
  
  const doseInfo = {
    base: '25 mg/día',
    adjustedDate: '15 de enero de 2046',
    adjustedBy: 'Dra. Ríos',
    sensorStatus: 'OK',
    nextRecharge: 'En 3 días'
  }

  return (
    <div className="bracelet-details">
      <header className="details-header">
        <button className="back-button" onClick={() => onNavigate('dashboard')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>Bio-Harmonizer</h1>
        <button className="settings-button" style={{ width: '40px', height: '40px', border: 'none', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
          </svg>
        </button>
      </header>

      <div className="details-content">
        {/* Gráfico de línea de tiempo */}
        <div className="chart-card">
          <h3 className="chart-title">Nivel de Fármaco en Sangre (Estimado) - Últimas 24/48h</h3>
          <div className="chart-container">
            <div className="chart-y-axis">
              <span>100%</span>
              <span>50%</span>
              <span>0%</span>
            </div>
            <div className="chart-area">
              <svg className="chart-svg" viewBox="0 0 300 150">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points={chartData.map((d, i) => 
                    `${(i / (chartData.length - 1)) * 300},${150 - (d.value / maxValue) * 130}`
                  ).join(' ')}
                  fill="none"
                  stroke="#667eea"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points={`0,150 ${chartData.map((d, i) => 
                    `${(i / (chartData.length - 1)) * 300},${150 - (d.value / maxValue) * 130}`
                  ).join(' ')} 300,150`}
                  fill="url(#chartGradient)"
                />
                {chartData.map((d, i) => (
                  <circle
                    key={i}
                    cx={(i / (chartData.length - 1)) * 300}
                    cy={150 - (d.value / maxValue) * 130}
                    r="4"
                    fill="#667eea"
                  />
                ))}
              </svg>
              <div className="chart-x-axis">
                {chartData.map((d, i) => (
                  <span key={i} className="chart-label">{d.time}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="indicators-grid">
          <div className="indicator-card">
            <div className="indicator-icon" style={{ background: '#4CAF50' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="indicator-info">
              <p className="indicator-label">Batería</p>
              <p className="indicator-value">85%</p>
            </div>
          </div>

          <div className="indicator-card">
            <div className="indicator-icon" style={{ background: '#2196F3' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="indicator-info">
              <p className="indicator-label">Reservorio</p>
              <p className="indicator-value">70%</p>
            </div>
          </div>

          <div className="indicator-card">
            <div className="indicator-icon" style={{ background: '#FF9800' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="indicator-info">
              <p className="indicator-label">Última Dosis</p>
              <p className="indicator-value">Hace 2h</p>
            </div>
          </div>

          <div className="indicator-card">
            <div className="indicator-icon" style={{ background: '#9C27B0' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="indicator-info">
              <p className="indicator-label">Próxima Dosis</p>
              <p className="indicator-value">En 4h</p>
            </div>
          </div>
        </div>

        {/* Info Adicional */}
        <div className="info-card">
          <div className="info-item">
            <span className="info-label">Dosis Base Actual:</span>
            <span className="info-value">{doseInfo.base}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Ajustada el:</span>
            <span className="info-value">{doseInfo.adjustedDate} por {doseInfo.adjustedBy}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Estado de Sensores:</span>
            <span className="info-value status-ok">{doseInfo.sensorStatus}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Próxima Recarga Sugerida:</span>
            <span className="info-value">{doseInfo.nextRecharge}</span>
          </div>
        </div>

        {/* Botón Contactar Médico */}
        <button className="contact-button" onClick={() => onNavigate('messages')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Contactar a mi médico
        </button>
      </div>
    </div>
  )
}

export default BraceletDetails

