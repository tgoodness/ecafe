import { useState } from 'react';

function ModalHandler() {
  const [visible, setIsModalVisible] = useState(false);
  const [freezeStatus, setFreezeStatus] = useState('');
  const showModal = (status) => {
    const _status = status === true ? 'Unfreeze' : 'Freeze';
    setFreezeStatus(_status);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return [freezeStatus, visible, showModal, handleCancel];
}

export default ModalHandler;
