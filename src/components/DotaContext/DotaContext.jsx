import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { API } from '../Helpers/helpers';

export const dotaContext = React.createContext()

const INIT_STATE = {
    heroes : [],
    detail: {},
    edit: null,
    paginatedPages: 1,
    cart: {},
    cartLength: 0,
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
        case "GET_FAVORITE_HERO":
            return{
                ...state,
                cart: action.payload
            }
        case "CHANGE_FAVORITE_COUNT":
            return{
                ...state,
                cartLength: action.payload
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

    const getHeroes = async (history) => {

        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 60)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let data = await axios(`${API}/hero${window.location.search}`)
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
        const res = await axios.get(`${API}/hero/${id}?_embed=comments`)
        console.log(res)
        dispatch({
            type: "GET_DETAIL_HERO",
            payload: data
        })
    }

    const addHeroesInCart = (hero) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                heroes: [],
            }
        }
        let newHero = {
            item: hero,
        }
        let filteredHero = cart.heroes.filter(elem => elem.item.id === hero.id)
        if(filteredHero.length > 0){
            cart.heroes = cart.heroes.filter(elem => elem.item.id !== hero.id)
        }else{
            cart.heroes.push(newHero)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: 'GET_FAVORITE_HERO',
            payload: cart.heroes.length
        })
    }

    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                heroes: []
            }
        }
        dispatch({
            type: 'GET_FAVORITE_HERO',
            payload: cart
        })
    }

    const checkHeroesInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                heroes: []
            }
        }
        let newCart = cart.heroes.filter(elem => elem.item.id == id)
        return newCart.length > 0 ? true : false

    }

    return (
        <dotaContext.Provider value={{
            heroes: state.heroes,
            detail: state.detail,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            cart: state.cart,
            cartLength: state.cartLength,
            addHeroes,
            getHeroes,
            deleteHeroes,
            saveEditHero,
            editHeroes,
            getDetail,
            checkHeroesInCart,
            getCart,
            addHeroesInCart,

        }}
        >
            {children}
        </dotaContext.Provider>
    );
};

export default DotaContextProvider;