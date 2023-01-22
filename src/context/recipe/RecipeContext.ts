import { createContext } from 'react'

interface RecipeContextProps{
 isReady : boolean
 recipe : []
}

export const RecipeContext = createContext({} as RecipeContextProps)