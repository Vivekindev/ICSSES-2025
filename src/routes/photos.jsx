import React from 'react'
import '../css/photos.css';
import Img1 from '../assets/images/president.jpg';
import Img2 from '../assets/images/principal.jpg';
import Img3 from '../assets/images/634932729433901052_siddaganga.jpg';
import Img4 from '../assets/images/background-img-1.png';
function photos() {
  const data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc:  Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
  ];

  return (
    <>
      <div className="gallery">
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}>
                <img src={item.imgSrc} style={{width: '100%'}}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default photos