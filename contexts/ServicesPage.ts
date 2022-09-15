import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextType {
  serviceSlide: number
  setServiceSlide: Dispatch<SetStateAction<number>>
}

export const ServicesPageContext = createContext({} as ContextType)
