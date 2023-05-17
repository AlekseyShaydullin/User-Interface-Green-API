import { ChangeEvent, FC, useState, useEffect } from 'react';
import { IModal } from '../../utils/type/type';
import { createPortal } from 'react-dom';
import { body, modalContainer } from '../../utils/constants';
import style from './ModalAddContact.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import iconClose from '../../images/icons-close.svg'
import Label from '../ui/Label/Label';
import Input from '../ui/Input/Input';
import ButtonForm from '../ui/ButtonForm/ButtonForm';

const ModalAddContact: FC<IModal> = ({ visible, closeModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const handleEscClose = (e: {key: string}) => {
      if (e.key === 'Escape') {closeModal()}
    }
    
    if (visible) {
      document.addEventListener('keydown', handleEscClose);
      body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      body.style.overflow = 'visible';
    };
  }, [closeModal, visible]);

  let contact = {};

  const createContact = () => {
    contact = {
      name: name,
      date: new Date(),
      phone: `${phone}@c.us`,
      message: ''
    }
    localStorage.setItem(`contact`, JSON.stringify(contact));
    closeModal();
    setName('');
    setPhone('');
  }
  
  return createPortal ((
    <section className={visible ? `${style.popup} ${style.popup_active}` : `${style.popup}`}>
      <ModalOverlay closeModal={closeModal} visible={visible} />
      <div className={style.modal}>
        <div className={style.wrapper}>
        <ButtonIcon icon={iconClose} onClick={closeModal} modal={true} />
          <h2 className={style.title}>Добавить контакт</h2>
          <form className={style.form} onSubmit={createContact}>
            <Label text={'Имя'} />
            <Input 
              type='text'
              placeholder='Введите имя'
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
            />
            <Label text={'Телефон'} />
            <Input
              type='text'
              placeholder='Введите номер телефона в формате: 7XXXXXXXXXX'
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              required 
            />
            <ButtonForm text={'Сохранить'} />
          </form>
        </div>
      </div>
    </section>
  ), modalContainer)
}

export default ModalAddContact;