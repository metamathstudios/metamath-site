import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextType {
  popup: string
  setPopup: Dispatch<SetStateAction<string>>
}

export const PopupContext = createContext({} as ContextType)
