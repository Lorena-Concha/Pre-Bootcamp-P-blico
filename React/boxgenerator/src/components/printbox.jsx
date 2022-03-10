import React from 'react';

const PrintBox = (props) => {


     return(<div>
       <div className='addbox' style={{backgroundColor:props.color}}>
        <p>{props.color}</p>

        
       </div>
    </div>
);
     }
    
export default PrintBox;