import React, { useState } from "react";

const FormH = () => {
    const [title, setTitle] = useState('')
    const change = (e) => { setTitle(e.target.value) }




    const submitHandler = (e) => {
        e.preventDefault()
        console.log(title)
        setTitle('')


    }


    return (
        <div><form onSubmit={submitHandler} >
            <input type='text' placeholder="Enter Your Name" value={title} onChange={change}></input>
            <button>Submit</button>
        </form>
        </div>
    )


}
export default FormH;