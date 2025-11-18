import React from 'react'
import './Dashboard.css'

function DashboardSynth({ onNavigate, onBackToOK }) {
  const [currentTime] = React.useState(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }))
  const [phoneBattery] = React.useState(86)

  const braceletData = {
    status: 'Sintetizando y Cargando...',
    battery: 30,
    reservoir: 18,
    statusColor: '#2196F3'
  }

  const drdData = {
    status: 'En Proceso',
    cmpLevel: 80,
    statusColor: '#2196F3'
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="status-bar">
          <span className="status-time">{currentTime}</span>
          <div className="status-right">
            <svg className="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="6" width="18" height="10" rx="2" />
              <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            </svg>
            <span className="status-battery">{phoneBattery}%</span>
          </div>
        </div>
        <div className="header-content">
          <h1 className="dashboard-title">Mi Bio-Harmonizer</h1>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Card 1 */}
        <div className="status-card bracelet-card" onClick={() => onNavigate('bracelet')}>
          <div className="card-header">
            <div className="card-icon bracelet-icon" style={{ background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3" />
                <polyline points="21 3 21 12 12 12" />
              </svg>
            </div>
            <div className="card-title-section">
              <h3>Bio-Harmonizer</h3>
              <span className="status-badge" style={{ backgroundColor: braceletData.statusColor }}>
                {braceletData.status}
              </span>
            </div>
          </div>

          <div className="card-metrics">
            <div className="metric">
              <div className="metric-label">
                <span>Batería</span>
                <span className="metric-value">{braceletData.battery}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${braceletData.battery}%`, backgroundColor: '#2196F3' }}></div>
              </div>
            </div>

            <div className="metric">
              <div className="metric-label">
                <span>Reservorio</span>
                <span className="metric-value">{braceletData.reservoir}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${braceletData.reservoir}%`, backgroundColor: '#03A9F4' }}></div>
              </div>
            </div>
          </div>

          <p className="metric-estimate" style={{ marginTop: '0.5rem', color: '#1976D2', fontWeight: 600 }}>
            No retirar hasta completar proceso (DRD bloqueado).
          </p>
        </div>

        {/* Card 2 */}
        <div className="status-card drd-card">
          <div className="card-header">
            <div className="card-icon drd-icon" style={{ background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="card-title-section">
              <h3>Mi Micro-Farmacia</h3>
              <span className="status-badge" style={{ backgroundColor: drdData.statusColor }}>
                {drdData.status}
              </span>
            </div>
          </div>

          <div className="card-metrics">
            <div className="metric">
              <div className="metric-label">
                <span>CMP</span>
                <span className="metric-value">{drdData.cmpLevel}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${drdData.cmpLevel}%`, backgroundColor: '#2196F3' }}></div>
              </div>
              <p className="metric-estimate">Suministro Anual: {drdData.cmpLevel}%</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="daily-summary-card" style={{ background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)' }}>
          <div className="summary-icon" style={{ background: '#2196F3' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <p className="summary-text" style={{ color: '#1565C0' }}>Tu salud está bajo control.</p>
        </div>

        {/* Botón para volver al dashboard inicial */}
        <button 
          className="card-button" 
          onClick={() => {
            if (onNavigate) {
              onNavigate('dashboard')
            }
            if (onBackToOK) {
              onBackToOK()
            }
          }}
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            marginTop: '1rem'
          }}
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  )
}

export default DashboardSynth

