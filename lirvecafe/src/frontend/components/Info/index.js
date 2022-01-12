import clsx from "clsx";

import styles from'./Info.module.css'


function Info({ children }) {
    return (
        <div className = {clsx(styles.info)}>
            {children}
        </div>
    )
}

export default Info