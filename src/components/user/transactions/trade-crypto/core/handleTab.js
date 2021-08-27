import { useState } from 'react';

function handleTab() {
  const [active, setstate] = useState({
    p2p: true,
    trade: false,
    transfer: false,
    received: false,
    activeTab: 'P2P',
  });

  const handleActive = (type) => {
    if (type === 'P2P') {
      setstate({ p2p: true, trade: false, transfer: false, received: false, activeTab: 'P2P' });
    }

    if (type === 'TRADE') {
      setstate({ p2p: false, trade: true, transfer: false, received: false, activeTab: 'TRADE' });
    }

    if (type === 'TRANSFER') {
      setstate({
        p2p: false,
        trade: false,
        transfer: true,
        received: false,
        activeTab: 'TRANSFER',
      });
    }

    if (type === 'RECEIVE') {
      setstate({ p2p: false, trade: false, transfer: false, received: true, activeTab: 'RECEIVE' });
    }
  };

  return [active.activeTab, handleActive];
}

export default handleTab;
