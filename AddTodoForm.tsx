'use strict';
// AddTodoForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useTodoContext } from './TodoContext';

const AddTodoForm: React.FC = () => {
	const [text, setText] = useState('');
	const { addTodo } = useTodoContext();

	const handleAddTodo = () => {
		if (text.trim()) {
			addTodo({
				id: Math.random().toString(36).substr(2, 9),
				text: text.trim(),
			});
			setText('');
		}
	};

	return (
		<View>
			<TextInput
				placeholder='Enter todo'
				value={text}
				onChangeText={setText}
			/>
			<Button
				title='Add Todo'
				onPress={handleAddTodo}
			/>
		</View>
	);
};

export default AddTodoForm;
