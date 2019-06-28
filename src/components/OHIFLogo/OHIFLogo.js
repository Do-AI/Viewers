import './OHIFLogo.css';

// import { Icon } from 'react-viewerbase';
import React from 'react';

import doai_logo from './doai-logo.png';

function OHIFLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="http://wwww.doai.ai/"
    >
      {/*
      <Icon name="ohif-logo" className="header-logo-image" />
      <div className="header-logo-text">Open Health Imaging Foundation</div>
      */}

      <img name="doai-logo" className="header-logo-image" src={doai_logo} />
      <div className="header-logo-text">DoAI Medical Platform</div>
    </a>
  );
}

export default OHIFLogo;
