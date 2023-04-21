import { useState } from "react"

function Contacts(){
    const [number, setNumber] = useState(0)
    const [form, setForm] = useState({phone:'', name: ''})
    const [userArr, setUserArr] = useState([])

    function putUser(){
        setUserArr([...userArr, form])   
        
    }
     
    const onChangeInput = (e) => {
        const inputName = e.target.name
        const input = e.target.value
        setForm({...form, [inputName]: input})
        
    }

    return (
        <div>
            <div className="container">
                <label htmlFor="phone">phone</label>
                <input name='phone' onChange={onChangeInput} type="text" />
                <label htmlFor="name">name</label>
                <input name='name' onChange={onChangeInput} type="text" />
                <button onClick={putUser}>Add to list</button>
            </div>

        </div>
    )
}

export default Contacts