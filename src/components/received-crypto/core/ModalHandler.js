import { useState } from 'react';

function ModalHandler() {
  const [visible, setIsModalVisible] = useState(false);
  const [reference, setReference] = useState('');
  const showModal = (e) => {
    setReference(e.currentTarget.id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return [reference, visible, showModal, handleCancel];
}

export default ModalHandler;
