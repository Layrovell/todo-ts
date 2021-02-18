import React, {useState, useEffect, useMemo} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {TodoList} from "./components/TodoList/TodoList";
import {Footer} from "./components/Footer/Footer";

interface ITodo {
    title: string,
    id: number,
    completed: boolean,
}

// rework to 'ENUM'
const filters = {
    all: 'all',
    active: 'active',
    completed: 'completed',
};

export const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    // TUPLE - useState return Tulip of the 2 elements (1 - variable, 2 - func for update variable)
    const [isFooterVisible, setIsFooterVisible] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>(filters.all);

    const filteredByStatus = () => {
        switch (filter) {
            case filters.active:
                return todos.filter(todo => !todo.completed);
            case filters.completed:
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    const filteredTodos = filteredByStatus();

    useEffect(() => {
        const saveTodos = localStorage.getItem('todos');

        if (saveTodos) {
            setTodos(JSON.parse(saveTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

        if (todos.length > 0) {
            setIsFooterVisible(true);
        } else {
            setIsFooterVisible(false);
        }

        setIsFooterVisible(todos.length > 0);
    }, [todos]);

    //void - no return value
    const addHandler = (title: string): void => {
        console.log('adddd');

        const newTodo: ITodo = {
            id: Date.now(),
            title,
            completed: false,
        };

        if (todos.some(todo => (todo.title === newTodo.title))) {
            return;
        }

        if (newTodo.title) {
            setTodos(prev => [newTodo, ...prev]);
        }
    };

    const deleteTodo = (id: number) => {
        const newTodos = [...todos].filter(todo => todo.id !== id);

        setTodos(newTodos);
    };

    const changeCompleted = (id: number) => {
        const newTodoList = [...todos].map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }

            return todo;
        });

        setTodos(newTodoList);
    };

    const leftTodos = useMemo(() => {
        return [...todos].filter(t => !t.completed);
    }, [todos]);

    return (
        <section className="todoapp">

            <Header
                setTodos={setTodos}
                onAdd={addHandler}
            />

            <TodoList
                onDelete={deleteTodo}
                todos={filteredTodos}
                changeCompleted={changeCompleted}
            />

            {isFooterVisible && (
                <Footer
                    leftTodos={leftTodos}
                    filter={filter}
                    setFilter={setFilter}
                    filters={filters}
                    setTodos={setTodos}
                />
            )}

        </section>
    );
}

export default App;
