import React from 'react'
import '../App.css'

const DropDown = ({ title,  optionstit , cate }) => {
    return <>
        <div className="select">
            <select defaultValue='0' onChange={ cate} name='format'>
                <option value={0} disabled>{title}</option>
                { optionstit.map((o, i) => {
                    return <option key={i} value={o}>{o.toUpperCase()}</option>
                })}
            </select>
        </div>

    </>


}

export default DropDown