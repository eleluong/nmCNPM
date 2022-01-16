import clsx from "clsx";

import styles from './InfoHeader.module.css'

function InfoHeader({content}) {

    return (
        <>
            <div className={clsx(styles.infoSubHeader)}>
                <a className={clsx(styles.infoSublink)} href="./">Trang chủ </a>
                &gt; Thông tin giao hàng
            </div> 
            <div className={clsx(styles.infoHeader)}>{content}</div>
        </>
    )
}

export default InfoHeader


