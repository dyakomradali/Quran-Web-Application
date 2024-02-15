import "../asset/surah.css";
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from "../hook/usefetch2";
import Component from './flascircle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Comp2(props) {
  const { loader, users, error } = useFetch("https://api.alquran.cloud/v1/quran/en.asad");
  const [isCarouselInitialized, setIsCarouselInitialized] = useState(false);

  useEffect(() => {
    if (!loader && !isCarouselInitialized) {
      const options = {
        numVisible: 11, // Increase the number of visible cards to 7
      };

      M.Carousel.init(document.querySelectorAll('.carousel'), options);
      setIsCarouselInitialized(true);
    }
  }, [loader, isCarouselInitialized]);
 

  return (
    <div>
      {error && <p className="btn">Error</p>}
      {loader ? (
        <div className="center" style={{ position: "relative", top: "150px" }}>
          <Component />
        </div>
      ) : (
        <div className="carousel">
          {users.map((user) => (
            <Link className="carousel-item" to={`/Copm11/${user.number}/${user.name}`}  key={user.number} onClick={()=>{toast(user.name)}} >
              <div className="card">
                <div className="card-content">
                  <p>{user.number}</p>
                  <p>{user.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
         <ToastContainer />
    </div>
  );
}

export default Comp2;
