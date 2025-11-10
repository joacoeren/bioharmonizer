import React, { useState } from 'react'
import Dashboard from './app/Dashboard'
import BraceletDetails from './app/BraceletDetails'
import Messages from './app/Messages'
import History from './app/History'
import Support from './app/Support'
import RechargeNotification from './app/RechargeNotification'
import CriticalAlert from './app/CriticalAlert'
import BottomNav from './app/BottomNav'
import './iPhoneMockup.css'

function PhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState('dashboard')
  const [showRechargeNotification, setShowRechargeNotification] = useState(false)
  const [showCriticalAlert, setShowCriticalAlert] = useState(false)

  const handleNavigate = (screen) => {
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} onShowRecharge={() => setShowRechargeNotification(true)} />
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
              <CriticalAlert onClose={() => setShowCriticalAlert(false)} />
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
              <>
                {renderScreen()}
                <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
              </>
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
