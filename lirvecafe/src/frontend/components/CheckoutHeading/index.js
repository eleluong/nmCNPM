import clsx from "clsx";
import styles from './CheckoutHeading.module.css';


function CheckoutHeading({content}) {

    return (
        <h1 className={clsx(styles.heading)}>{content}</h1>
    )
}

export default CheckoutHeading







