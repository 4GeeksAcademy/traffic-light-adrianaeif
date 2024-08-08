import React, { useState } from "react";

//create your first component
const Home = () => {

	const [color , setColor] = useState("");

	const [luces, setLuces] = useState([ {nombre:'rojo' , valor:'red'}, {nombre:'amarillo' , valor:'yellow'}, {nombre:'verde' , valor:'green'}]);

	const CambioColor = ()=>{
        const color = ["red", "yellow", "green", "purple"];
        const cambioColores = color[Math.floor(Math.random()*color.length)];
        setColor(cambioColores);
    }
   

	return (
		
		// semáforo
		<div className="container mt-5 "> 
			<div className="d-flex justify-content-center container mt-5 bg-black" style={{width: 200 , borderRadius: '15%'}}>

				<div className="d-inline-block d-flex flex-column align-item-center">
					{
						luces.map(faro=>
						<button className={" d-inline-block rounded-circle m-3 " + (color == faro.valor ? faro.nombre : '') }  
												style={{backgroundColor:faro.valor, height:80 , width: 80}}
												onClick={()=>{setColor(faro.valor)
						}}/>)
					}
				</div>
			</div>

			{/* botenes para agregar y cambiar luces */}

					<button className="btn btn-success" onClick={()=>{
						if (luces.length <= 3) {
							setLuces([...luces, {nombre:"morado", valor:"purple"}])
						}
					}}>Agregar luz</button>


					<button className="btn btn-warning m-3" onClick={() => setColor(CambioColor)}>Cambiar luz</button>
		</div>
	);
};

export default Home;