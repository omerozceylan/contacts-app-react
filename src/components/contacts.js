import { useEffect, useState } from "react"

function Contacts({users, setUserArr}){
    const [form, setForm] = useState({phone:'', name: ''})

    function putUser(){
        if(form.name == '' || form.phone== '') return    
        setUserArr([...users, form])   
        setForm({phone:'', name:''})
    }
     
    useEffect(()=> {
        console.table(users)
        
    },
    [users])


    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        
    }

    return (
        <div>
            <div className="title-container">
                <h2 className="title">contacts app</h2>
            </div>
            <div >
                <label htmlFor="phone">phone</label>
                <input name='phone' autocomplete="off" value={form.phone} onChange={onChangeInput} type="text" />
                <label htmlFor="name">name</label>
                <input name='name' autocomplete="off" value={form.name} onChange={onChangeInput} type="text" />
                <div className="btn">
                    <button onClick={putUser}>Add to list</button>
                </div>
            </div>

        </div>
    )
}

export default Contacts