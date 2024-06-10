# react-quiz
#useReducer hook
=>the useReducer is basically more advanced and complex way of managing state instead of useState hook
=>useReducer works with a reducer function[which always take the previous/current state and action as an argument and it will return the next state]
example:->// const [count, setCount] = useState(0);
  const [count,dispatch] = useState(reducer,0)
here count is the current state,dispatch function is used for updating the state
=>unlike the useState the useReducer pass in the reducer function and initialState 
=>example:->  const [count,dispatch] = useReducer(reducer,0)
=>the reducer function is created outside of the component
=>the reducer function takes two thing as argument first the currentState and second the action
=>example:-function reducer(state,action){
  console.log(state,action)
}

#So when does the reducer function gets called:->
=>so that when the dispatch function comes into play
=>example:->function reducer(state,action){
  console.log(state,action)
  return state+action
}
  const [count,dispatch] = useReducer(reducer,0)
const inc = function () {
    dispatch(1)
  };
=>the reducer function console will print 0 and 1 [0 being the current state and 1 being the value of action got from dispatch]

#Naming the action
dispatch({type:'dec',payload:1})

#defining input value for input field
  if(action.type==='setCount') return action.payload
  const defineCount = function (e) {
    dispatch({type:'setCount',payload:!isNaN(e.target.value) ? parseInt(e.target.value) : ''})
  };

#Usually useReducer is used when we want to manage complex state[so state cannot be a single value rather the state is a object]
=>const [count,dispatch] = useState(reducer,0)❌[this not how we declare useReducer as here we are only managing single state]

=>const initialState = {count:0,step:1}
  const [state,dispatch] = useReducer(reducer,initialState)✅[in during the type of declaring we are managing two state]
=>the initial state live outside of the functioal component

#managing state of object state

function reducer(state,action){
  switch(action.type){
    case 'dec':return {...state,count:state.count-action.payload}
    case 'inc':return {...state,count:state.count+action.payload}
    case 'setCount':return {...state,count:action.payload}

    default:
      throw new Error('unknown action')
  }
}

#How to load a fake api to the server
=>npm i json-server
=>write a script in the package.json file like this to start the server:-
"server": "json-server --watch ./src/question.json --port 8000"
