import {useEffect, useState} from "react";

import {userService} from "../../services/userService";
import {Todo} from "./Todo";


const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        userService.getAllTodos().then(({data}) => setTodos(data));
    }, []);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};