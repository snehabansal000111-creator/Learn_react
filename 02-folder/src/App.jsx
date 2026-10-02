import React from "react"
import { X } from 'lucide-react';

import { useState } from "react"
const App = () => {
    const submitHandler = (e) => {
        e.preventDefault()
        const copy = [...task]
        copy.push({ title, detail })
        setTask(copy)

        setTitle('')
        setDetail('')
    }
    const deleteNote = (idx) => {
        const copy = [...task]
        copy.splice(idx, 1)
        setTask(copy)

    }
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [task, setTask] = useState([])


    return (
        <div className=" lg:flex  bg-black text-white  h-screen"  >
            <form className="p-3 lg:w-1/2 flex flex-col items-start gap-3" onSubmit={submitHandler}>

                <input className="p-3  border-2 h-10 outline-none rounded font-medium w-full"
                    type='text' placeholder='Enter Notes Heading' value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}></input>
                <textarea className='px-3 py-2 border-2 h-32 w-full outline-none rounded font-medium' type='text' placeholder='Write Details' value={detail}
                    onChange={(e) => {
                        setDetail(e.target.value)
                    }} />
                <button className="cursor-pointer active:scale-95 rounded border-2 bg-white font-medium w-full outline-none text-black p-2">Add Note</button>


            </form>
            <div className="lg:w-1/2 lg:border-l-2  p-10">
                <h1 className="text-3xl font-bold">Recent Notes</h1>
                <div className="h-full flex flex-wrap gap-3 mt-5 overflow-auto ">
                    {task.map(function (elem, idx) {
                        return <div key={idx} className="flex justify-between flex-col items-start  h-52 w-40 rounded-xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://webstockreview.net/images/note-clipart-page-1.png')]">
                            <div> <h3 className=" leading-tight text-xl font-bold ">{elem.title}</h3>
                                <p className="mt-1.5 font-medium leading-snug text-gray-800">{elem.detail}</p></div>

                            <button onClick={() => { deleteNote(idx) }} className="bg-red-600 cursor-pointer w-full font-bold text-xs active:scale-95 text-white py-1 rounded">Delete</button>
                        </div>
                    })}


                </div></div>

        </div>
    )
}






export default App;



