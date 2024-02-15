import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../hook/usefetch";
import Component from '../components/flascircle';
import  "../asset/comp11css.css";
import audiobtn from "../asset/sound/btn.mp3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function playSound() {
  var audio = document.getElementById("audio");
  audio.play();
}
function Comp11() {
  const url = useParams();
 

  const [soundQuran,setsoundQuran]=useState("mahermuaiqly");

  const { loader, users, error } = useFetch(`https://api.alquran.cloud/v1/surah/${url.number}/ar.${soundQuran}`);
  const { loader: translationLoader, users: translationUsers, error: translationError } = useFetch(`https://api.alquran.cloud/v1/surah/${url.number}/ku.asan`);

  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [readVerses, setReadVerses] = useState([]);

  const activeVerseRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const audio = document.getElementById(`verse-${activeVerseIndex}`);
      audio.play();
    }
  }, [activeVerseIndex, isPlaying]);

  useEffect(() => {
    if (activeVerseRef.current) {
      activeVerseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeVerseIndex]);

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setReadVerses((prevReadVerses) => {
          const updatedVerses = [...prevReadVerses];
          updatedVerses.push(activeVerseIndex);
          return updatedVerses;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, activeVerseIndex]);

  
    const playAudio = (index) => {
    setIsPlaying(true);
    setActiveVerseIndex(index);
    setReadVerses([]);
  };
 
  

  const pauseAudio = () => {
    setIsPlaying(false);
    const audio = document.getElementById(`verse-${activeVerseIndex}`);
    audio.pause();
  };

  const handleVerseEnd = () => {
    setActiveVerseIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex < users.length) {
        const audio = document.getElementById(`verse-${newIndex}`);
        audio.play();
      } else {
        setIsPlaying(false);
        setActiveVerseIndex(0); // Reset to the first verse
      }
      return newIndex;
    });
  };
  

  return (
    <div>
      
      <h2 id='nameurl'>{url.name}</h2>
      <br/>
      <div className='row container'>
        <div className="col s6 m6" >
        <p onClick={()=>{playSound();}} style={{fontFamily:"sans-serif",fontSize:"1.3rem",fontWeight:"bolder"}}> <a class=" btn-floating modal-trigger" href="#modal1"><i class="material-icons">mic</i></a> :دەنگەکان  </p>
        <audio id="audio" src={audiobtn}></audio>

      </div>
      <div className="col s6 m6">
      <p style={{fontFamily:"sans-serif",fontSize:"1.3rem",fontWeight:"bolder"}}>{url.number} :سُورَةُ</p>

      </div>
     </div>

    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>قورئان خوێنەکان</h4>
       <div className='row' >
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("mahermuaiqly"); playSound();toast("ماهر المعيقلي"); } } >ماهر المعيقلي</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("alafasy"); playSound();toast("مشاري العفاسي");} }>مشاري العفاسي</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("abdurrahmaansudais"); playSound(); toast("عبدالرحمن السديس ");} }>عبدالرحمن السديس </h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("minshawi"); playSound(); toast("محمد صديق المنشاوي");} }> محمد صديق المنشاوي</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("hudhaify"); playSound(); toast("علي بن عبدالرحمن الحذيفي"); } }> علي بن عبدالرحمن الحذيفي</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("abdulbasitmurattal"); playSound(); toast("عبد الباسط عبد الصمد المرتل")} }>عبد الباسط عبد الصمد المرتل </h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("abdullahbasfar"); playSound(); toast(" عبد الله بصفر")} }> عبد الله بصفر</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("abdulsamad"); playSound(); toast(" عبدالباسط عبدالصمد")} }> عبدالباسط عبدالصمد</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("shaatree"); playSound(); toast("أبو بكر الشاطري")} }>أبو بكر الشاطري</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("ahmedajamy"); playSound();toast("أحمد بن علي العجمي")}  }> أحمد بن علي العجمي</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("hanirifai"); playSound(); toast("هاني الرفاعي")} }> هاني الرفاعي</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("husary"); playSound(); toast(" محمود خليل الحصري")} }> محمود خليل الحصري</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("ibrahimakhbar"); playSound(); toast("إبراهيم الأخضر")} }>إبراهيم الأخضر </h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("minshawimujawwad"); playSound(); toast("محمد صديق المنشاوي")} }>محمد صديق المنشاوي (المجود) </h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("muhammadayyoub"); playSound(); toast("محمد أيوب")} }> محمد أيوب</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("muhammadjibreel"); playSound(); toast("محمد جبريل")} }> محمد جبريل</h6>
        </div>
        <div className='col s12 m6'>
        <h6 onClick={ ()=>{ setsoundQuran("saoodshuraym"); playSound();toast(" سعود الشريم")} }>  سعود الشريم </h6>
        </div>
       </div>
      </div>
      <div class="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat teal center" style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>داخستن</a>
      </div>
    </div>

    <a href='#nameurl' onclick={()=>{  window.scrollTo({ top: 0, behavior: 'smooth' })}} className='btn-floating btn-small red pulse' id='arrow_upward'><i class="material-icons">arrow_upward</i></a>

      {error && <p className="btn">Error</p>}

      {loader ? (
        <div className="center" style={{ position: "relative", top: "150px" }}>
          <Component />
        </div>
      ) : (
        <div className="row">
          {users && users.map((user, index) => (
            
            <div className="col s12 m12" key={user.number}>
             
              <div className={`card ${index === activeVerseIndex && isPlaying ? 'active-verse' : ''}`}>
                <div className="card-content" ref={index === activeVerseIndex ? activeVerseRef : null}>
                  <h5
                    className={`card-title ${index === activeVerseIndex && isPlaying ? 'active-verse-text' : ''}`}
                    style={{ color: readVerses.includes(index) ? 'red' : 'initial' }}
                  >
                    {user.text} <span>({user.number=index+1})</span>
                  </h5>
                  <audio
                    id={`verse-${index}`}
                    src={user.audio}
                    className="audio-player"
                    onEnded={handleVerseEnd}
                  />
                  {index === activeVerseIndex && isPlaying ? (
                    <button className='btn-floating' onClick={pauseAudio}>
                      <i className="material-icons">pause_circle_outline</i>
                    </button>
                  ) : (
                    <button
                      className='btn-floating'
                      onClick={() => playAudio(index)}
                      disabled={isPlaying && index !== activeVerseIndex}
                    >
                      <i className="material-icons">play_circle_outline</i>
                    </button>
                  )}
                  <p className="translation" style={{fontWeight:'bold',fontFamily:'sans-serif',fontSize:"1.2rem"}}>
                    {translationLoader ? 'Loading...' : translationError ? 'Failed to fetch translation' : translationUsers[index]?.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer/>
    </div>
  );
}

export default Comp11;