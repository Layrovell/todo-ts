export interface TodoFormProps {
    onAdd(newTodo: any[]): void
}

// interface TodoFormProps {
//     // onAdd(title: string, newTodo: ITodo): void
//     onAdd: (title: string) => void;
//     setTodos: (todos: ITodo[]) => void;
// }


export interface ITodo {
    title: string,
    id: number,
    completed: boolean,
}

export interface TodoItemProps {
    todo: ITodo;
    // classes: string[];
    onDelete: (id: number) => void
    // void = no return value
    // ?... optional param (not required)
    idx: string;
    changeCompleted: (id: number) => void;
}

export interface TodoListProps {
    todos: ITodo[];
    onDelete: (id: number) => void;
    changeCompleted: (id: number) => void;
}

export interface FooterType {
    leftTodos: ITodo[];
    filter: string;
    setFilter: (filter: string) => void;
    filters: any;
    setTodos: (todos: ITodo[]) => void;
}

export interface FilterProps {
    setFilter: (filter: string) => void;
    filters: any;
    filter: string;
}
