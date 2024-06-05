import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import service from '../services/config.services'


function Comment(props) {
    const params = useParams()

    //estados
    //lista comentarios, tenia que haberle llamado commentsList, ya tarde.
    const [comments, setComments] = useState([]) 
    //valor comentario
    const [commentValue, setCommentValue] = useState("")
    //si estamos editando un comentario
    const [editing, setEditing] = useState(false)
    //el comentario que estamos editando
    const [commentToEdit, setCommentToEdit] = useState(null)
    const navigate = useNavigate()
    const {authenticateUser, isLoggedIn, loggedUserId } = useContext(AuthContext);

const createComment = async (newComment) => {
    try{
        const response = await service.post("/comments", newComment)
        setComments([...comments, response.data])
        setCommentValue("")
    }catch(error){
        console.log(error); //no la tengo aun
    }
}
//Actualizar y eliminar
const updateComment = async (updatedComment) => {
    try {
        const response = await service.put(`/comments/${commentToEdit._id}`, updatedComment)
        const updatedComments = comments.map((comment) =>{
            if(comment._id === commentToEdit._id){
                return response.data
            }
            return comment
        })
        setComments(updatedCommentsList)
        setEditing(false)
        setCommentValue("")
        
    } catch (error) {
        console.log(error);
        
    }
}

const handleDelete = async (id) => {
    try {
        await service.delete(`/comments/${commentValue._id}`)
        setComments()
    } catch (error) {
        console.log(error);
        
    }
}

//formualrios

const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
        user: loggedUserId, 
        cocktail: props.cocktailId, 
         description: commentValue,

    }
    createComment(newComment)
    console.log(newComment)
}


   
//cambio en input comentario
const handleChange = (e) => {
    setCommentValue(e.target.value)
}
//para el boton de edit
const handleEdit = (comment) =>{
    setEditing(true)
    setCommentToEdit(comment)
    setCommentValue(comment.description)
}
//para el boton de update formulario
const handleUpdate = (e) => {
    e.preventDefault()
    if(commentToEdit){
    const updatedComment = {
        _id: commentToEdit._id,
        
        description: commentValue
    }
        updateComment(updatedComment)
    }else{
        console.log("no comment to edit")
    }
}
   

  return (
    <div>
        <h2>Add Comment</h2>
    <form onSubmit={handleSubmit}>
        
            
            <label>Name:</label>
            <input type="text"
            value={commentValue}
            onChange={handleChange}
            />
           
            <button type="submit">Add Comment</button>
            </form>
            
            <h2>Comments:</h2>
            <ul>
                {comments.map((comment)=>(
                    <li key={comment._id}>
                        {comment.description}
                        {editing && comment._id === commentToEdit._id? (
                            <form onSubmit={handleUpdate}>
                                <input type="text" value={commentValue} onChange={handleChange}
                                />
                                <button type="submit">Update</button>
                            </form>
                        ) : (
                            <div>
                                <button onClick={() => handleEdit(comment)}>Edit</button>
                                <button onClick={() => handleDelete(comment)}>Delete</button>
                            </div>
                        )
                        }
                    </li>
                ))}

            </ul>
    
        
    </div>
    
  )
}


export default Comment