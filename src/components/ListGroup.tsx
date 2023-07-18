import { MouseEvent } from "react";

interface Props {
	heading: string;
	items: string[];
	onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
	return (
		<>
			<h1>{heading}</h1>
			<ul className="list-group">
				{items.length === 0 && "No items found"}
				{items.map((item) => (
					<li
						key={item}
						className="list-group-item"
						onClick={() => {
              onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
