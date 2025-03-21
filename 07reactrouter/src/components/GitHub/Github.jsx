import React, { useEffect } from 'react';

function Github() {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Parth0177')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setData(data);
        })
    },[])
    return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        <h1 >Github Followers:{data.followers}</h1>
        <img src={data.avatar_url} alt='Git Picture' height={100} width={200} ></img>
    </div>
    );
}

export default Github;