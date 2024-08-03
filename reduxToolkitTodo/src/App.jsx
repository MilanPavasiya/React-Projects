import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
	return (
		<>
			<h1 className='text-vlack text-xl'>Redux Toolkit - Todo Manager</h1>
			<AddTodo />
			<Todos />
		</>
	);
}

export default App;
