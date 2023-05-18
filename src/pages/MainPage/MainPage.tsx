import { FC, useEffect, useState } from 'react';
import style from './MainPage.module.css';
import avatar from '../../images/standart-avatar.png';
import iconMessage from '../../images/icons-message.svg';
import Preview from '../../components/Preview/Preview';
import Header from '../../components/Header/Header';
import Contact from '../../components/Contact/Contact';
import Chat from '../../components/Chat/Chat';
import HeaderPanel from '../../components/ui/HeaderPanel/HeaderPanel';
import ModalAddContact from '../../components/ModalAddContact/ModalAddContact';
import { getChatHistory } from '../../service/api';
import { apiTokenInstance, idInstance } from '../../utils/constants';
import { ILastMessage } from '../../utils/type/type';

const MainPage: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [chatHistory, setChatHistory] = useState(Array<ILastMessage>)

  const activeModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  };

  const handelOpenChat = () => {
    setOpenChat(true);
  }

  const handelCloseChat = () => {
    setOpenChat(false);
  }

  const userContact = () => {
    const contactJSON = localStorage.getItem('contact');  
    if (contactJSON === null) {
      return undefined
    }  
    try {
      return JSON.parse(contactJSON)
    } catch (e) {
      localStorage.removeItem('contact')
      return undefined
    }
  }

  let user = userContact(); 

  useEffect(() => {
    getChatHistory(idInstance, apiTokenInstance, user.phone)
          .then((data: any) => setChatHistory(data))
          .catch(error => console.log(error))
  }, [user.phone]);

  const lastMessage: ILastMessage = chatHistory[0]
  
  console.log(lastMessage ? lastMessage : 'нет сообщения');
  
  
  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.panel}>
          <HeaderPanel avatar={avatar} icon={iconMessage} onClick={activeModal} />
          <ul className={style.chats}>
            {user && lastMessage ? (
              <Contact 
                title={user.name}
                date={lastMessage.timestamp}
                message={lastMessage.textMessage}
                phone={user.phone}
                open={handelOpenChat}
              />
            ) : (
              ''
            )}
            
          </ul>
        </section>
        <section className={style.correspondence}>
          {openChat && chatHistory ? (
            <Chat
              onClick={handelCloseChat}
              data={chatHistory}
              phone={user.phone}
            />
          ) : (
            <Preview />
          )}
        </section>
      </main>
      <ModalAddContact visible={openModal} closeModal={closeModal} />
    </>
  );
}

export default MainPage;
