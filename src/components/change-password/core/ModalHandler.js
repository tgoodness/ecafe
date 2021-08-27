import { useState } from 'react';

function ModalHandler(handleClose) {
  const [visible, setIsModalVisible] = useState(false);

  const showModal = () => {
    handleClose();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return [visible, showModal, handleCancel];
}

export default ModalHandler;
