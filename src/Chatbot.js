import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '82ce1153-c8ea-430b-9dc2-3508eb28e887',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '82ce1153-c8ea-430b-9dc2-3508eb28e887',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot