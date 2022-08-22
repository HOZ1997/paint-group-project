import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ImagePage.css';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name ImagePage with the name for the new component.

function ImagePage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const imageReducer = useSelector((store) => store.imageReducer);
  const newUrl = useSelector((store) => store.imageReducer[0]);
  const [ url, setUrl] = useState('');
  const [image, setImage] = useState('');

  
  let urlArray = ['test'];
  
  useEffect(() =>{
    if (image != ''){
      console.log( 'in useEffect');
      uploadImage();
    }
  }, [image]);

  useEffect(() =>{
    // if ( imageReducer != ''){
      console.log( 'in url push');
      setUrl(imageReducer);
      console.log( 'URL', url);
      urlArray.push(url);
      console.log( 'image reducer', imageReducer);
    // }
  }, [imageReducer]);
  
  
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  
  const uploadImage = () => {
    console.log( 'TESTING UPLOAD IMAGE', image);
    let imageToSend = new FormData();
    imageToSend.append('file', image);
    console.log(imageToSend);
    dispatch({ type: 'SEND_IMAGE', payload: imageToSend });
  }

  return (
    <div>
      <h2>Add up to 5 images</h2>
      <h4>{newUrl}</h4>
      <input type="file" name='image1' onChange={handleFileInputChange}/>
      <div id="grid-col">
        <div className="cell"><img src={imageReducer[1]} alt={'Image 1'}/></div> 
        <div className="cell"><img src={imageReducer[2]} alt={'Image 2'}/></div>
        <div className="cell"><img src={imageReducer[3]} alt={'Image 3'}/></div> 
        <div className="cell"><img src={imageReducer[4]} alt={'Image 4'}/></div>
        <div className="cell"><img src={imageReducer[5]} alt={'Image 5'}/></div> 
      </div>
    </div>
  );
}

export default ImagePage;
