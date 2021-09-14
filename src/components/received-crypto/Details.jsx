import React from 'react';
import { Modal } from 'antd';
import '../../lib/style/p2p-details.scss';

function Details(props) {
  const { reference, data, visible, handleCancel } = props;
  if (data === undefined || reference === '') {
    return null;
  }
  const payload = data.data.data.txs.find((p) => p.transactionReference === reference);


  return (
    <Modal
      title="Details"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
      className="p2p-details"
    >
      <div className="row-wrapper">
        <div>
          <h6>Reference</h6>
          <h5>{payload.transactionReference}</h5>
        </div>
        <div>
          <h6>Type</h6>
          <h5 className="type">{payload.orderType}</h5>
        </div>
      </div>
      <div className="row-wrapper">
        <div>
          <h6>Amount (USD)</h6>
          <h5>{payload.amountInDollar}</h5>
        </div>
        <div>
          <h6>Amount (BTC)</h6>
          <h5>{payload.amountInCoin}</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Senders's Wallet Address</h6>
          <h5>1MSg5LpvGd8GmibgnQzM5j96CxyPQSZYMF</h5>
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
