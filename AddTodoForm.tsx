'use strict';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
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
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={styles.section}>
					<TextInput
						placeholder='Enter todo'
						value={text}
						onChangeText={setText}
					/>
				</View>
				<View style={styles.separator}></View>
			</View>
			<View style={styles.row}>
				<View style={styles.section}>
					<Button
						title='Add Todo'
						onPress={handleAddTodo}
					/>
				</View>
				<View style={styles.separator}></View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	section: {
		flex: 1,
		paddingHorizontal: 10,
	},
	separator: {
		width: 1,
		height: '100%',
		backgroundColor: 'black',
	},
});

export default AddTodoForm;
