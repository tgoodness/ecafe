import { useState } from 'react';

function ModalHandler() {
  const [visible, setIsModalVisible] = useState(false);
  const [disableStatus, setDisableStatus] = useState('');
  const showModal = (status) => {
    const _status = status === true ? 'Enable' : 'Disable';
    setDisableStatus(_status);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return [disableStatus, visible, showModal, handleCancel];
}

export default ModalHandler;
