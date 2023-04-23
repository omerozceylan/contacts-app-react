import { useState } from "react"
import Contacts from "./contacts"
import List from "./list"

function Form(){
    const [userArr, setUserArr] = useState([
        {name:'omer', phone:0554355123},
        {name:'murat', phone:056234645},
        {name:'johny', phone:053246313},
        {name:'alex', phone:051236334}
    ])

    return (
        <div className="container">
            <Contacts users={userArr} setUserArr={setUserArr}></Contacts>
            <List users={userArr}></List>
        </div>
    )
}

export default Form