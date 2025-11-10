import React from 'react'
import './RechargeNotification.css'

function RechargeNotification({ onClose, onRemind }) {
  return (
    <div className="recharge-notification-overlay">
      <div className="recharge-notification">
        <div className="notification-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
            <path d="M12 7v6M9 10h6" />
          </svg>
        </div>
        <h2 className="notification-title">¡Recarga Necesaria!</h2>
        <p className="notification-message">
          Tu Bio-Harmonizer tiene el reservorio bajo y batería crítica. Por favor, acóplalo al DRD esta noche para recargar. Si no lo haces, recibirás una alerta en tu muñeca.
        </p>
        <div className="notification-actions">
          <button className="notification-button secondary" onClick={onRemind}>
            Recordarme en 1 hora
          </button>
          <button className="notification-button primary" onClick={onClose}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

export default RechargeNotification

