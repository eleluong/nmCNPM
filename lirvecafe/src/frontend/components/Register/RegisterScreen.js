import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './RegisterScreen.module.css'
import * as ROUTES from '../constants/routes/routes'

export default function RegisterScreen() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    
   
    const submitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.register}>
            <form className={styles.registerform} onSubmit={submitHandler}>
                <div className={styles.form_div}>
                    <h1 className={styles.form_div_h1}>Đăng ký</h1>
                    {error && <span>{error}</span>}
                </div>

                <div className={styles.form_div1}>
                    <div className={styles.form_div}>
                        <label className={styles.form_label} htmlFor="name">Tên</label>
                        <input className={styles.form_input}
                            type="text" 
                            id="name" 
                            placeholder="Tên"
                            required
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>

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
                    
                </div>
                
                <div className={styles.form_div}>
                        <label className={styles.form_label} htmlFor="email">Email</label>
                        <input className={styles.form_input}
                            type="email" 
                            id="email" 
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                </div>

                <div className={styles.form_div}>
                    <label className={styles.form_label} htmlFor="address">Địa chỉ</label>
                    <input className={styles.form_input}
                        type="text" 
                        id="address" 
                        placeholder="Địa chỉ"
                        required
                        onChange={(e) => setAddress(e.target.value)}
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
                        Đăng ký
                    </button>
                </div>

                <div className={`${styles.form_div} ${styles.center}`}>
                    <div>
                        Đã có tài khoản? {' '}
                        <Link to={ROUTES.SIGNIN}>Đăng nhập</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
