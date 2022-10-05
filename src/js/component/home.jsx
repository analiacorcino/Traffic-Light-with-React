
import React, {useState} from "react";
import '../../styles/index.css';

//CREAR COMPONENTE ! 

const Home = () => {
	const [selected1, setSelected1] = useState("sombra");
	const [selected2, setSelected2] = useState("sombra");
	const [selected3, setSelected3] = useState("sombra");

	// Si es apretadop el color rojo
	function PrendeRojo() {
		if (selected1 === "sombra") {
			setSelected1("brillo")
			setSelected2("sombra")
			setSelected3("sombra")
		};
	};

	// Si es apretado el amarillo
	function PrendeAmarillo() {
		if (selected2 === "sombra") {
			setSelected1("sombra")
			setSelected2("brillo")
			setSelected3("sombra")
		};
		};

	// Si es apretado el verde
	function PrendeVerde() {
		if (selected3 === "sombra") {
			setSelected1("sombra")
			setSelected2("sombra")
			setSelected3("brillo")
		};
	};
	return (
		<div className="container w-25 p-5 bg-dark d-flex justify-content-center">
			<div>
				<div className={"m-3 caja rounded-circle bg-danger "+selected1} onClick={PrendeRojo}></div>
				<div className={"m-3 caja rounded-circle bg-warning "+selected2} onClick={PrendeAmarillo}></div>
				<div className={"m-3 caja rounded-circle bg-success "+selected3} onClick={PrendeVerde}></div>
			</div>
		</div>
	);
};

export default Home;
