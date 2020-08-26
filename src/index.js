import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Arry from './Arry';

 
ReactDOM.render(
     <>
     <h1 className='atta'>List of top 6 my favorite Netflix series</h1>
     { Arry.map((val)=>{
          return(
                   
          <Cards  sname={val.sname}
          imgsrc={val.imgsrc}
           title={val.title}
           link={val.link}
     />
          );
     })}
     
     );   
     </>                   
      ,document.getElementById('root')
);





  