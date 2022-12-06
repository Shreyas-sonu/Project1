import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./register.module.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { toast } from "react-toastify";

function Register() {
  let navigate = useNavigate();

  let [state, setState] = useState({
    email: "",
    mob: "",
    branch: "",
    organization: "",
    password: "",
    confirmPassword: "",
  });

  // destructuring state
  let { email, mob, branch, organization, password, confirmPassword } = state;

  let handleInput = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("password not matched");
      } else {
        window.sessionStorage.setItem("email", email);
        window.sessionStorage.setItem("mob", mob);
        window.sessionStorage.setItem("password", password);
        window.sessionStorage.setItem("organization", organization);
        // window.sessionStorage.setItem("branch", branch);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.code);
    }
  }

  return (
    <div className={Styles.formMainBlock}>
      <aside></aside>
      <Grid>
        <Card
          elevation={2}
          style={{
            maxWidth: 400,
            padding: "1px 5px",
            margin: "0 auto",
            background: "#ababab19",
            boxShadow: "3px 2px 8px 0px #2676b082",
          }}
          square
        >
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Register
            </Typography>
            {/* <Divider /> */}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    label="Enter Email"
                    variant="standard"
                    size="small"
                    fullWidth
                    color="secondary"
                    required
                    name="email"
                    value={email}
                    onInput={handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="tel"
                    label="Phone"
                    variant="standard"
                    size="small"
                    fullWidth
                    required
                    color="secondary"
                    value={mob}
                    name="mob"
                    onInput={handleInput}
                  />
                </Grid>
                <Grid xs={12} sm={12} item marginTop={0}>
                  <FormControl variant="standard" sx={{ maxWidth: 380 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Organization *
                    </InputLabel>
                    <Select
                      label="Organization"
                      name="organization"
                      value={organization}
                      onChange={handleInput}
                      required
                      style={{ width: "355px" }}
                    >
                      <MenuItem value="jspiders">J Spiders</MenuItem>
                      <MenuItem value="qspiders">Q Spiders</MenuItem>
                      <MenuItem value="pyspiders">Py Spiders</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <Grid xs={12} sm={12} item marginTop={0}>
                  <FormControl variant="standard" sx={{ minWidth: 410 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Branch
                    </InputLabel>
                    <Select
                      label="branch"
                      name="branch"
                      value={branch}
                      onChange={handleInput}
                    >
                      <MenuItem value="Ten">Ten</MenuItem>
                      <MenuItem value="Twenty">Twenty</MenuItem>
                      <MenuItem value="Thirty">Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    label="Enter Password"
                    variant="standard"
                    size="small"
                    fullWidth
                    required
                    color="secondary"
                    name="password"
                    value={password}
                    onInput={handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    label="Confirm Password"
                    variant="standard"
                    size="small"
                    fullWidth
                    required
                    color="secondary"
                    name="confirmPassword"
                    value={confirmPassword}
                    onInput={handleInput}
                  />
                </Grid>

                <Grid item xs={12} marginTop="25px">
                  <Button
                    className={Styles.submitBtn}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Register;
