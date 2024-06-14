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
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Comment() {
  const params = useParams();
  const navigate = useNavigate();
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  //estados
  //lista comentarios
  const [comments, setComments] = useState([]);
  //valor comentario
  const [commentValue, setCommentValue] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    pillarData();
  }, []);

  async function pillarData() {
    try {
      const response = await service.get(`/comments/${params.cocktailId}`);
      setComments(response.data);
    } catch (error) {
      navigate("/error");
    }
  }
  //Actualizar y eliminar

  const handleDelete = async (comment) => {
    try {
      //buscar la id de mongo para eliminar

      await service.delete(`/comments/${comment._id}`);
      pillarData();
    } catch (error) {
      navigate("/error");
    }
  };

  //formularios

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
      navigate("/error");
    }
  };

  //cambio en input comentario
  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h5">Comments</Typography>
      <Box sx={{ listStyle: "none" }}>
        {comments.map((comment) => (
          <Box key={comment._id} sx={{ my: 1 }}>
            <ListItem disablePadding>
              <ListItemText
                primary={comment.description}
                secondary={`By: ${comment.user.username}`}
              />
              {isLoggedIn && comment.user._id === loggedUserId && (
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

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5">Add Comment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          value={commentValue}
          onChange={handleChange}
          sx={{ mb: 2 }}
          disabled={!isLoggedIn}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isLoggedIn}
        >
          Add Comment
        </Button>
        {!isLoggedIn && <p>You must be logged to comment</p>}
      </form>
    </Box>
  );
}

export default Comment;
