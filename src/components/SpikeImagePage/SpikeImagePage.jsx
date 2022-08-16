import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name SpikeImagePage with the name for the new component.

function SpikeImagePage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const imageReducer = useSelector((store) => store.spikeImageReducer);
  const [heading, setHeading] = useState('Image Upload Spike');
  const [image, setImage] = useState('');

  useEffect(() =>{
    if (image != ''){
      console.log( 'in useEffect');
      uploadImage();
    }
  }, [image]);

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
      <h2>{heading}</h2>
      <input type="file" name='image1' onChange={handleFileInputChange}/>
      <img src={imageReducer} alt={'room image'}/>
    </div>
  );
}

export default SpikeImagePage;
