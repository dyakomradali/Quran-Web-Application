import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import "../asset/allnamecss.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Allname() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchNames() {
      const fetchedNames = [];
      for (let i = 1; i < 100; i++) {
        const response = await fetch(`https://api.aladhan.com/v1/asmaAlHusna/${i}`);
        const result = await response.json();
        const aa = result.data;
        fetchedNames.push(aa[0].name);
      }
      setNames(fetchedNames);
    }

    fetchNames();
  }, []);

  useEffect(() => {
    M.AutoInit();
  }, [names]);

  return (
    <div className="row">
      {names.map((name, index) => (
        <div className="col s12 m6 l4" key={index}>
          <div className="card aaa" onClick={()=>{toast(`${name}`)}} >
            <div className="card-content">
              <span className="card-title" style={{ fontFamily: 'sans-serif', fontWeight: '700' }}>{name}</span>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}
