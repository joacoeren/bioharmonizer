import React, { useState, useEffect } from 'react'
import './VideoCallPopup.css'

function VideoCallPopup({ onJoin, onRemind, onCancel }) {
  const [isInCall, setIsInCall] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  useEffect(() => {
    let interval = null
    if (isInCall) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isInCall])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleJoin = () => {
    setIsInCall(true)
  }

  const handleEndCall = () => {
    setIsInCall(false)
    setCallDuration(0)
    if (onJoin) {
      onJoin()
    }
  }

  if (isInCall) {
    return (
      <div className="videocall-active">
        {/* Vista principal de la doctora - pantalla completa */}
        <div className="videocall-main-view">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1200&fit=crop" 
            alt="Dra. Ríos"
            className="doctor-background-image"
          />
          <div className="doctor-overlay">
            <div className="videocall-info">
              <h2 className="videocall-name">Dra. Ríos</h2>
              <p className="videocall-status-text">Conectado</p>
            </div>
          </div>
        </div>

        {/* Vista previa pequeña (cámara del usuario) */}
        <div className="videocall-preview">
          <div className="preview-content">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" 
              alt="Tú"
              className="preview-image"
            />
          </div>
        </div>

        {/* Tiempo de llamada */}
        <div className="videocall-timer">
          {formatTime(callDuration)}
        </div>

        {/* Controles inferiores */}
        <div className="videocall-controls">
          <button 
            className={`control-button ${isMuted ? 'active' : ''}`}
            onClick={() => setIsMuted(!isMuted)}
            aria-label={isMuted ? 'Activar micrófono' : 'Silenciar'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMuted ? (
                <>
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                  <path d="M17 16.95A7 7 0 0 1 5 12v-2m7 7v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1" />
                  <path d="M21 12a9 9 0 0 1-4 7.5" />
                </>
              ) : (
                <>
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </>
              )}
            </svg>
          </button>

          <button 
            className={`control-button ${isVideoOff ? 'active' : ''}`}
            onClick={() => setIsVideoOff(!isVideoOff)}
            aria-label={isVideoOff ? 'Activar cámara' : 'Desactivar cámara'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isVideoOff ? (
                <>
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </>
              ) : (
                <>
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </>
              )}
            </svg>
          </button>

          <button 
            className="control-button end-call"
            onClick={handleEndCall}
            aria-label="Finalizar llamada"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.1-2.66 1.85-.18.18-.43.28-.69.28h-.2c-.28 0-.55-.11-.75-.32L.32 13.1c-.21-.2-.32-.47-.32-.75 0-.28.11-.55.32-.75C3.34 8.78 7.46 7 12 7s8.66 1.78 11.68 4.6c.21.2.32.47.32.75 0 .28-.11.55-.32.75l-1.86 1.86c-.2.21-.47.32-.75.32-.26 0-.51-.1-.69-.28-.79-.75-1.68-1.36-2.66-1.85-.33-.16-.56-.51-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
            </svg>
          </button>
        </div>
      </div>
    )
  }

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
          <button className="videocall-button primary" onClick={handleJoin}>
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

