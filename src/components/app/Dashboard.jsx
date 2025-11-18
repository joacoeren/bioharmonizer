import React from 'react'
import './Dashboard.css'

function Dashboard({
  onNavigate,
  onShowRecharge,
  onShowCriticalAlert,
  onShowRechargeState,
  onShowSynthState,
  onShowVideoCall
}) {
  const [currentTime] = React.useState(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }))
  const [phoneBattery] = React.useState(85)

  const braceletData = {
    status: 'Operativo',
    battery: 91,
    reservoir: 78,
    statusColor: '#4CAF50'
  }

  const drdData = {
    status: 'Listo',
    cmpLevel: 80,
    cmpEstimated: 'Restan 10 meses',
    statusColor: '#4CAF50'
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
        {/* Card 1: Brazalete */}
        <div className="status-card bracelet-card" onClick={() => onNavigate('bracelet')}>
          <div className="card-header">
            <div className="card-icon bracelet-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="8" width="18" height="12" rx="2" />
                <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
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
                <div 
                  className="progress-fill" 
                  style={{ width: `${braceletData.battery}%`, backgroundColor: '#4CAF50' }}
                ></div>
              </div>
            </div>
            
            <div className="metric">
              <div className="metric-label">
                <span>Reservorio</span>
                <span className="metric-value">{braceletData.reservoir}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${braceletData.reservoir}%`, backgroundColor: '#2196F3' }}
                ></div>
              </div>
            </div>
          </div>
          
          <button className="card-button">Ver Detalles →</button>
        </div>

        {/* Card 2: DRD */}
        <div className="status-card drd-card">
          <div className="card-header">
            <div className="card-icon drd-icon">
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
                <div 
                  className="progress-fill" 
                  style={{ width: `${drdData.cmpLevel}%`, backgroundColor: '#FF9800' }}
                ></div>
              </div>
              <p className="metric-estimate">Suministro Anual: {drdData.cmpLevel}% ({drdData.cmpEstimated})</p>
            </div>
          </div>
          
          <button className="card-button" disabled>Programar Mantenimiento Anual</button>
        </div>

        {/* Card 3: Resumen Diario */}
        <div className="daily-summary-card">
          <div className="summary-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <p className="summary-text">¡Excelente! Tu salud está estable.</p>
        </div>

        {/* Botones de navegación para ver todos los frames */}
        <div className="frame-navigation">
          <button 
            className="frame-button" 
            onClick={onShowCriticalAlert}
            style={{ background: '#ff9800' }}
          >
            Ver APP-02 (Alerta Crítica)
          </button>
          <button 
            className="frame-button" 
            onClick={onShowRechargeState}
            style={{ background: '#f57c00' }}
          >
            Ver APP-03 (Requiere Recarga)
          </button>
          {onShowSynthState && (
            <button 
              className="frame-button" 
              onClick={onShowSynthState}
              style={{ background: '#1976d2' }}
            >
              Ver APP-07 (Sintetizando)
            </button>
          )}
          {onShowVideoCall && (
            <button 
              className="frame-button" 
              onClick={onShowVideoCall}
              style={{ background: '#26a69a' }}
            >
              Ver APP-08 (Videollamada)
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

