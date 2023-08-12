/*global chrome*/
import logo from './logo.svg';
import React, {useState} from "react";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Configuration, OpenAIApi } from "openai";
import './App.css';




import { Box, Button, Container, Grid, TextField, Paper } from "@mui/material";
window.process = { cwd: () => '' };

function App() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")
  const { Configuration, OpenAIApi } = require("openai")
  require('dotenv').config()


  const configuration = new Configuration({
    organization: "org-QQ4rRjIo3gFIX874gBfToYKR",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  }); 
  

  delete configuration.baseOptions.headers['User-Agent'];

  const openai = new OpenAIApi(configuration)
  async function handleSubmit() {
    setIsLoading(true);

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "say the following as a black man" + prompt,
        max_tokens: 100,
        temperature: 1

      });
      setResponse(completion.data.choices[0].text);
      setIsLoading(false);
    } catch (e) {
      alert("Error: ", e);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Box sx={{ width: "100%", mt: 4}}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              label="Message"
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
              disabled={isLoading}
              onClick={() => handleSubmit()}
              startIcon={
                isLoading && (
                  <AutorenewIcon
                    sx={{
                      animation: "spin 2s linear infinite",
                        "@keyframes spin": {
                          "0%": {
                            transform: "rotate(360deg)",
                          },
                          "100%": {
                            transform: "rotate(0deg)",
                          },
                        },
                     }}
                  />
                )
               }
              >
              Send
            </Button>
            <Grid item xs = {12} sx = {{mt:3}}>
              <Paper sx = {{p:3}}>{response}</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
