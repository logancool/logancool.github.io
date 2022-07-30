import React, { useEffect } from 'react';
import './style.module.scss';

// Redirect Page
const RedirectPage = () => {
    useEffect(() => {
      window.location.replace('https://docs.google.com/document/d/11vk1kPcnjetPnkeR9fRu_1riYHZv3baPyXQElsztLkU/export?format=pdf');
    }, [])
  
    // Render some text when redirecting
    // You can use a loading gif or something like that
    return <div styleName="wrapper">
      <h3>Resume Downloaded. You can close this now.</h3>
    </div>
  }

  export default RedirectPage;
