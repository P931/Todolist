import { Checkbox, Paper } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { Input } from "@mui/material";

const Todo = (props) => {
  const { todo, index, handleDelete, handleUpdate, handleCheck } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [updatodo, setUpdatodo] = useState(todo.name);

  return (
    <Container maxWidth="sm">
      <Paper className="todlist">
        <Checkbox
          onClick={() => handleCheck(todo, index, todo.done)}
          checkTodo={todo.done}
          defaultChecked={todo.done}
          // checked={todo.done}
        ></Checkbox>

        {isEditable ? (
          <>
            <Input
              type="text"
              // value={todo.done ? todo.name : updatodo}
              value={updatodo}
              onChange={(e) => setUpdatodo(e.target.value)}
              // checked={todo.done}
              // checkTodo={todo.done}
            />
            <Button
              size="small"
              onClick={() => {
                handleUpdate(updatodo, index);
                setIsEditable(false);
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            {/* <div className="list">{todo}</div> */}
            <div className="list">{todo.name}</div>
            <EditIcon
              className="edit"
              onClick={() => setIsEditable(!isEditable)}
            >
              <EditIcon />
            </EditIcon>
            <DeleteIcon
              className="clear"
              onClick={() => handleDelete(index)}
            ></DeleteIcon>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Todo;
