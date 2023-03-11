import React, { useState } from "react"
import axios from "axios"
import { async } from "q"


const globalContext = React.createContext()

const BASE_URL = "http://localhost:3000/api/v1/"

export const GlobalProvider = ({children}) => {


const [incomes, setIncomes] = useState([])
const [expenses, setExpenses] = useState([])
const [error, setError] = useState(null)

const addIncome = async (income) => {
    const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
}
    return (
        <globalContext.Provider value={{
            addIncome, 
        }}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useGlobalContext(globalContext)
}