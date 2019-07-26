import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";

const setBg = {
  margin: "0px",
  background:
    "linear-gradient(134.74deg, #DD8975 0%, #D65486 17.34%, #B14093 41.63%, #9C3E99 66.35%, #503CAD 100%)",
  color: "#ffffff"
};

const useStyles = makeStyles((theme, Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  })
);

const SubmitTodo = ({ onInputTodoChange, text, onClickTodo }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <TextField
          id="outlined-name"
          label="Write Something Here!"
          value={text}
          className={classes.textField}
          onChange={onInputTodoChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </Container>
      <Container maxWidth="md">
        <Button
          style={setBg}
          fullWidth
          variant="contained"
          className={classes.button}
          onClick={onClickTodo}
        >
          Add To do !
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default SubmitTodo;
