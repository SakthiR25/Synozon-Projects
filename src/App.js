// import './App.css';
// import JsonDataDisplay from './demo.js/mytable';



// function App() {
//   return (
//     <div className="App">
//      <h1>SynoOCR</h1>
//      <div className='uploadfiles'>
//             <input id="file" type="file" />
//                     <button>Upload</button>
//                     <input type='Upload'/>

                    
//             </div>
     
//             <JsonDataDisplay />
//     </div>
//   );
// }

// export default App;

import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
import JsonData from './jsondata'


function App() {
  return (
    <div className="container">
  <JsonData/>
</div>
    
  );
}

export default App;

