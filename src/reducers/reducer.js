const initialState =  {
  dataFromInput:"",
  hey: "hi"
}

export const ourReducer = (state = initialState, action) =>{
    switch (action.type){
      case 'DATA':
        return{
          ...state,
          dataFromInput: action.payload,
        }

    }
}