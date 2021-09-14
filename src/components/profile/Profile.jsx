import React from 'react';
import { AddAPhotoOutlined } from '@material-ui/icons';

import Pageview from '../../lib/layout/Pageview';
import Skeleton from '../../lib/skeleton/Dashboard';
import Input from '../../lib/control/Input';
import Button from '../../lib/control/Button';
import Alert from '../../lib/control/Alert';

import logicHandler from './core/LogicHandler';
import updateRequest from './core/UpdateRequst';
import global from '../../lib/service/global';
import '../../lib/style/profile.scss';

function Profile() {
  const [image, handleImage, onLoaded] = logicHandler();
  const { Success, GetAdmin } = global();
  const profile = GetAdmin();

  const [username, firstName, lastName, phoneNumber, state, handleSubmit, handleClose] =
    updateRequest(image.raw);

  return (
    <Pageview title="Profile">
      {Success() ? (
        <div className="row profile">
          <div className="offset-md-3 col-md-6">
            <div className="image-wrapper">
              <label>
                <div className="mask-icon">
                  <AddAPhotoOutlined />
                </div>
                <img
                  src={image.preview}
                  alt="User Picture"
                  width={100}
                  {...(image.raw === '' && { onLoad: onLoaded })}
                />
                <input type="file" className="d-none" onChange={handleImage} />
              </label>
            </div>

            <div className="row ">
              <div className="col-md-6">
                <Input label="Role" value={profile.role} disabled={true} />
              </div>
              <div className="col-md-6">
                <Input label="Username" inputRef={username} defaultValue={profile.username} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Input label="First Name" inputRef={firstName} defaultValue={profile.firstName} />
              </div>
              <div className="col-md-6">
                <Input label="Last Name" inputRef={lastName} defaultValue={profile.lastName} />
              </div>
            </div>
            
            <Input label="Email" type="email" value={profile.email} />
            <Input
              label="Phone Number"
              type="number"
              inputRef={phoneNumber}
              defaultValue={profile.phoneNumber}
            />

            <Button
              label="Update"
              className="btn btn-warning btn-block"
              loading={state.loading}
              onClick={handleSubmit}
            />
          </div>
        </div>
      ) : (
        <Skeleton />
      )}

      <Alert open={state.open} msg={state.message} onClose={handleClose} />
    </Pageview>
  );
}

export default Profile;
