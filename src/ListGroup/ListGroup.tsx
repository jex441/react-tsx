import styles from "./ListGroup.module.css";
import ToDo from "../interfaces/ToDo";

interface Props {
	heading: string;
	items: ToDo[];
	onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
	return (
		<>
			<h1>{heading}</h1>
			<ul className={styles["list-group"]}>
				{items.map((item) => (
					<li
						key={item.id}
						className={styles["list-group-item"]}
						onClick={() => {
							onSelectItem(item.title);
						}}
					>
						{item.title}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
