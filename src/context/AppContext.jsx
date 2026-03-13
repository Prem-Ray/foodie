import {createContext} from 'react' ;

const AppContext = createContext({user:{
    name:'foodie' ,
    email:'foodie@gmail.com'
}})

export default AppContext ;