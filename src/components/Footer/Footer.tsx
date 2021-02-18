import React from "react";
import {Filter} from "./Filter/Filter";
import {ITodo} from "../../interfaces";

type FooterType = {
    leftTodos: ITodo[];
    filter: string;
    setFilter: (filter: string) => void;
    filters: any;
    setTodos: (todos: ITodo[]) => void;
}

export const Footer: React.FC<FooterType> = ({leftTodos, filter, setFilter, filters, setTodos}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                {leftTodos.length}
                {leftTodos.length > 1 || leftTodos.length === 0
                    ? ' todos left'
                    : ' todo left'
                }
            </span>

            <Filter
                filter={filter}
                setFilter={setFilter}
                filters={filters}
            />

            <button
                onClick={() => setTodos(leftTodos)}
                type="button"
                className="clear-completed"
            >
                Clear completed
            </button>
        </footer>
    );
};
