import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App: React.FC = () => {
	return (
		<View style={styles.container}>
			<TodoProvider>
				<TodoList />
				<AddTodoForm />
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
});

export default App;
