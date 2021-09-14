import React from 'react';
import { Modal, Image } from 'antd';

import Alert from '../../lib/control/Alert';
import Button from '../../lib/control/Button';
import approveRequest from './core/ManageRequest';
import declineRequest from './core/ManageRequest';

import util from '../../lib/service/util';
import { POP_IMG_URL } from '../../lib/http/url';
import '../../lib/style/p2p-details.scss';
import { Link } from 'react-router-dom';

function Details(props) {
  const { reference, data, visible, handleCancel } = props;

  if (data === undefined || reference === '') {
    return null;
  }
  const payload = data.data.data.txs.find((p) => p.transactionReference === reference);
  const [stateA, handleSubmitA, handleCloseA] = approveRequest(
    'APPROVE',
    payload.transactionReference,
    handleCancel
  );
  const [stateD, handleSubmitD, handleCloseD] = declineRequest(
    'DECLINE',
    payload.transactionReference,
    handleCancel
  );

  return (
    <Modal
      title="Details"
      visible={visible}
      onCancel={handleCancel}
      footer={false}
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
          <h6>User ID</h6>
          <h5>{payload.registrationId}</h5>
        </div>
      </div>

      {payload.approvedBy !== null && (
        <div className="row-wrapper">
          <div>
            <h6>Approved By</h6>
            <h5>
              <Link to={`/admins/${payload.approvedBy.registrationId}`}>
                {payload.approvedBy.username}
              </Link>
            </h5>
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

      {payload.popUploaded && (
        <div className="pop-wrapper">
          <h6>Buyer POP</h6>
          <Image src={`${POP_IMG_URL}${payload.proofOfPayment.pop}`} />
        </div>
      )}

      {payload.status === 'UNCONFIRMED' && (
        <div className="row mt-4">
          <div className="col-6">
            <Button
              label="Decline"
              className="btn btn-danger btn-block"
              loading={stateD.loading}
              onClick={handleSubmitD}
            />
          </div>
          <div className="col-6">
            <Button
              label="Approve"
              className="btn btn-success btn-block"
              loading={stateA.loading}
              onClick={handleSubmitA}
            />
          </div>
        </div>
      )}

      <Alert open={stateA.open} msg={stateA.message} onClose={handleCloseA} />
      <Alert open={stateD.open} msg={stateD.message} onClose={handleCloseD} />
    </Modal>
  );
}

export default Details;
