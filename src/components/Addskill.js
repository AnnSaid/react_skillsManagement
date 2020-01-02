import React from 'react'

const Addskill = (props) =>{

    return (
            <form onSubmit={props.z}>
                <input type="text" value={props.cr} placeholder="Add new skill" onChange={props.y} className="inputskill" />
                <button className="btn btnskill">Add Skill</button>
            </form>
    )
}

export default Addskill