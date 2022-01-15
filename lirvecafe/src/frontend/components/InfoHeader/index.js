import clsx from "clsx";

import styles from './InfoHeader.module.css'

function InfoHeader({content}) {

    return (
        <div className={clsx(styles.infoHeader)}>{content}</div>
    )
}

export default InfoHeader


