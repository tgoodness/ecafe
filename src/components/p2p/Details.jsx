import React from 'react';
import { Modal, Image } from 'antd';
import { Link } from 'react-router-dom';

import util from '../../lib/service/util';
import { POP_IMG_URL } from '../../lib/http/url';
import '../../lib/style/p2p-details.scss';

function Details(props) {
  const { reference, data, visible, handleCancel } = props;
  if (data === undefined || reference === '') {
    return null;
  }
  const payload = data.data.data.txs.find((p) => p.referenceNumber === reference);

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
        <h5 className="type">{payload.referenceNumber}</h5>
      </div>
      <div className="row-wrapper">
        <div>
          <h6>Status</h6>
          <h5>
            {payload.status === 'UNCONFIRMED' && <span className="pending">UNCONFIRMED</span>}
          </h5>
          <h5>{payload.status === 'CONFIRMED' && <span className="success">CONFIRMED</span>}</h5>
          <h5>{payload.status === 'CANCELLED' && <span className="danger">CANCELLED</span>}</h5>
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
          <h6>Buyer Fee(USD)</h6>
          <h5>{payload.buyerFeeInDollar}</h5>
        </div>
        <div>
          <h6>Buyer Fee (BTC)</h6>
          <h5>{payload.buyerFeeInCoin}</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Seller Fee(USD)</h6>
          <h5>{payload.sellerFeeInDollar}</h5>
        </div>
        <div>
          <h6>Seller Fee (BTC)</h6>
          <h5>{payload.sellerFeeInCoin}</h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Rate</h6>
          <h5>
            ${payload.coinRateInDollar}
            <span>
              {'>'}N{payload.coinRateInDollar}
            </span>
          </h5>
        </div>
      </div>

      <div className="row-wrapper">
        <div>
          <h6>Buyer</h6>
          <h5>
            <Link to={`/user/${payload.buyer.registrationId}`} className="text-info">
              {`${payload.buyer.firstName} ${payload.buyer.lastName}`}
            </Link>
          </h5>
        </div>
        <div>
          <h6>Seller</h6>
          <h5>
            <Link to={`/user/${payload.seller.registrationId}`} className="text-info">
              {`${payload.seller.firstName} ${payload.seller.lastName}`}
            </Link>
          </h5>
        </div>
      </div>

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
    </Modal>
  );
}

export default Details;
