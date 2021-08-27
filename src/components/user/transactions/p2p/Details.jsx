import React from 'react';
import { Modal, Image } from 'antd';
import { Link } from 'react-router-dom';

import '../../../../lib/style/p2p-details.scss';
import POP from '../../../../lib/assets/pop.png';

function Details(props) {
  const { data, visible, handleCancel } = props;

  if (data === undefined) {
    return null;
  }

  return (
    <Modal
      title="Details"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      centered={true}
      maskClosable={false}
      className="p2p-details"
    >
      <div className="row-wrapper">
        <div>
          <h6>Transact ID</h6>
          <h5>B9737392</h5>
        </div>
        <div>
          <h6>Type</h6>
          <h5 className="type">BUY (P2P)</h5>
        </div>
      </div>
      <div className="row-wrapper">
        <div>
          <h6>Amount (USD)</h6>
          <h5>578.00</h5>
        </div>
        <div>
          <h6>Amount (BTC)</h6>
          <h5>0.00680944</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Fee (USD)</h6>
          <h5>5.00</h5>
        </div>
        <div>
          <h6>Fee (BTC)</h6>
          <h5>0.00680944</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Rate</h6>
          <h5>
            5.00 <span>{'>'}N450.00</span>
          </h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Buyer</h6>
          <h5>
            <Link to="/user/3838383">goodness</Link>
          </h5>
        </div>
        <div>
          <h6>Seller</h6>
          <h5>
            <Link to="/user/3838383">raphael</Link>
          </h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Category</h6>
          <h5>Dynamic</h5>
        </div>
        <div>
          <h6>In Bit</h6>
          <h5>YES</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Date</h6>
          <h5>20th Sept, 2021</h5>
        </div>
        <div>
          <h6>Time</h6>
          <h5>10:00AM</h5>
        </div>
      </div>

      <div className="pop-wrapper">
        <h6>Buyer POP</h6>
        <Image src={POP} />
      </div>
    </Modal>
  );
}

export default Details;
