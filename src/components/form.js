import { useState } from "react"
import Contacts from "./contacts"
import List from "./list"

function Form(){
    const [userArr, setUserArr] = useState([
        {name:'omer', phone: 554324355123},
        {name:'murat', phone: 5623234645},
        {name:'johny', phone: 53234246313},
        {name:'alex', phone: 51232436334}
    ])

    return (
        <div className="container">
            <Contacts users={userArr} setUserArr={setUserArr}></Contacts>
            <List users={userArr}></List>
        </div>
    )
}

export default Form