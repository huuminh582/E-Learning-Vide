'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { store } from '@store/index';
// import Alert from 'react-s-alert'; // To be added when using react-s-alert
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';

interface ProvidersProps {
  children: React.ReactNode;
}

const theme = {
  token: {
    colorPrimary: '#FF6B35', // Vibrant orange
    colorInfo: '#FFA726', // Warm amber
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    borderRadius: 8,
    fontFamily: '"Inter", "Outfit", sans-serif',
  },
  components: {
    Button: {
      colorPrimary: 'linear-gradient(135deg, #FF6B35 0%, #FFA726 100%)',
      colorPrimaryHover: 'linear-gradient(135deg, #E05A2B 0%, #F57C00 100%)',
      colorPrimaryActive: 'linear-gradient(135deg, #CC5227 0%, #E65100 100%)',
    },
  },
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        {children}
        {/* <Alert stack={{ limit: 3 }} effect="slide" position="top-right" /> */}
      </ConfigProvider>
    </Provider>
  );
}
