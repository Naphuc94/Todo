import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import { CardHeader } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const strikethrough = { textDecoration: "line-through" };

const mgTop = {
  marginTop: "30px"
};

const mgBottom = {
  marginBottom: "10px"
};

const setIcon = {
  background:
    "linear-gradient(134.74deg, #DD8975 0%, #D65486 17.34%, #B14093 41.63%, #9C3E99 66.35%, #503CAD 100%)"
};

function HomeIcon(props, SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const ShowTodo = ({ todos, completeTodo, completeDel }) => {
  return (
    <div style={mgTop}>
      {todos.map((todo, index) => {
        return (
          <Card style={mgBottom} key={index}>
            <CardHeader
              // style={todo.done ? strikethrough : null}
              action={
                <Fragment>
                  <IconButton
                    aria-label="Favorite"
                    onClick={() => completeTodo(index)}
                    style={todo.done ? setIcon : null}
                  >
                    <HomeIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => completeDel(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Fragment>
              }
              title={todo.label}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default ShowTodo;
