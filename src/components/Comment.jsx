import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../services/config.services";

function Comment() {
  const params = useParams();
  const navigate = useNavigate();
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  //estados
  //lista comentarios, tenia que haberle llamado commentsList, ya tarde.
  const [comments, setComments] = useState([]);
  //valor comentario
  const [commentValue, setCommentValue] = useState("");

  useEffect(() => {
    pillarData();
  }, []);

  async function pillarData() {
    try {
      const response = await service.get(`/comments/${params.cocktailId}`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  //Actualizar y eliminar
  /*const updateComment = async (updatedComment) => {
    try {
        if(commentToEdit && commentToEdit._id){
        const response = await service.put(`/comments/${commentToEdit._id}`, {description: updatedComment})
        const updatedComments = comments.map((eachComment) =>{
            if(eachComment._id === commentToEdit._id){
                return response.data
            }
            return eachComment
        })
        setComments(updatedComments)
        setEditing(false)
        setCommentValue("")
    }else{
        console.log("no hay comentario que editar");
    }
        
    } catch (error) {
        console.log(error);
        
    }
}*/

  const handleDelete = async (comment) => {
    try {
      //buscar la id de mongo para eliminar

      await service.delete(`/comments/${comment._id}`);
      pillarData();
    } catch (error) {
      console.log(error);
    }
  };

  //formualrios

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newComment = {
        cocktail: params.cocktailId,
        description: commentValue,
      };
      await service.post("/comments", newComment);
      pillarData();

      setCommentValue("");
    } catch (error) {
      console.log(error); //meter navigate error
    }
  };

  //cambio en input comentario
  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };
  //para el boton de edit
  /*const handleEdit = (comment) => {
    setEditing(true);
    setCommentToEdit(comment);
    setCommentValue(comment.description);
  };*/
  //para el boton de update formulario
  /*const handleUpdate = (e) => {
    e.preventDefault();
    if (commentToEdit) {
      const updatedComment = {
        _id: commentToEdit._id,

        description: commentValue,
      };
      updateComment(commentToEdit.description);
      setComments(
        comments.map((eachComment) =>
          eachComment.id === commentToEdit._id ? updatedComment : eachComment
        )
      );
    } else {
      console.log("no comment to edit");
    }
  };*/

  return (
    <div>
      <h2>Add Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={commentValue} onChange={handleChange} />

        <button type="submit">Add Comment</button>
      </form>

      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.description}</p>

              <div>
                {/*<button onClick={() => handleEdit(comment)}>Edit</button>*/}
                <button onClick={() => handleDelete(comment)}>Delete</button>
              </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comment;
