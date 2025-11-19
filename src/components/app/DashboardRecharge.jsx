import React from 'react'
import './Dashboard.css'

function DashboardRecharge({ onNavigate, onBackToOK }) {
  const [currentTime] = React.useState(new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }))
  const [phoneBattery] = React.useState(85)

  const braceletData = {
    status: 'Requiere Recarga',
    battery: 20,
    reservoir: 5,
    statusColor: '#FF9800'
  }

  const drdData = {
    status: 'Esperando Brazalete',
    cmpLevel: 80,
    statusColor: '#FF9800'
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
        <div className="return-top-action">
          <button
            className="return-button"
            onClick={() => {
              if (onBackToOK) {
                onBackToOK()
              }
              if (onNavigate) {
                onNavigate('dashboard')
              }
            }}
          >
            ← Volver al inicio
          </button>
        </div>

        {/* Card 1: Brazalete */}
        <div className="status-card bracelet-card" onClick={() => onNavigate('bracelet')}>
          <div className="card-header">
            <div className="card-icon bracelet-icon" style={{ background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
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
                  style={{ width: `${braceletData.battery}%`, backgroundColor: '#d32f2f' }}
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
                  style={{ width: `${braceletData.reservoir}%`, backgroundColor: '#d32f2f' }}
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
              <p className="metric-estimate">Suministro Anual: {drdData.cmpLevel}%</p>
            </div>
          </div>
        </div>

        {/* Card 3: Tarea Pendiente */}
        <div className="pending-task-card">
          <div className="task-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="task-content">
            <p className="task-text">Tarea: Acoplar Brazalete al DRD esta noche.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardRecharge

