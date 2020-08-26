import React from 'react';
import Cards from './Cards';
import Arry from './Arry';


const App=()=>(

<>
<h1 className='atta'>List of top 6 my favorite Netflix series</h1>
{ Arry.map((val)=>{
     return(
              
     <Cards  sname={val.sname}
     imgsrc={val.imgsrc}
      title={val.title}
/>
     );
})}
</>
);