import React from "react";
import Styles from "./register.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const RegForm = () => {
  return (
    <aside className={Styles.formBlock}>
      <h2>Register</h2>
      <form action="">
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Enter Email"
            variant="standard"
            color="secondary"
          />
        </div>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Contact Number"
            variant="standard"
            color="secondary"
          />
        </div>
        <FormControl
          className="selectBlock"
          variant="standard"
          color="secondary"
          sx={{ m: 1, width: 350, textAlign: "left", margin: "0px" }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Organization
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Organization"
          >
            <MenuItem value="jspiders">J Spiders</MenuItem>
            <MenuItem value="qspiders">Q Spiders</MenuItem>
            <MenuItem value="pyspiders">Py Spiders</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          color="secondary"
          sx={{ m: 0, width: 350, textAlign: "left", margin: "0px" }}
        >
          <InputLabel id="demo-simple-select-standard-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Organization"
          >
            <MenuItem value="jspiders">J Spiders</MenuItem>
            <MenuItem value="qspiders">Q Spiders</MenuItem>
            <MenuItem value="pyspiders">Py Spiders</MenuItem>
          </Select>
        </FormControl>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Password"
            color="secondary"
            variant="standard"
          />
        </div>
        <div className="form-group">
          <TextField
            id="input-with-sx"
            label="Confirm Password"
            variant="standard"
            color="secondary"
          />
        </div>
        <div className="form-group">
          <Button variant="contained">Submit</Button>
        </div>
      </form>
    </aside>
  );
};

export default RegForm;
