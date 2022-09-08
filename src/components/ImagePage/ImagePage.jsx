import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ImagePage.css';

function ImagePage(props) {

  const history = useHistory();
  const dispatch = useDispatch();
  const imageReducer = useSelector((store) => store.imageReducer);
  const [image, setImage] = useState('');

  //this runs uploadImage every time the hook 'image' is changed
  useEffect(() =>{
    if (image != ''){
      console.log( 'in useEffect');
      uploadImage();//dispatch your object here
    }
  }, [image]);

  //this
  useEffect(() =>{
      console.log( 'in url push');
      console.log( 'image reducer', imageReducer);
  }, [imageReducer]);

  //this function sets the file path uploaded by the user to the variable file then sets that to the image hook
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // this function
  // const saveUrls = () => {
  //   // let urlArray = [ imageReducer[1], imageReducer[2], imageReducer[3], imageReducer[4], imageReducer[5] ]
  //   console.log('This is the array of URLs to be sent', imageReducer);
  //   dispatch({ type: 'SAVE_URLS', payload: imageReducer })
  //   // history.push( '/estimatecost' );
  // }

  //this function sets up the image format needed to send the user's file path to cloudinary and dispatches it to the image saga
  const uploadImage = () => {
    console.log( 'TESTING UPLOAD IMAGE', image);
    let imageToSend = new FormData();
    imageToSend.append('file', image);
    console.log(imageToSend);
    dispatch({ type: 'SEND_IMAGE', payload: imageToSend });
  }

  return (
    <div>
      <h2>ADD 4 IMAGES</h2>
      <input type="file" id='imageInput' onChange={handleFileInputChange}/>
      <div id="grid-col">
        {imageReducer.map((img) => {
          return(
              <div className="cell">
              <img src={img} key={img.id} alt={'Image'}/>
              </div>
              );
            })}
      </div>
    </div>

  );
}

export default ImagePage;
