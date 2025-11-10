import React from 'react'
import './Dashboard.css'

function Dashboard({ onNavigate, onShowRecharge }) {
  const braceletData = {
    status: 'Operativo',
    battery: 85,
    reservoir: 70,
    statusColor: '#4CAF50'
  }

  const drdData = {
    status: 'Listo',
    cmpLevel: 30,
    cmpEstimated: '3 meses',
    statusColor: '#4CAF50'
  }

  const nextActions = [
    { type: 'recharge', time: 'Hoy, 10 PM', description: 'Recarga Brazalete (sugerido)' },
    { type: 'maintenance', date: '15 de marzo de 2046', description: 'Mantenimiento DRD' }
  ]

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="profile-section">
            <div className="profile-avatar">CG</div>
            <div className="profile-info">
              <h2>Carlos García</h2>
              <p className="profile-subtitle">Paciente</p>
            </div>
          </div>
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
              <p className="metric-estimate">Estimado: {drdData.cmpEstimated}</p>
            </div>
          </div>
          
          <button className="card-button">Programar Mantenimiento</button>
        </div>

        {/* Card 3: Próximas Acciones */}
        <div className="actions-card">
          <h3 className="actions-title">Próximas Acciones</h3>
          <div className="actions-list">
            {nextActions.map((action, index) => (
              <div key={index} className="action-item">
                <div className="action-icon">
                  {action.type === 'recharge' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  )}
                </div>
                <div className="action-content">
                  <p className="action-description">{action.description}</p>
                  <p className="action-time">{action.time || action.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

