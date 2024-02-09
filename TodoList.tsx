'use strict';
// TodoList.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTodoContext } from './TodoContext';

const TodoList: React.FC = () => {
	const { todos, deleteTodo } = useTodoContext();

	return (
		<View>
			{todos.map((todo) => (
				<View key={todo.id}>
					<Text>{todo.text}</Text>
					<Button
						title='Delete'
						onPress={() => deleteTodo(todo.id)}
					/>
				</View>
			))}
		</View>
	);
};

export default TodoList;
