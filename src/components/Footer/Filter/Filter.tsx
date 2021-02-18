import React from 'react';
import { NavLink } from 'react-router-dom';

type FilterProps = {
    setFilter: (filter: string) => void;
    // filters: {all: string, active: string, completed: string};
    filters: {[key: string]: string};
    filter: string;
}

export const Filter: React.FC<FilterProps> = ({setFilter, filters}) => {
    return (
        <ul className="filters">
            <li>
                <a
                    href="/"
                    // className={todo.completed ? 'basic selected' : 'basic'}
                    onClick={() => setFilter(filters.all)}
                >
                    All
                </a>
            </li>

            <li>
                <a
                    href="/active"
                    className="basic"
                    onClick={() => setFilter(filters.active)}
                >
                    Active
                </a>
            </li>

            <NavLink
                to="/completed"
                className="basic"
                onClick={() => setFilter(filters.completed)}
            >
                Completed
            </NavLink>
        </ul>
    );
};
