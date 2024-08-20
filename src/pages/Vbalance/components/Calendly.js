/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/olehsjs/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
        />
    );
};

export default CalendlyWidget;
