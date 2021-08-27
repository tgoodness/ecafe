import React from 'react';
import { AddAPhotoOutlined } from '@material-ui/icons';

import Pageview from '../../lib/layout/Pageview';
import Input from '../../lib/control/Input';
import Button from '../../lib/control/Button';

import formHandler from './core/FormHandler';
import '../../lib/style/profile.scss';

function Profile() {
  const [image, handleImage] = formHandler();
  return (
    <Pageview title="Profile">
      <div className="row profile">
        <div className="offset-md-3 col-md-6">
          <div className="image-wrapper">
            <label>
              <div className="mask-icon">
                <AddAPhotoOutlined />
              </div>
              <img src={image.preview} alt="User Picture" />
              <input type="file" className="d-none" onChange={handleImage} />
            </label>
          </div>

          <div className="row ">
            <div className="col-md-6">
              <Input label="Username" value="teegoodness" disabled={true} />
            </div>
            <div className="col-md-6">
              <Input label="Username" value="Supervisor" disabled={true} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Input label="First Name" />
            </div>
            <div className="col-md-6">
              <Input label="Last Name" />
            </div>
          </div>
          <Input label="Email" type="email" />
          <Input label="Phone Number" type="number" />

          <Button label="Update" className="btn btn-warning btn-block" />
        </div>
      </div>
    </Pageview>
  );
}

export default Profile;
