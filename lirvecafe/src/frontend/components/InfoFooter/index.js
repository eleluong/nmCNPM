import clsx from 'clsx'

import styles from './InfoFooter.module.css'

import {useStore} from '../store'
import handleSubmit from './handleSubmit'

function InfoFooter({linkData, textBtn}) {

    const [state] = useStore()

    return (
        <div className={clsx(styles.infoFooter)}>
            <a href={linkData.link} className={clsx(styles.linkBack)}>{linkData.label}</a>
            <button
                className={clsx(styles.submitBtn)}
                onClick={() => handleSubmit(state)}
            >{textBtn}</button>
        </div>
    )
}

export default InfoFooter