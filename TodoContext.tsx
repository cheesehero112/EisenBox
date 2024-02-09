// TodoContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
	id: string;
	text: string;
}

interface TodoContextType {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		const loadTodos = async () => {
			try {
				const storedTodos = await AsyncStorage.getItem('@todos');
				if (storedTodos !== null) {
					setTodos(JSON.parse(storedTodos));
				}
			} catch (error) {
				console.error('Error loading todos from AsyncStorage:', error);
			}
		};

		loadTodos();
	}, []);

	useEffect(() => {
		const saveTodos = async () => {
			try {
				await AsyncStorage.setItem('@todos', JSON.stringify(todos));
			} catch (error) {
				console.error('Error saving todos to AsyncStorage:', error);
			}
		};

		saveTodos();
	}, [todos]);

	const addTodo = (todo: Todo) => {
		setTodos([...todos, todo]);
	};

	const deleteTodo = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error('useTodoContext must be used within a TodoProvider');
	}
	return context;
};
