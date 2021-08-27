import { useState } from 'react';

function handleTab() {
  const [active, setstate] = useState({
    pending: true,
    completed: false,
    cancelled: false,
    activeTab: 'PENDING',
  });

  const handleActive = (type) => {
    if (type === 'PENDING') {
      setstate({
        pending: true,
        completed: false,
        cancelled: false,
        activeTab: 'PENDING',
      });
    }

    if (type === 'COMPLETED') {
      setstate({ pending: false, completed: true, cancelled: false, activeTab: 'COMPLETED' });
    }

    if (type === 'CANCELLED') {
      setstate({
        pending: false,
        completed: false,
        cancelled: true,
        activeTab: 'CANCELLED',
      });
    }
  };

  return [active.activeTab, handleActive];
}

export default handleTab;
