"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IEpisode } from "../IEpisode";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const [episode, setEpisode] = useState<IEpisode>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (id) {
			fetch(`http://api.tvmaze.com/episodes/${id}`)
				.then((res) => res.json())
				.then((data) => {
					setEpisode(data);
					setIsLoading(false);
				})
				.catch((e: any) => {
					console.log(e);
					setIsLoading(false);
					setError(true);
				});
		}
	}, [id]);

	if (error) return <p>Error: episodio no correcto</p>
	if (isLoading) return <p>Cargando...</p>;
	if (!episode) return <p>Episodio no encontrado</p>;

	return (
		<>
			<h1>{episode.name}</h1>
			<p>
				id: {episode.id}
				rating: {episode.rating?.average}
				{episode.image?.original && (
					<Image
						src={episode.image?.original}
						alt="episode img"
						width={250}
						height={140}
					/>
				)}
				{episode.summary}
			</p>
		</>
	);
}
