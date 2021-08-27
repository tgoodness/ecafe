import React from 'react';
import Pageview from '../../../lib/layout/Pageview';
import handleTab from './core/TabHandler';

import P2P from './p2p/P2P';
import TradeCrypto from './p2p/P2P';
import Transfer from './transfer/Transfer';
import Receive from './receive/Receive';
import '../../../lib/style/user-transactions.scss';

function Users() {
  const [active, handleActive] = handleTab();

  return (
    <Pageview title="Transactions" className="user-transactions">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="tab-wrapper">
            <div className={active === 'P2P' ? 'active' : ''} onClick={() => handleActive('P2P')}>
              P2P
            </div>
            <div
              className={active === 'TRADE' ? 'active' : ''}
              onClick={() => handleActive('TRADE')}
            >
              Trade
            </div>
            <div
              className={active === 'TRANSFER' ? 'active' : ''}
              onClick={() => handleActive('TRANSFER')}
            >
              Transfer
            </div>
            <div
              className={active === 'RECEIVE' ? 'active' : ''}
              onClick={() => handleActive('RECEIVE')}
            >
              Received
            </div>
          </div>
        </div>
      </div>
      {active === 'P2P' && <P2P />}
      {active === 'TRADE' && <TradeCrypto />}
      {active === 'TRANSFER' && <Transfer />}
      {active === 'RECEIVE' && <Receive />}
    </Pageview>
  );
}

export default Users;
