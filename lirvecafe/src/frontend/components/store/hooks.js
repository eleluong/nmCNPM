import Context from './Context'

import {useContext} from 'react'


export function useStore() {
    return useContext(Context)
}



