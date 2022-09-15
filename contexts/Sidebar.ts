import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextType {
  sidebar: boolean
  setSidebar: Dispatch<SetStateAction<boolean>>
  openSidebar: () => void
  closeSidebar: () => void
}

export const SidebarContext = createContext({} as ContextType)
