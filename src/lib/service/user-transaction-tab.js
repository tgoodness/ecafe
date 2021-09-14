import { useState } from 'react';

function handleTab() {
  const [active, setstate] = useState({
    p2p: true,
    trade: false,
    transfer: false,
    deposit: false,
    activeTab: 'P2P',
  });

  const handleActive = (type) => {
    if (type === 'P2P') {
      setstate({
        p2p: true,
        trade: false,
        transfer: false,
        deposit: false,
        activeTab: 'P2P',
      });
    }

    if (type === 'TRADE') {
      setstate({ p2p: false, trade: true, transfer: false, deposit: false, activeTab: 'TRADE' });
    }

    if (type === 'TRANSFER') {
      setstate({
        p2p: false,
        trade: false,
        transfer: true,
        deposit: false,
        activeTab: 'TRANSFER',
      });
    }

    if (type === 'DEPOSIT') {
      setstate({
        p2p: false,
        trade: false,
        transfer: false,
        deposit: true,
        activeTab: 'DEPOSIT',
      });
    }
  };

  return [active.activeTab, handleActive];
}

export default handleTab;
