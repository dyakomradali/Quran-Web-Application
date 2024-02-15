import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const CopyrightNotice = () => {
  return (
    <footer className="page-footer white ">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <p className="black-text text-lighten-4 " style={{fontWeight:"bold"}}>
              &copy; {new Date().getFullYear()} دەروازەیەک بۆ قورئان
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CopyrightNotice;
