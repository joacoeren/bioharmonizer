import React from 'react'
import './CriticalAlert.css'

function CriticalAlert({ onClose, onNavigate, onConfirm }) {
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
        <h1 className="critical-title">⚠ ¡Alerta Crítica: Ajuste de Dosis!</h1>
        <p className="critical-message">
          Tu Bio-Harmonizer detectó una variación metabólica importante. La Dra. Ríos ya ajustó tu dosis de forma remota para mantenerte seguro.
        </p>
        <div className="critical-instruction">
          <strong>NECESARIO:</strong> Por favor, acopla tu brazalete al DRD esta noche para que sintetice la nueva formulación.
        </div>
        <div className="critical-actions">
          <button
            className="critical-button primary"
            onClick={() => {
              if (onConfirm) {
                onConfirm()
              } else if (onClose) {
                onClose()
              }
            }}
          >
            Entendido
          </button>
          <button
            className="critical-button secondary"
            onClick={() => {
              if (onNavigate) {
                onNavigate('support')
              }
              if (onClose) {
                onClose()
              }
            }}
          >
            Llamar al Polo
          </button>
        </div>
      </div>
    </div>
  )
}

export default CriticalAlert

