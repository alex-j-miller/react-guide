import { useState } from "react";

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(initialName);

	function handleClick() {
		setIsEditing((editing) => !editing);
		if (isEditing) {
			onChangeName(symbol, name);
		}
	}

	function handleChange(event) {
		setName(event.target.value);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						required
						defaultValue={name}
						onChange={handleChange}
					/>
				) : (
					<span className="player-name">{name}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
