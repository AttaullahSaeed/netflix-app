import React from 'react';
import './App.css';

function Cards(props)

{     
  return(
    <>
    <div className="cards_SS">
              <div className="card_s">
           <img src={props.imgsrc} alt="mypic" className="card_img "/>
         <div className="card_info">
  <span className="card_category">{props.title}</span>
  <h3 className="card_title">{props.sname}</h3>
           <a href="" target="_blank">
             <button>Watch now</button>
           </a>
         </div>
 
 
              </div>
    </div>
    </>
  )
}
export default Cards;