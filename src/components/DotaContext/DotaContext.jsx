import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { API } from '../Helpers/helpers';

export const dotaContext = React.createContext()

const INIT_STATE = {
    heroes : [],
    detail: {},
    edit: null,
}
const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_HERO":
            return {
                ...state,
                heroes: action.payload.data
            }


        default : return state
    }
}

const DotaContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addHeroes = async (newHeroes) => {
        try{
            let res = await axios.post(`${API}/hero`, newHeroes)
            return res
        }catch(error){
            console.log(error);
            return error
        }
    }

    const getHeroes = async () => {
        let data = await axios.get(`${API}/hero`)
        dispatch({
            type: "GET_HERO",
            payload: data
        })
    }

    const deleteHeroes = async (id, history) => {
        await axios.delete(`${API}/hero/${id}`)
        getHeroes(history)
    }

    const editHeroes = async (id) => {
        const { res } = await axios.get(`${API}/hero/${id}`)
        dispatch({
            type: "GET_EDIT_HERO",
            payload: res
        })
    }



    return (
        <dotaContext.Provider value={{
            heroes: state.heroes,
            addHeroes,
            getHeroes,
            deleteHeroes,

        }}
        >
            {children}
        </dotaContext.Provider>
    );
};

export default DotaContextProvider;