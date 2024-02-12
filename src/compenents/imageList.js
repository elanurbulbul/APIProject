import ImageItem from './imageItem';

function ImageList({imagesPlaceholder}) {
    return <div className='ImageList'>
      {imagesPlaceholder.map((image,index)=>{
        return <ImageItem key={index} imageProp={image}/>  
      })}

    </div>;
}
export default ImageList;
