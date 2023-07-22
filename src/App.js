/*global chrome*/
import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';

import { Box, Button, Container, Grid, TextField } from "@mui/material";

function App() {
  const [prompt, setPrompt] = useState("");

  async function handleSubmit() {}

  return (
    <Container>
      <Box sx={{ width: "100%", mt: 4}}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              label="Your text"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
              value={prompt}
              onChange={(e)=>{
                setPrompt(e.target.value);
              }}
            />
            <Button 
              fullWidth
              disableElevation
              variant="contained"
              onClick={() =>handleSubmit()}>
                Submit
              </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
