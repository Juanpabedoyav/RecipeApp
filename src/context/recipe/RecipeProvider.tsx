import { RecipeContext } from './RecipeContext'


export interface RecipeState{
    isReady : boolean
    recipe : []
}
interface RecipeProviderProps{
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: RecipeState = {
  isReady: false,
  recipe: []
}
export const RecipeProvider = ({children}: RecipeProviderProps) => {
    
 
 
 
  return (
    <RecipeContext.Provider value={INITIAL_STATE} >
      {children}
    </RecipeContext.Provider >
  )
}
