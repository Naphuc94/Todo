import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import NavTodo from "../components/navtodo";
import SubmitTodo from "../components/submittodo";
import ShowTodo from "../components/showtodo";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {" team."}
    </Typography>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todos: []
      // todos: [{ label: 'test', done: false }]
    };

    this.addTodo = this.addTodo.bind(this);
    this.onChangeInputTodo = this.onChangeInputTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.completeDel = this.completeDel.bind(this);
  }

  addTodo() {
    const { todos, text } = this.state;

    if (text.trim() !== "") {
      todos.push({ label: text, done: false });
      this.setState({ text: "", todos });
    }
  }

  onChangeInputTodo(event) {
    this.setState({ text: event.target.value });
  }

  completeDel(index) {
    const { todos } = this.state;
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  completeTodo(index) {
    const { todos } = this.state;
    // const newdone = todos[index].done ? false : true
    todos[index].done = !todos[index].done;

    this.setState({
      todos
    });
  }

  render() {
    const { text, todos } = this.state;
    return (
      <React.Fragment>
        <NavTodo />
        <SubmitTodo
          onInputTodoChange={this.onChangeInputTodo}
          text={text}
          onClickTodo={this.addTodo}
        />
        <Container maxWidth="md">
          <ShowTodo
            todos={todos}
            completeTodo={this.completeTodo}
            completeDel={this.completeDel}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default Todo;
