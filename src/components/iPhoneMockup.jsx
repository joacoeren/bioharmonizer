import React, { useState, useEffect } from 'react'
import Dashboard from './app/Dashboard'
import DashboardRecharge from './app/DashboardRecharge'
import DashboardSynth from './app/DashboardSynth'
import BraceletDetails from './app/BraceletDetails'
import Messages from './app/Messages'
import History from './app/History'
import Support from './app/Support'
import RechargeNotification from './app/RechargeNotification'
import CriticalAlert from './app/CriticalAlert'
import VideoCallPopup from './app/VideoCallPopup'
import BottomNav from './app/BottomNav'
import './iPhoneMockup.css'

function PhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState('dashboard')
  const [dashboardState, setDashboardState] = useState('ok') // 'ok' o 'recharge'
  const [showRechargeNotification, setShowRechargeNotification] = useState(false)
  const [showCriticalAlert, setShowCriticalAlert] = useState(false)
  const [showVideoCallPopup, setShowVideoCallPopup] = useState(false)
  const [criticalAlertReviewed, setCriticalAlertReviewed] = useState(false)

  const handleNavigate = (screen) => {
    setCurrentScreen(screen)
  }

  const handleCriticalAcknowledge = () => {
    setShowCriticalAlert(false)
    setCriticalAlertReviewed(true)
    setDashboardState('recharge')
    setCurrentScreen('dashboard')
  }

  // Mostrar alerta crítica cada 1 minuto
  useEffect(() => {
    const interval = setInterval(() => {
      // Solo mostrar si no está siendo mostrada actualmente
      if (!showCriticalAlert) {
        setShowCriticalAlert(true)
        setCriticalAlertReviewed(false) // Resetear para que aparezca en el dashboard
      }
    }, 60000) // 1 minuto = 60000ms

    return () => clearInterval(interval)
  }, [showCriticalAlert])

  const handleVideoCallJoin = () => {
    setShowVideoCallPopup(false)
  }

  const handleVideoCallRemind = () => {
    setShowVideoCallPopup(false)
    setTimeout(() => setShowVideoCallPopup(true), 5000)
  }

  const handleVideoCallCancel = () => {
    setShowVideoCallPopup(false)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        if (dashboardState === 'recharge') {
          return <DashboardRecharge 
            onNavigate={handleNavigate}
            onBackToOK={() => setDashboardState('ok')}
          />
        }
        if (dashboardState === 'synth') {
          return <DashboardSynth 
            onNavigate={handleNavigate} 
            onBackToOK={() => {
              setDashboardState('ok')
              setCurrentScreen('dashboard')
            }}
          />
        }
        return <Dashboard 
          onNavigate={handleNavigate} 
          onShowRecharge={() => setShowRechargeNotification(true)}
          onShowCriticalAlert={() => setShowCriticalAlert(true)}
          onShowRechargeState={() => {
            setShowCriticalAlert(true)
          }}
          onShowSynthState={() => setDashboardState('synth')}
          onShowVideoCall={() => setShowVideoCallPopup(true)}
          criticalAlertReviewed={criticalAlertReviewed}
        />
      case 'bracelet':
        return <BraceletDetails onNavigate={handleNavigate} />
      case 'messages':
        return <Messages onNavigate={handleNavigate} />
      case 'history':
        return <History onNavigate={handleNavigate} />
      case 'support':
        return <Support onNavigate={handleNavigate} />
      default:
        return <Dashboard onNavigate={handleNavigate} onShowRecharge={() => setShowRechargeNotification(true)} />
    }
  }

  return (
    <div className="iphone-container">
      <div className="iphone">
        {/* Notch */}
        <div className="iphone-notch"></div>
        
        {/* Screen */}
        <div className="iphone-screen">
          <div className="app-content">
            {showCriticalAlert && (
              <CriticalAlert 
                onClose={() => {
                  setShowCriticalAlert(false)
                  setCriticalAlertReviewed(true)
                }} 
                onNavigate={handleNavigate}
                onConfirm={handleCriticalAcknowledge}
              />
            )}
            {!showCriticalAlert && showVideoCallPopup && (
              <VideoCallPopup
                onJoin={handleVideoCallJoin}
                onRemind={handleVideoCallRemind}
                onCancel={handleVideoCallCancel}
              />
            )}
            {!showCriticalAlert && showRechargeNotification && (
              <RechargeNotification 
                onClose={() => setShowRechargeNotification(false)}
                onRemind={() => {
                  setShowRechargeNotification(false)
                  setTimeout(() => setShowRechargeNotification(true), 1000)
                }}
              />
            )}
            {!showCriticalAlert && !showRechargeNotification && (
              <div className="screen-wrapper">
                {renderScreen()}
                <BottomNav 
                  currentScreen={currentScreen} 
                  onNavigate={handleNavigate}
                  onResetDashboard={() => {
                    setDashboardState('ok')
                    setCurrentScreen('dashboard')
                  }}
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="iphone-home-indicator"></div>
      </div>
    </div>
  )
}

export { PhoneMockup }
export default PhoneMockup
