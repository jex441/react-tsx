import styles from "./ListGroup.module.css";
import ToDo from "../interfaces/ToDo";

interface Props {
	heading: string;
	items: ToDo[];
	onSelectItem: (item: number) => void;
}
function ListGroup({ heading, items, onSelectItem }: Props) {
	console.log("render");

	return (
		<>
			<h1>{heading}</h1>
			<ul className={styles["list-group"]}>
				{items.map((item, index) => {
					if (index >= 5) {
						return;
					}
					return (
						<li
							key={item.id}
							className={styles["list-group-item"]}
							onClick={() => {
								onSelectItem(item.id);
							}}
						>
							<span>{item.title}</span>
							<span onClick={() => {}}>{item.completed ? "x" : "[]"}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ListGroup;
