import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './LoginPage.module.css';
import Label from '../../components/ui/Label/Label';
import Input from '../../components/ui/Input/Input';
import ButtonForm from '../../components/ui/ButtonForm/ButtonForm';
import { getStateInstance } from '../../service/api';
import { setCookie } from '../../utils/cookie';

const LoginPage: FC = () => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const loginApp = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem('idInstance', login);
    localStorage.setItem('apiTokenInstance', password);

    let idInstance = localStorage.getItem('idInstance');
    let apiTokenInstance = localStorage.getItem('apiTokenInstance');

    setLogin('');
    setPassword('');
    try {
      await getStateInstance(idInstance, apiTokenInstance)
        .then((data: any) => {
          setCookie('accessToken', data.stateInstance.split('Bearer ')[1]);
        })
      history.replace({ pathname: '/' });
      setIsLoading(false);
      setErrorMsg('')
    } catch (error) {
      setErrorMsg('Некорректно введены регистрационные данные')
      console.log(error)
    }
  }

  return (
    <>
      <main className={style.main}>
        <section className={style.wrapper}>
          <h2 className={style.title}>Вход</h2>
          <form className={style.form} onSubmit={loginApp}>
            <Label text={'Login'} />
            <Input 
              type='text'
              placeholder='Введите idInstance'
              value={login}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
              required
            />
            <Label text={'Password'} />
            <Input
              type='password'
              placeholder='Введите apiTokenInstance'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required 
            />
            {isLoading ? 
              (<p className={style.load}>Ждем...</p>) 
              : (
                ''
                )}
            {errorMsg !== '' ? (
              <p className={style.err}>{errorMsg}</p>
            ) : (
              ''
            )}
            <ButtonForm text={'Войти'} />
          </form>
        </section>
      </main>
    </>
  )
}

export default LoginPage