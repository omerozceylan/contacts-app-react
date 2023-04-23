import propTypes from 'prop-types'
import { useState } from 'react'

function List({users}){
    const [filterText, SetFilterText] = useState('')

    const filtered = users.filter((item)=> {
        return Object.keys(item).some((key)=>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())

        )
    })

    console.table('filtered: ' , filtered)

    return(
        <div>
            <input 
            type="text"
            placeholder='Filter by name or phone'
            value={filterText}
            onChange={(e)=> SetFilterText(e.target.value)}
            />
           <div>{filtered.map((user,i)=>(<li key={i}>name: {user.name} &nbsp; - &nbsp; phone:  {user.phone}</li>))}</div>
        </div>
        
    )
}

List.propTypes = {
    users: propTypes.array.isRequired
}

export default List