import React, { useEffect, useState, useRef } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import aa from"../style/image/aa.jpg";
import dyako from"../style/image/dyako.jpg";
import '../asset/navication.css';
import Allname  from"./allname";


export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const carouselRef = useRef(null);

  useEffect(() => {
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});

    const body = document.querySelector('body');
    

    if (theme === 'dark') {
      body.classList.add('dark');
      
      
    } else {
      body.classList.remove('dark');
    }

    const carousel = carouselRef.current;
    const carouselInstance = M.Carousel.init(carousel, {});
    const interval = setInterval(() => {
      carouselInstance.next(3);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div id='nav'>
      <div className={`teal ${theme === 'dark' ? 'dark' : ''}`} id="nav">
        <div id="flex" className="nav-wrapper container">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i id='menu' className="material-icons menu small">menu</i></a>
          <a href="#!" className="employy">القرآن</a>
          <div className="switch ">
            <label>
              <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
              <span className="lever"></span>
              {theme === 'dark' ? '' : ''}
            </label>
          </div>
        </div>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>  <a class="waves-effect waves-light  modal-trigger" href="#modal3">پێناس</a></li>
        <li>  <a className="waves-effect waves-light  modal-trigger" href="#modal2">ناوەکانی الله تعالى</a></li>
        <li><a href="https://alquran.cloud/api" target="_blank" rel="noreferrer">ئە پی ئای ١</a></li>
        <li><a href="https://aladhan.com/asma-al-husna-api" target="_blank" rel="noreferrer">ئە پی ئای ٢</a></li>
        
      </ul>
{/* ........................ پێناس */}

<div id="modal3" class="modal"  >
    <div class="modal-content">
      <h4 style={{fontFamily:"sans-serif",fontWeight:"600"}}>دیاکۆ مراد علی</h4>
      <br/>
      <div className='img-wrapper container'>
      <img src={dyako} alt='halayak haya'/>
      </div>
      <br/>
      <div className='container'>
      
       <p style={{fontWeight:"bold"}}> خوێندکاری قۆناغی سێیەمی زانستی کۆمپیوتەر  لە زانکۆی سلێمانی  لەکاتی بونی هەرکێشەیەک  یان بوونی هەر پێشنیارێک دەتوانن ئاگادارم بکەنەوە</p>
      <p><i class="material-icons  teal-text" style={{marginTop:"3px"}}>email</i> dyakomradali@gmail.com</p>
      </div>
      
    </div>
    <div class="modal-footer"style={{backgroundColor:"white"}}>
      <a href="#!"  class="modal-close waves-effect waves-green btn-flat">داخستن</a>
    </div>
  </div>




{/* ................ nawakan */}


      <div id="modal2" className="modal bottom-sheet">
        <div className="modal-content">
          <h4 style={{fontWeight:"700"}}>ناوەکانی الله تعالى</h4>
          <Allname/>
          </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close btn waves-effect waves-green btn-flat">
            داخستن
          </a>
        </div>
      </div>

      <div className="carousel carousel-slider center" style={{fontWeight:'bold',color:"teal",fontSize:"1.2rem"}} ref={carouselRef}>
        <div className="carousel-item white-text" href="#one!">
          <img src={aa} alt='halayak haya' />
          <p className="white-text ahay center-align">مِنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ فَمِنْهُمْ مَنْ قَضَى نَحْبَهُ وَمِنْهُمْ مَنْ يَنْتَظِرُ وَمَا بَدَّلُوا تَبْدِيلًا (الحزاب:٢٣)</p>
          <p className="white-text tafsir center-align">مه‌ردانێکی زۆر هه‌ن له‌ئیمانداران ئه‌و په‌یمانه‌ی داویانه ‌به‌ خوا، ڕاستیان کرد له‌سه‌ری ژیان و پابه‌ند بوون پێوه‌ی و لایان نه‌دا لێی، جا هه‌یانه ‌په‌یمانه‌که‌ی جێبه‌جێ کرد و مرد له‌سه‌ری، هه‌شیانه‌ چاوه‌ڕوانه‌، به‌هیچ شێوه‌یه‌ك گۆڕان و لاری ڕووی تێ نه‌کردوون</p>

        </div>
        <div className="carousel-item white-text" href="#two!">
          <img src={aa} alt='halayak haya'/>
          <p className="white-text ahay center-align">وُجُوهٌ يَوْمَئِذٍ مُسْفِرَةٌ (٣٨) ضَاحِكَةٌ مُسْتَبْشِرَةٌ (٣٩)( عبس)</p>
          <p className="white-text tafsir center-align">له‌و ڕۆژه‌دا كۆمه‌ڵێك ڕوو گه‌شاوه‌و پرشنگدارو جوانن و ئه‌دره‌وشێنه‌وه‌ كه‌ ڕووی باوه‌ڕدارانن(٣٨) وه‌ خاوه‌نى ئه‌و ڕووانه‌ پێ ئه‌كه‌نن له‌به‌ر ئه‌وه‌ی موژده‌یان پێدراوه‌و دڵخۆشن و ئه‌و دڵخۆشییه‌ به‌ ڕوویانه‌وه‌ دیاره‌، كه‌ به‌هه‌شتییه‌كانن(٣٩)</p>

        </div>
        <div className="carousel-item white-text" href="#three!">
          <img src={aa} alt='halayak haya'/>
          <p className="white-text ahay center-align">لَّذِينَ يُبَلِّغُونَ رِسَالَاتِ اللَّهِ وَيَخْشَوْنَهُ وَلَا يَخْشَوْنَ أَحَدًا إِلَّا اللَّهَ وَكَفَى بِاللَّهِ حَسِيبًا (الأحزاب:٣٩)</p>
          <p className="white-text tafsir center-align">ئه‌و كه‌سانه‌ی كه‌ په‌یامه‌كانی خوای گه‌وره‌ به‌ خه‌ڵكى ده‌گه‌یه‌نن وه‌ به‌تاك و ته‌نها له‌ خوای گه‌وره‌ ئه‌ترسن به‌ زانسته‌وه‌  وه‌ جگه‌ له‌ خوای گه‌وره‌ له‌ كه‌سی تر ناترسێن له‌ گه‌یاندنى دینه‌كه‌دا وه‌ به‌سه‌ كه‌ خوای گه‌وره‌ چاودێر بێت به‌سه‌رتانه‌وه‌و لێپرسینه‌وه‌تان له‌گه‌ڵدا بكات</p>

        </div>
        <div className="carousel-item white-text" href="#four!">
          <img src={aa} alt='halayak haya'/>
          <p className="white-text ahay center-align">وَنَادَوْا يَا مَالِكُ لِيَقْضِ عَلَيْنَا رَبُّكَ قَالَ إِنَّكُمْ مَاكِثُونَ (الزخرف:٧٧)</p>
          <p className="white-text tafsir center-align">دۆزه‌خییه‌كان داواى مردن ده‌كه‌ن پێیان نادرێت وه‌ بانگ ئه‌كه‌ن ئه‌ی مالیكی ده‌رگاوانی دۆزه‌خ: بانگی په‌روه‌ردگارت بكه‌ تا بمان مرێنێ و رزگارمان بێت له‌م سزایه‌  چل ساڵ وه‌ڵامیان ناداته‌وه‌ پاشان وه‌ڵامیان ده‌داته‌وه‌و ئه‌ڵێ: نه‌خێر مردن نیه‌و ئێوه‌ ئه‌مێننه‌وه‌ له‌ناو سزادا</p>

        </div>
        
      </div>

    </div>
  );
}