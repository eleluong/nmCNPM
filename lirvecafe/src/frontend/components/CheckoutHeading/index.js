import clsx from "clsx";
import styles from './CheckoutHeading.module.css';


function CheckoutHeading({content}) {

    return (
        <a href="./" className={clsx(styles.heading)}>{content}</a>
    )
}

export default CheckoutHeading







