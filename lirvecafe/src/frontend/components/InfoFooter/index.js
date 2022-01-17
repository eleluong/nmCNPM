import clsx from 'clsx'

import styles from './InfoFooter.module.css'

import {useStore} from '../store'
import handleSubmit from './handleSubmit'

function InfoFooter({linkData, textBtn}) {

    const [state] = useStore()

    return (
        <>
            <div className={clsx(styles.infoFooter)}>
                <a href={linkData.link} className={clsx(styles.linkBack)}>{linkData.label}</a>
                <button
                    className={clsx(styles.submitBtn)}
                    onClick={() => handleSubmit(state, clsx(styles.modalCheckout), clsx(styles.hidden))}
                >{textBtn}</button>
            </div>
            <div className={clsx(styles.modalCheckout, styles.hidden)}>
                <div className={styles.modalContent}>
                    <span className={styles.modalIcon}>&#10003;</span>
                    <span className={styles.modalText}>Đặt hàng thành công</span>
                    
                </div>
            </div>
        </>
    )
}

export default InfoFooter