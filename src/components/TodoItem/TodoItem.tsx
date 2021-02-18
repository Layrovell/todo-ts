import React, {useState} from "react";
import {ITodo} from "../../interfaces";

type TodoItemProps = {
    idx: string;
    todo: ITodo;
    // classes: string[];
    onDelete: (id: number) => void
    // void = no return value
    // ?... optional param (not required)
    changeCompleted: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, changeCompleted}) => {
    return (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="view">
                <input
                    // onChange={}
                    type="checkbox"
                    className="toggle"
                    checked={todo.completed}
                    onChange={() => changeCompleted(todo.id)}
                />
                <label>{todo.title}</label>
                <button
                    onClick={() => onDelete(todo.id)}
                    // onChange={() => changeCompleted}
                    type="button"
                    className="destroy"
                />
            </div>
            <input type="text" className="edit"/>
        </li>
    )
}
