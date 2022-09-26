import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextType {
  actualSlide: number
  setActualSlide: Dispatch<SetStateAction<number>>
}

export const SlideContext = createContext({} as ContextType)
