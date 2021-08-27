import React from 'react';
import { Modal } from 'antd';
import '../../lib/style/p2p-details.scss';

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
          <h5 className="type">BUY</h5>
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
          <h6>Receiver’s Wallet Address</h6>
          <h5>1MSg5LpvGd8GmibgnQzM5j96CxyPQSZYMF</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Miner Fee (USD)</h6>
          <h5>4.50</h5>
        </div>
        <div>
          <h6>Miner Fee (BTC)</h6>
          <h5>0.00680944</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Status</h6>
          <h5>
            <span className="success">SUCCESS</span>
          </h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Approved By</h6>
          <h5>Lami</h5>
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
    </Modal>
  );
}

export default Details;
