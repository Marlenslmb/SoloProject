import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

export const dotaContext = React.createContext()

const INIT_STATE = {
    heroes : [],
}
const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        

        default : return state
    }
}

const DotaContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const history = useHistory()

    const addHeroes = async (newHeroes) => {
        try{
            let res = await axios.post(`${API}/hero`, newHeroes)
            return res
        }catch(error){
            console.log(error);
            return error
        }
    }

    const getHeroes = (history) => {
        
    }


    return (
        <dotaContext.Provider value={{
            heroes: state.heroes,
            addHeroes,


        }}
        >
            {children}
        </dotaContext.Provider>
    );
};

export default DotaContext;