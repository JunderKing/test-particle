// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthCoreContextProvider, PromptSettingType } from '@particle-network/auth-core-modal'
import { AuthType } from '@particle-network/auth-core'
import { EthereumSepolia } from '@particle-network/chains';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <AuthCoreContextProvider
      options={{
        projectId: import.meta.env.VITE_PROJECT_ID || '',
        clientKey: import.meta.env.VITE_CLIENT_KEY || '',
        appId: import.meta.env.VITE_APP_ID || '',
        authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
        themeType: 'dark',
        fiatCoin: 'USD',
        language: 'en',
        erc4337: {
          name: 'SIMPLE',
          version: '1.0.0',
        },
        promptSettingConfig: {
          promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
          promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
        },
        wallet: {
          visible: true,
          customStyle: {
            supportChains: [EthereumSepolia],
          }
        },
      }}
    >
      <App />
    </AuthCoreContextProvider>
  // </React.StrictMode>,
)
