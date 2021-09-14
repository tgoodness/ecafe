import React from 'react';
import { Modal } from 'antd';
import '../../../lib/service/util';
import '../../../lib/style/p2p-details.scss';
import util from '../../../lib/service/util';

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
      maskClosable={false}
      className="p2p-details"
    >
      <div>
        <h6>Reference</h6>
        <h5 className="type">{payload.transactionReference}</h5>
      </div>
      <div className="row-wrapper">
        <div>
          <h6>Status</h6>
          <h5>
            {payload.status === 'UNCONFIRMED' && <span className="pending">UNCONFIRMED</span>}
          </h5>
          <h5>{payload.status === 'CONFIRMED' && <span className="success">CONFIRMED</span>}</h5>
          <h5>{payload.status === 'DECLINED' && <span className="danger">DECLINED</span>}</h5>
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
          <h6>Fee (USD)</h6>
          <h5>{payload.feeInDollar}</h5>
        </div>
        <div>
          <h6>Fee (BTC)</h6>
          <h5>{payload.feeInCoin}</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Sender's Wallet Address</h6>
          <h5>{payload.senderAddress}</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Miner Fee (USD)</h6>
          <h5>{payload.feeInDollar}</h5>
        </div>
        <div>
          <h6>Miner Fee (BTC)</h6>
          <h5>{payload.feeInCoin}</h5>
        </div>
      </div>

      {payload.approvedBy !== null && (
        <div className="row-wrapper">
          <div>
            <h6>Approved By</h6>
            <h5>Lami</h5>
          </div>
        </div>
      )}

      <div className="row-wrapper">
        <div>
          <h6>Date Created</h6>
          <h5>{util.dateFormat(payload.dateAndTime)}</h5>
        </div>
        <div>
          <h6>Time</h6>
          <h5>{util.timeFormat(payload.dateAndTime)}</h5>
        </div>
      </div>

      {payload.dateModified !== null && (
        <div className="row-wrapper">
          <div>
            <h6>Date Modified</h6>
            <h5>{util.dateFormat(payload.dateModified)}</h5>
          </div>
          <div>
            <h6>Time</h6>
            <h5>{util.timeFormat(payload.dateModified)}</h5>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default Details;
