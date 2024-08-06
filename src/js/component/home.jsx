import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("");

	const [luces, setLuces] = useState([{ nombre: "rojo", valor: "red" }, { nombre: "amarillo", valor: "yellow" }, { nombre: "verde", valor: "green" }])

	return (

		<div className="container mt-5">
			<div className="container mt-5 bg-black" style={{ width: 200, borderRadius: '15%' }}>
				<div className="d-inline-block d-flex flex-column align-items-center">
					<button
						className={"d-inline-block rounded-circle m-3 " + (color == 'red' ? 'rojo' : '')}
						style={{ background: faro.valor, height: 80, width: 80 }}
						onClick={() => setColor("red")}
					></button>
					{
						luces.map(faro =>
							<button
								className={"d-inline-block bg-danger rounded-circle m-3 " + (color == faro.valor ? faro.nombre : '')}
								style={{ height: 80, width: 80 }}
								onClick={() => setColor(faro.valor)}
							></button>)
					}
				</div>
			</div>
			<buttom className="btn btn-success" onClick={() => {
				if (luces.length <= 3) {
					setLuces([...luces, { nombre: "morado", valor: "purple" }])
				}
			}}>Agregar luz</buttom>
		</div>
	);
}


export default Home;
