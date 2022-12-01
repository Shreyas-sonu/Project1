import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const Trail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email, "Password: ", password);
  }

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit}>
          <TextField value={email} onInput={e => setEmail(e.target.value)} />
          <TextField
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
          <Typography />
          <Button type="submit">Login</Button>
        </form>
      </Paper>
          <Grid xs="6">
              
      </Grid>
      <Grid xs="6"></Grid>
    </div>
  );
};
export default Trail;
