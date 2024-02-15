import React, { useEffect, useRef } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const Component = ({ dob }) => {
  const flashingColorsRef = useRef(null);

  useEffect(() => {
    // Initialize Materialize CSS components
    M.AutoInit();

    const flashingColorsInterval = setInterval(() => {
      const element = flashingColorsRef.current;
      if (element) {
        element.classList.toggle('active');
      }
    }, 3000);

    setTimeout(() => {
      clearInterval(flashingColorsInterval);
    }, 3000);

    return () => {
      clearInterval(flashingColorsInterval);
    };
  }, [dob]);

  return (
    <div>
      <div ref={flashingColorsRef} className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
        <div className="spinner-layer spinner-red">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
        <div className="spinner-layer spinner-yellow">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
        <div className="spinner-layer spinner-green">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
