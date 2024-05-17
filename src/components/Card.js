import React from 'react'
import backgroundImage from '../burgerkingImg.png';
import '../App.css';


function Card({className, title, content}) {
  return (
    <div className={className}>
          <div className='image'
              style={{
              backgroundImage: `url(${backgroundImage})`, // 배경 이미지 설정
              backgroundSize: 'cover', // 이미지가 div를 전체적으로 채우도록
              backgroundPosition: 'center' // 이미지가 중앙에 위치하도록
            }}
          ></div>
          <div className='article'>
            <h1>{title}</h1>
            <p>{content}</p>
            <span>16,500원</span>
          </div>
        </div>
  )
}

export default Card