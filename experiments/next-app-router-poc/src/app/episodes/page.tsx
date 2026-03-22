"use client";

import { useState, useEffect } from "react";
import { IEpisode } from "./IEpisode";
import Episode from "./episode";

const EpisodesPage = () => {
	const [episodes, setEpisodes] = useState<IEpisode[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("http://api.tvmaze.com/shows/1871/episodes")
			.then((res) => res.json())
			.then((data) => {
				setEpisodes(data);
				setIsLoading(false);
			})
			.catch((e: any) => {
				console.log(e);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) return <p>Cargando...</p>;
	if (!episodes) return <p>Episodios no encontrados</p>;

	return (
		<>
			{episodes.map((e) => (
				<Episode key={e.id} {...e} />
			))}
		</>
	);
};

export default EpisodesPage;
