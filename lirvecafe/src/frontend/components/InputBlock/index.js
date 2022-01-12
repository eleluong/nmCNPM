import clsx from 'clsx'

import styles from './InputBlock.module.css'
import { useStore } from '../store'

function InputBlock({ type, label, content, value, action, rules }) {

    const dispatch = useStore()[1]

    let errorMessage;

    
    function checkRules () {
        rules.forEach(rule => {
            if(!errorMessage){
                console.log(rule);
                errorMessage = checkRule(rule)
            }
        })
    }

    checkRules()

    function checkRule(rule) {
        switch (rule) {
            case 'require':
                if (value === '') return "Chưa nhập trường này"
                break
            case 'email':
                if (!value.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) return "Email không hợp lệ"
                break
            case 'phone':
                if (!/(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g.test(value))
                    return "Số điện thoại không hợp lệ"
            default: return undefined
        }
    }

    return (
        <div className={styles.inputBlock}>
            <label className={styles.blockLabel} htmlFor={content}>{label}</label>
            <input className={styles.blockInput} type={type} name="" id={content} value={value}
                onChange={e => dispatch(action(e.target.value))}
            />
            <span className={clsx(styles.blockError)}>{errorMessage}</span>
        </div>
    )
}


export default InputBlock