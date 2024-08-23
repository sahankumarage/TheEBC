import React, { useEffect } from 'react';

const ElfSightWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.setAttribute('data-use-service-core', '');

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-0c874b46-05f5-40bc-a611-a1079f4306d2"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfSightWidget;
