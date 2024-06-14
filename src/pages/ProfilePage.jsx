import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import service from "../services/config.services";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardAction from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalBar from "@mui/icons-material/LocalBar";
import { Star } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function ProfilePage() {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const { authenticateUser, isLoggedIn, loggedUserId } =
    useContext(AuthContext);

  useEffect(() => {
    pillarData();
  }, []);
  const pillarData = async () => {
    try {
      const response = await service.get("/auth/profile");
      setData(response.data);
    } catch (error) {
      navigate("/error");
    }
  };
  if (data === null) {
    return (
      <Stack sx={{ color: "orange.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <LocalBar sx={{ width: 100, height: 100 }} />
      <Typography variant="h4" mt={2}>
        Welcome, {data.username}
      </Typography>
      <Typography variant="body1" mt={1}>
        There's your favorite Cocktails.
      </Typography>
      <Box mt={4} width="100%" maxWidth="500px">
        {data.favorites.map((eachFavorite, i) => (
          <Card key={i} sx={{ mb: 2 }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
              >
                <Typography variant="h4">{eachFavorite.name}</Typography>
                <Button
                  component={Link}
                  to={`/cocktails/${eachFavorite._id}`}
                  size="small"
                  startIcon={<Star />}
                  sx={{
                    backgroundColor: "black",
                    color: "orange",
                    "&:hover": {
                      backgroundColor: "darkgrey",
                    },
                  }}
                >
                  Details
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ProfilePage;
