import ReactModal from 'react-modal'

const Modal = ({ isOpen, onClose, children, customStyles }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={customStyles}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
