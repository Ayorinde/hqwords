import {APP_NAMESPACE} from '../constants/localsaves';
export function logout(){
    console.log('namespace: ', APP_NAMESPACE)
    window.localStorage.removeItem(`${APP_NAMESPACE}:user`)

}