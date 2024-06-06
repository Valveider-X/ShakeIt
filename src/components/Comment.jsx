import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../services/config.services";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";

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
      pillarData();f

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
    <Box>
      <Typography variant="h4">Add Comment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          value={commentValue}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Comment
        </Button>
      </form>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h4">Comments</Typography>
      <Box>
        {comments.map((comment) => (
          <Box key={comment._id} sx={{ my: 1 }}>
            <ListItem disablePadding>
              <ListItemText primary={comment.description} />
              {isLoggedIn && (
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleDelete(comment)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
            <Divider />
          </Box>
        ))}
      </Box>
    </Box>
  );
}


export default Comment;
