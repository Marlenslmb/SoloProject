import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { API } from '../Helpers/helpers';

export const dotaContext = React.createContext()

const INIT_STATE = {
    heroes : [],
    detail: {},
    edit: null,
    paginatedPages: 1,
}
const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_HERO":
            return {
                ...state,
                heroes: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 60)
            }
        case "GET_DETAIL_HERO":
            return{
                ...state,
                detail: action.payload
            }
        case "GET_EDIT_HERO":
            return{
                ...state,
                edit: action.payload
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
        const { data } = await axios.get(`${API}/hero/${id}`)
        console.log(data)
        console.log(id)
        dispatch({
            type: "GET_EDIT_HERO",
            payload: data
        })
    }

    const saveEditHero = async (updatedHero, history) => {
        try{
            let res = await axios.patch(`${API}/hero/${updatedHero.id}`, updatedHero)
            getHeroes(history)
            return res
        }catch(error){
            console.log(error)
            return error
        }
    }

    const getDetail = async (id) => {
        const {data} = await axios.get(`${API}/hero/${id}`)
        dispatch({
            type: "GET_DETAIL_HERO",
            payload: data
        })

    }

    console.log(state.detail)

    return (
        <dotaContext.Provider value={{
            heroes: state.heroes,
            detail: state.detail,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            addHeroes,
            getHeroes,
            deleteHeroes,
            saveEditHero,
            editHeroes,
            getDetail,

        }}
        >
            {children}
        </dotaContext.Provider>
    );
};

export default DotaContextProvider;