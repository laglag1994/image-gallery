import React,{useState, useEffect} from "react";


function App() {

  
  const[images, setImages]=useState([]);
  const[isLoading, setIsLoading]=useState(true);


  return (
    <div class="max-w-sm rounded-lg overflow-hidden 
       shadow-lg">
      <img src="https://source.unsplash.com/random" 
      alt="random" className="w-full" />
      <div className="px-6 py-6">
        <div className="font-bold text-green-900 text-xl mb--2"> 
         Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Dowloads: </strong>
            54534
          </li>
          <li>
            <strong>Likes: </strong>
            31212
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#mirror</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#woman</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#sky</span>


      </div>
    </div>
  );
}

export default App;
