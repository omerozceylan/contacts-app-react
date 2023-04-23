import { useState } from "react"
import Contacts from "./contacts"
import List from "./list"

function Form(){
    const [userArr, setUserArr] = useState([
        {name:'omer', phone:345435},
        {name:'murat', phone:98942},
        {name:'johny', phone:212323},
        {name:'alex', phone:732924}
    ])

    return (
        <div className="container">
            <Contacts users={userArr} setUserArr={setUserArr}></Contacts>
            <List users={userArr}></List>
        </div>
    )
}

export default Form