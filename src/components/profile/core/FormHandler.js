import { useState } from 'react';
import emptyImage from '../../../lib/assets/empty-photo.png';
function FormHandler() {
  //Uplaod file
  const [image, setImage] = useState({
    preview: emptyImage,
    raw: '',
  });

  const handleImage = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({
        ...image,
        raw: file,
        preview: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return [image, handleImage];
}

export default FormHandler;
