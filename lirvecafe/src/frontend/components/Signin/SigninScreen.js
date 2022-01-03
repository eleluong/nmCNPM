import {useState} from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../components/constants/routes/routes'
import {ID} from './ChooseSignin';
import ChooseSignin from './ChooseSignin';

import styles from './SigninScreen.module.css'

export default  function SigninScreen() {
    
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const submitHanlder = (e) => {
        e.preventDefault();
    }
    // console.log(ID);
    
    return (
        <div className={styles.signin}>
            <form className={styles.form} onSubmit={submitHanlder}>
                <div className={styles.form_div}>
                    <h1 className={styles.form_div_h1}>Đăng nhập</h1>
                </div>
                <ChooseSignin/>
                <div className={styles.form_div}>
                    <label className={styles.form_label} htmlFor="phonenumber">SĐT</label>
                    <input className={styles.form_input}
                        type="text" 
                        id="phone" 
                        placeholder="Số điện thoại"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                </div>

                <div className={styles.form_div}>
                    <label className={styles.form_label} htmlFor="password">Mật khẩu</label>
                    <input 
                        className={styles.form_input}
                        type="password" 
                        id="password" 
                        placeholder="Mật khẩu"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className={styles.form_div}>
                    <label/>
                    <button className={`${styles.form_btn} ${styles.primary}`} type="submit">
                        Đăng nhập
                    </button>
                </div>
                <div className={`${styles.form_div} ${styles.center}`}>
                    <div>
                        Khách hàng mới? {' '}
                        <Link to={ROUTES.REGISTER}>Đăng ký tài khoản</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}