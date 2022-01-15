import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import styles from './RegisterScreen.module.css'
import * as ROUTES from '../constants/routes/routes'
import {useNavigate} from 'react-router-dom';
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
    const handleRegister = (e) => {
        if (!phone || !password || !name || !email || !address) {
            setError('Bạn nhập thiếu một số trường thông tin! Nhập lại!');
        } else if (password.length <= 6) {
            setError('Mật khẩu quá yếu, xin hãy nhập mật khẩu lớn hơn 6 ký tự!')
        } else {
            setError('');
            axios({
                method: 'POST',
                url: 'http://localhost:5000/users/register',
                data: {
                    phone: phone,
                    password: password,
                    name: name,
                    email: email,
                    address: address,
                }
            })
<<<<<<< HEAD
            .then(res => { 
                console.log(res.data);
                //e.preventDefault();
                alert('Đăng nhập Thành công, Nhấn oke để về trang chủ');
                window.location.href = ROUTES.BASE_URL_WEB;
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data);
                // e.prevetnDefault();
                setError(err.response.data);
            })
=======
                .then(res => {
                    console.log(res.data);
                    //e.preventDefault();
                    alert('Đăng nhập Thành công, Nhấn oke để về trang chủ');
                    window.location.href = ROUTES.BASE_URL_WEB;
                })
                .catch(err => {
                    // console.log(err);
                    console.log(err.response.data);
                    // e.prevetnDefault();
                    setError(err.response.data);
                })
>>>>>>> c8c83c98b420c8b28d2fb3a6f0e667e2c21f7b89
        }
        // console.error('Đăng ký thành công, quay trở lại trang chủ để đăng nhập');
        // console.log(e)
        //    e.preventDefaut();
    }

    return (
        <div className={styles.register}>
            <Link to="/" className={styles.home}> Lirve Cafe</Link>
            <div className={styles.registerform}>
                <div className={styles.form_div}>
                    <h1 className={styles.form_div_h1}>Đăng ký</h1>
                    {error && <span style={{color: 'red'}}>{error}</span>}
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
                        <span onClick={handleShowHidePassword}><i
                            className={`${isShowPassword ? eye : eye_slash} ${styles.far_eye}`}></i></span>
                    </div>
                </div>

                <div className={styles.form_div}>
                    <label/>
                    <button className={`${styles.form_btn} ${styles.primary}`} onClick={handleRegister}>
                        Đăng ký
                    </button>
                </div>

                <div className={`${styles.form_div} ${styles.center}`}>
                    <div>
                        Đã có tài khoản? {' '}
                        <Link to={ROUTES.SIGNIN}>Đăng nhập</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
