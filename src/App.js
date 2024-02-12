import './App.css' ;
import SearchHeader from './SearchHeader';
import searchImages from './Api';
import { useState } from 'react';
import ImageList from './compenents/imageList';

function App() {
  const [images, setImages] = useState([])
  const handleSubmit= async (term) =>{
    const result = await searchImages(term);
    //bir yerden cevap alanaka kadar await kullanıyoruz ve arrow function async y çevirmeliyiz
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceholder={images}></ImageList>
       {/* Array içindki 10 objeyi imagesPlaceholder adlı props ile imageliste geçiyorum */}
  </div>
)

}
export default App;
