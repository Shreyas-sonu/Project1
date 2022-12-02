import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import Style from "@mui/core/style";

const Login = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({ email: "", password: "" });
  let { email, password } = state;

  let regEmail = window.sessionStorage.getItem("email");
  let regPassword = window.sessionStorage.getItem("password");

  let handleInput = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    // e.preventDefault();
    try {
      if (email !== regEmail) {
        alert("wrong email");
      } else if (password !== regPassword) {
        alert("wrong password");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("error");
    }
  };
  return (
    <div>
      <section>
        <article id="login_Block">
          <div id="main_Block">
            <aside id="welcome_block">
              <h1>Welcome Back</h1>
              <div>
                <TextField
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  onInput={e => {}}
                  name="email"
                  value={email}
                  onInput={handleInput}
                />
              </div>
              <div>
                <TextField
                  id="input-with-sx"
                  label="Password"
                  variant="standard"
                  name="password"
                  value={password}
                  onInput={handleInput}
                />
              </div>
              <a href="" id="button">
                <Button disabled>Forgot Password</Button>
              </a>
              <a id="sign">Sign In</a>
            </aside>
            <aside id="signup_part">
              <div id="signup_back">
                <h3>New here? </h3>
                <h3>Sign Up and discover great</h3>
                <h3>amount of new opportunities</h3>

                <Link to="/register">
                  <Button
                    variant="outlined"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Login;

// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Login() {
//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: "70vh" }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: "url(https://source.unsplash.com/random)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: t =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box
//               component="form"
//               noValidate
//               onSubmit={handleSubmit}
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
