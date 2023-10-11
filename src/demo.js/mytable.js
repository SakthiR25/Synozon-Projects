// import React from 'react'
// import './mytable.css';
// import JsonData from './data.json'
// function JsonDataDisplay(){
// 	const DisplayData=JsonData.map(
        
// 		(info)=>{
// 			return(
// 				<tr>
// 					<td>{info.id}</td>
// 					<td>{info.name}</td>
// 					<td>{info.city}</td>
// 				</tr>
                
// 			)
// 		}
// 	)
// 	return(
// 		<div>
// 			<table class="table table-striped">
// 				<thead>
// 					<tr>
// 					<th>Sr.NO</th>
// 					<th>Name</th> 
//                     <th>City</th>
	
// 					</tr>

// 				</thead>
// 				<tbody>
				
					
// 					{DisplayData}

                   
                    
// 				</tbody>
// 			</table>
			
            
// 		</div>
// 	)
// }

// export default JsonDataDisplay;





// import React, { useState, useEffect } from 'react';

// import JsonData from './htmljson.json'
//  function JsonDataDisplay(){
//     const DisplayData=JsonData.map(
//         (info)=>{
//             return(
//                 <tr>
//                     <td>{info.DESCRIPTION}</td>
//                     <td>{info.QTY}</td>
//                     <td>{info.UNITPRICE}</td>
//                     <td>{info.TOTAL}</td>
//                 </tr>
//             )
//         }
//     )
 
//     return(
//         <div>
//             <table class="table table-striped">
//                 <thead>
//                     <tr>
//                     <th>Item</th>
//                     <th>Qty</th>
//                     <th>Rate</th>
//                     <th>Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
                 
                    
//                     {DisplayData}
                    
//                 </tbody>
//             </table>
             
//         </div>
//     )
//  }
 
//  export default JsonDataDisplay;
import JsonData from './htmljson.json';
import React, { useState } from 'react';

function JsonDataDisplay() {
  const [textData, setTextData] = useState('');

  const DisplayData = JsonData.map((info, index) => {
    // Create a formatted string for each item in the JSON data
    return `${index + 1}. Item: ${info.DESCRIPTION}, Qty: ${info.QTY}, Rate: ${info.UNITPRICE}, Amount: ${info.TOTAL}\n`;
  });

  const displayText = DisplayData.join(''); // Join the array elements into a single string

  const handleTextChange = (event) => {
    setTextData(event.target.value);
  };
  return (
	<div>
	  <textarea
		className="form-control"
		rows="10"
		value={textData} // This is where the value is assigned
		onChange={handleTextChange}
	  />
	  <button onClick={() => setTextData(displayText)}>Show Data</button>
	</div>
  );
  

  return (
    <div>
      <textarea
        className="form-control"
        rows="10" // Adjust the number of rows as needed
        value={textData} // Display the text data in the textarea
        onChange={handleTextChange}
      />
      <button onClick={() => setTextData(displayText)}>Show Data</button>
    </div>
  );
}

export default JsonDataDisplay;
