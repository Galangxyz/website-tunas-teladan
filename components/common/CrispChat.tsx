'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispChat() {
  useEffect(() => {
    if (document.getElementById('crisp-script')) return;

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '3534cb13-e032-44f5-aecf-7cf2ac80d5cd';

    const script = document.createElement('script');

    script.id = 'crisp-script';
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;

    document.head.appendChild(script);

    return () => {};
  }, []);

  return null;
}