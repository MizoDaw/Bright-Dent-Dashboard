import { BaseURL } from '../config'
import useAuthState from '../../lib/state mangment/AuthState'
import AxiosBuilder from './AxiosBuilder'
import { useTranslation } from 'react-i18next'

function useAxios() {
  const {isAuthenticated , token}= useAuthState()  
  const {i18n} = useTranslation()
  
  const buildAxios = new AxiosBuilder().
  withBaseURL(BaseURL)
  .withResponseType('json')
  .withTimeout(120000)
  .withHeaders(
    {"Content-Type" :"multipart/form-data",
  "language":i18n.language
})

  
  if(isAuthenticated){

    buildAxios.withHeaders({ Authorization: 'Bearer '+ token ,
    "Content-Type" :"multipart/form-data",
    "language":i18n.language })
  } 
  
  return (
    buildAxios.build()
  )
}

export default useAxios