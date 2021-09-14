import { useState } from 'react';
import global from '../../../lib/service/global';
import { ADMIN_IMG_URL } from '../../../lib/http/url';
import emptyImage from '../../../lib/assets/empty-photo.png';

function LogiHandler() {
  const { Success, GetAdmin } = global();
  const admin = GetAdmin();

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
        raw: file,
        preview: reader.result,
      });
    };

    if (file) {
      onLoaded(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onLoaded = () => {
    if (Success()) {
      if (admin.image) setImage({ ...image, preview: `${ADMIN_IMG_URL}${admin.image}` });
    }
  };

  return [image, handleImage, onLoaded];
}

export default LogiHandler;
