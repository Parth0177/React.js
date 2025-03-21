import React from "react"
import { useParams } from "react-router-dom"    
function User() {
    const {userid} = useParams()
    return (
        <div>
            <h1 className="bg-gray-600 text-white h-12 p-2 text-2xl ">User:{userid} </h1>
        </div>
    )
}
export default User