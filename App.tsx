import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App: React.FC = () => {
	return (
		<View style={styles.container}>
			<TodoProvider>
				<View style={styles.todoGrid}>
					<View style={styles.do}>
						<TodoList />
						<AddTodoForm />
					</View>
					<View style={styles.decide}>
						<TodoList />
						<AddTodoForm />
					</View>
				</View>
				<View style={styles.todoGrid}>
					<View style={styles.delegate}>
						<TodoList />
						<AddTodoForm />
					</View>
					<View style={styles.delete}>
						<TodoList />
						<AddTodoForm />
					</View>
				</View>
			</TodoProvider>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#D9D9D9',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	todoGrid: {
		flexDirection: 'row',
	},
	do: {
		flex: 2,
		height: 316,
		width: 188,
		borderRadius: 10,
		backgroundColor: 'rgba(245, 72, 127, 0.9)',
	},
	decide: {
		flex: 2,
		height: 316,
		width: 188,
		borderRadius: 10,
		backgroundColor: 'rgba(245, 72, 127, 0.7)',
	},
	delegate: {
		flex: 2,
		height: 316,
		width: 188,
		borderRadius: 10,
		backgroundColor: 'rgba(245, 72, 127, 0.25)',
	},
	delete: {
		flex: 2,
		height: 316,
		width: 188,
		borderRadius: 10,
		backgroundColor: 'rgba(245, 72, 127, 0.45)',
	},
});

export default App;
