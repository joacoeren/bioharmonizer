import React from 'react'
import './VideoCallPopup.css'

function VideoCallPopup({ onJoin, onRemind, onCancel }) {
  return (
    <div className="videocall-popup">
      <div className="videocall-popup-content">
        <div className="videocall-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="15" height="10" rx="2" />
            <polygon points="16 9 22 7 22 17 16 15 16 9" />
          </svg>
        </div>
        <h1 className="videocall-title">📞 Videollamada con Dra. Ríos</h1>
        <p className="videocall-message">
          Tu videollamada con la Dra. Ríos está programada para <strong>AHORA (10:00 AM).</strong>
        </p>
        <div className="videocall-actions">
          <button className="videocall-button primary" onClick={onJoin}>
            Unirse Ahora
          </button>
          <button className="videocall-button secondary" onClick={onRemind}>
            Recordarme en 5 min
          </button>
          <button className="videocall-button secondary outline" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoCallPopup

