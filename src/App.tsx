import ListGroup from "./components/ListGroup";

function App() {
	let items = [
		"New York",
		"LA",
		"Savanah",
		"Fort Worth",
		"Bend",
		"Providence",
		"Mobile",
	];
	const onSelectItem = (item: string) => {
		console.log(item);
	};
	return (
		<ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
	);
}

export default App;
