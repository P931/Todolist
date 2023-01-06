import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid, Input } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Todo from "./Todo";

const Todolist = () => {
  // get alll todo in our localstorage in after refresh alos using the getItem method.............
  const getItem = () => {
    let todo = localStorage.getItem("todos");
    console.log(todo);

    if (todo) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  };

  const object = [
    { id: 0, name: "one", done: false },
    { id: 1, name: "two", done: false },
    { id: 2, name: "three", done: true },
    { id: 3, name: "four", done: true },
  ];

  const [inptodo, setInptodo] = useState(""); // array

  // const [stortodo, setStortodo] = useState([]); // no use
  const [stortodo, setStortodo] = useState(getItem); // no use
  // const [stortodo, setStortodo] = useState(object);

  const handlist = (event) => {
    setInptodo(event.target.value);
  };

  const handleAdd = () => {
    if (inptodo !== "") {
      setStortodo((prevalue) => {
        return [
          ...prevalue,
          {
            // id: Math.floor(Math.random() * 9999939494949499),
            id: Math.floor(Math.random() * 99),
            name: inptodo,
            done: false,
          },
        ];
      });
    }

    // setStortodo((prevalue) => {
    //   return [...prevalue, inptodo];
    // });
    console.log(inptodo);
    setInptodo("");
  };

  const handleDelete = (id) => {
    console.log("delete");

    setStortodo((prevalue) => {
      return prevalue.filter((arrele, index) => {
        return index !== id;
      });
    });
  };

  const handleUpdate = (todo, index) => {
    // console.log("todo", todo);
    console.log(todo);

    // if (todo.done) {
    //   setStortodo((val) => {
    //     let todos = [...val];
    //     todos[index] = todo;
    //     return todos;
    //   });
    // }

    setStortodo((val) => {
      let todos = [...val];
      todos[index] = {
        ...todos[index],
        name: todo,
      };
      return todos;
    });
  };

  const handleCheck = (todo, index, done) => {
    console.log("checked this todos = ", todo);

    setStortodo((todoCopy) => {
      return todoCopy.map((todo, i) => {
        if (index === i) {
          return { ...todo, done: !done };
        } else {
          return todo;
        }
      });
    });
  };

  //  set or  add all todo in our localstorage ..........
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(stortodo));
  }, [stortodo]);

  return (
    <>
      <Box className="box">
        <Container maaxWith="sm">
          <Container maxWidth="sm" className="contai">
            <div className="frm">
              <div className="fom">
                <div className="header">
                  <Grid className="hed">TODO APP</Grid>
                </div>
                <div className="intp">
                  <Input
                    type="text"
                    placeholder="Enter your Items"
                    className="int"
                    value={inptodo}
                    onChange={handlist}
                  />
                </div>

                <div className="butt">
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={handleAdd}
                  >
                    ADD
                  </Button>
                </div>

                <div className="item">
                  <div className="ite">
                    {stortodo.map((todo, id) => (
                      <Todo
                        key={id}
                        todo={todo}
                        index={id}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        handleCheck={handleCheck}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default Todolist;
