import { ChangeEvent, FC, useState } from 'react';
import { IModal } from '../../utils/type/type';
import { createPortal } from 'react-dom';
import { modalContainer } from '../../utils/constants';
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

  let contact = {};

  const createContact = () => {
    contact = {
      name: name,
      phone: `${phone}@c.us`,
      message: ''
    }

    localStorage.setItem(`contact-${phone}`, JSON.stringify(contact))
  }

  // const storageLength = window.localStorage.length;

  // let contacts = [];
  // const userJSON = localStorage.getItem('contact-79095801349');
  // console.log(userJSON);
  

  // for (let i = 0; i < storageLength; i++) {
  //   contacts.push(window.localStorage.key(i))
  // }

  // console.log(contacts.includes('contact'));

  // console.log(window.localStorage.key(2));
  
  return createPortal ((
    <section className={visible ? `${style.popup} ${style.popup_active}` : `${style.popup}`}>
      <ModalOverlay closeModal={closeModal} visible={visible} />
      <div className={`${style.modal} pt-10 pb-10 pl-10 pr-10`}>
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
              placeholder='Введите номер телефона начиная с цифры 7'
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