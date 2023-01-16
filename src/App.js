import React,{useState, useEffect} from "react";
import Card from "./components/Card";
import Search from "./components/Search";

//useEffect to send requests to api?

function App() {

  //array gets filled once we get the responed 
  const[images, setImages]=useState([]);
  //as long as its still fetching its true once its done its false
  const[isLoading, setIsLoading]=useState(true);
  //search term
  const [term, setTerm]=useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data=>{
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=>console.log(err));
  }, [term]);



  return (
 
    <div className="container mx-auto">
      <Search searchValue={(text) => setTerm(text)}/>

       
       {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">no images foundS</h1>}


      {isLoading? <h1 className="text-6xl text-center mx-auto mt-32">Loeading....</h1> :
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <Card key={image.id} image={image}/>
          //المفتاح ضروري لاني بسوي ليست
        ))}

      </div>  }
    </div>

  );
}

export default App;
