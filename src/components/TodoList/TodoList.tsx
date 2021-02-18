import React from "react";
import {ITodo} from '../../interfaces';
import {TodoItem} from '../TodoItem/TodoItem';

type TodoListProps = {
    todos: ITodo[];
    onDelete: (id: number) => void;
    changeCompleted: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({onDelete, todos, changeCompleted}) => {
    return (
        <section className="main">
            <input type="checkbox" id="toggle-all" className="toggle-all" />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
                {todos && todos.map((todo, idx) => {
                    return (
                        <TodoItem
                            idx={idx.toString()}
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            changeCompleted={changeCompleted}
                        />
                    )
                })}
            </ul>

        </section>
    );
};
