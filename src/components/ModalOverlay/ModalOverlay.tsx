import { FC, MouseEventHandler } from 'react';
import style from './ModalOverlay.module.css';
import { IModal } from '../../utils/type/type';

const ModalOverlay: FC<IModal> = ({ visible, closeModal }) => {
  const handleOverlay: MouseEventHandler = e => {
    if (e.target === e.currentTarget) { closeModal() }
  }

  return (
    <div className={visible ? `${style.overlay} ${style.overlay_active}` : `${style.overlay}`} onClick={handleOverlay}></div>
  )
}

export default ModalOverlay;