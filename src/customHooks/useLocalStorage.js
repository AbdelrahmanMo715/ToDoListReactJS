import React, { useEffect, useState } from 'react'

export function useLocalStorage(initialState,key) {
    const [value, setValue] = useState(function(){
        const StoredValue = JSON.parse(localStorage.getItem(key))
        return StoredValue ? StoredValue : initialState;
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value , setValue];
}

 
