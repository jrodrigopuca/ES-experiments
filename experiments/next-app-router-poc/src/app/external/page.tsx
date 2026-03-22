'use client'

import { useSearchParams } from "next/navigation";

/*
    Esta página sirve para recibir contenido externo,
    por ejemplo al recibir http://localhost:3000/external?title=prueba%20queryparams
    mostrará el texto "prueba queryparams"
*/

const ExternalPage = () => {
	const searchParams = useSearchParams();
  const title = searchParams.get('title') ?? "-"
	return (
		<div>
			<h3>Esta página recibe contenido</h3>
			<p>Contenido recibido: {title}</p>
		</div>
	);
};

export default ExternalPage;
