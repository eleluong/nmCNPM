import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './RegisterScreen.module.css'
import * as ROUTES from '../constants/routes/routes'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function RegisterScreen() {

    const eye = "far fa-eye";
    const eye_slash = "far fa-eye-slash"
    const [isShowPassword, setIsShowPassword] = useState(false);
    const handleShowHidePassword = (e) => {
        setIsShowPassword(!isShowPassword);
        // console.log('Show hide password')
    }

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        // axios({
        //     method: 'POST',
        //     url: '/users/register',
        //     data: {
        //         phone: phone,
        //         password: password, 
        //         name: name,
        //         email: email,
        //         address: address,
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        console.error('Đăng ký thành công, quay trở lại trang chủ để đăng nhập');
        window.location.href = ROUTES.BASE_URL_WEB;
        e.preventDefault();
    }

    return (
        <div className={styles.register}>
            <form className={styles.registerform} onSubmit={handleRegister}>
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
                    <div className={styles.custome_input_password}>
                        <input 
                            className={styles.form_input}
                            type={isShowPassword ? "text" : "password"}
                            id="password" 
                            placeholder="Mật khẩu"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        <span onClick={handleShowHidePassword}><i className={`${isShowPassword ? eye : eye_slash} ${styles.far_eye}`}></i></span>
                    </div>
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
