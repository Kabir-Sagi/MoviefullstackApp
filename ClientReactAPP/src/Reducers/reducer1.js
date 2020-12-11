/* eslint-disable default-case */
import InitialValue from '../InitialValues'

const myReducer = (currValue=InitialValue,action)=>{
 
   switch(action.type) {
      case 'MOVIESDATA':
        
         currValue = {
            ...currValue,
            moviedata:action.payload,
         }
         break;
   
     case 'FILTEREDDATA':
      currValue = {
         ...currValue,
         filterData:action.payload,
      }
      break;

      case 'SEARCHDATA':
         
      currValue = {
         ...currValue,
      searchData:action.payload,
      }
      break;
   }
    return currValue;

}
export default myReducer;