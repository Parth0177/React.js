import React,{use, useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication=true }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const authstatus= useSelector(state => state.auth.status)
    useEffect(() => {
        if(authentication && authstatus!== authentication){
            navigate("/login")

        }else if(!authentication && authstatus!== authentication){
            navigate("/")
        }
        setLoading(false)
    },[authstatus , navigate , authentication])
  return loading ? <h1> Loading...</h1>: <>{children}</>
    
  
}

