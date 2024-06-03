import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Comment() {
    const params = useParams()
    const [commentValue, setCommentValue] = useState("")
    const navigate = useNavigate



const handleSubmit = async(e) => {
    e.preventrDefault()
    const newComment = {
        //user: req.payload._id , //*payload
        cocktail: params.id, //va a la coleccion de comentarios y va con el id del cocktail
         comment: comment,

    }
    try {
        const response = await axios.post( `${import.meta.env.VITE_URL_BACKEND}/comments` , newComment)
        
    } catch (error) {
        navigate("/error")
        
    }
}



  return (
    <div>Add Comment
    <form onSubmit={handleSubmit}>
        <div>
            <label value={params.id}></label>
            <label>Name:</label>
            
        </div>
    <div>
        <label>Comments: </label>
        <input
        type="text"
        name="comments"
        value={commentValue}
        >
            {/* meter handleChange cuando esté*/}

       </input>
    </div>
    </form>
    
    </div>
  )
}

export default Comment