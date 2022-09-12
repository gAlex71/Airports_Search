import { ChangeEvent, useState } from "react"

export const useInput = (initialValue='') => {
    const [value, setValue] = useState('')
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return{
        value,
        onChange
    }
}
