import React from 'react'
import './CriticalAlert.css'

function CriticalAlert({ onClose }) {
  return (
    <div className="critical-alert">
      <div className="critical-alert-content">
        <div className="critical-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h1 className="critical-title">¡ALERTA CRÍTICA: Falla del Sistema!</h1>
        <p className="critical-message">
          Tu DRD ha detectado un error y no puede sintetizar el medicamento. La reserva de emergencia de tu brazalete tiene <strong>3 días restantes</strong>. Hemos notificado al Polo. Te contactaremos inmediatamente. Por favor, no intentes manipular el DRD.
        </p>
        <div className="critical-info">
          <div className="critical-info-item">
            <span className="critical-info-label">Código de Error:</span>
            <span className="critical-info-value">E01 - Sensor</span>
          </div>
          <div className="critical-info-item">
            <span className="critical-info-label">Reserva de Emergencia:</span>
            <span className="critical-info-value">3 días</span>
          </div>
        </div>
        <button className="critical-button" onClick={onClose}>
          Ver Pasos de Emergencia
        </button>
        <button className="critical-button-secondary" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  )
}

export default CriticalAlert

