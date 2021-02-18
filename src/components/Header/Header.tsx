import React, { useState, useEffect } from 'react';
import {ITodo} from '../../interfaces';
import {strict} from "assert";

interface TodoHeaderProps {
    // onAdd(title: string, newTodo: ITodo): void
    onAdd: (title: string) => void;
    setTodos: (todos: ITodo[]) => void;
}

export const Header: React.FC<TodoHeaderProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.onAdd(title);
            setTitle('');
        }
    };

    // const addNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //
    //     const newTodo: ITodo = {
    //         id: Date.now(),
    //         title,
    //         completed: false,
    //     };

    // onAdd(newTodo);
        // setTitle('');
    // };

    return (
        <header className="header">
            <h1>todos</h1>

            <form>
                <input
                    value={title}
                    onChange={changeHandler}
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onKeyPress={keyPressHandler}
                />
            </form>
        </header>
    );
};
