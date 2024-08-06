import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("");

	return (

		<div className="container mt-5">
			<div className="container mt-5 bg-black" style={{ width: 200, borderRadius: '15%' }}>
				<div className="d-inline-block d-flex flex-column align-items-center">
					<button
						className={"d-inline-block bg-danger rounded-circle m-3 " + (color == 'red' ? 'rojo' : '')}
						style={{ height: 80, width: 80 }}
						onClick={() => setColor("red")}
					></button>
					<button
						className={"d-inline-block bg-warning rounded-circle m-3 " + (color == 'yellow' ? 'amarillo' : '')}
						style={{ height: 80, width: 80 }}
						onClick={() => setColor("yellow")}
					></button>
					<button
						className={"d-inline-block bg-success rounded-circle m-3 " + (color == 'green' ? 'verde' : '')}
						style={{ height: 80, width: 80 }}
						onClick={() => setColor("green")}
					></button>
				</div>
			</div>
		</div>
	);
}


export default Home;
