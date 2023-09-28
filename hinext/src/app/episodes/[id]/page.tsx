"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IEpisode } from "../IEpisode";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;
  const [episode, setEpisode] = useState<IEpisode>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (id) {
			fetch(`http://api.tvmaze.com/episodes/${id}`)
				.then((res) => res.json())
				.then((data) => {
					setEpisode(data);
					setIsLoading(false);
				});
		}
	}, [id]);

	if (isLoading) return <p>Cargando...</p>;
	if (!episode) return <p>Episodio no encontrados</p>;

	return (
    <>
      <h1>{episode.name}</h1>
      <p>
      id: {episode.id}
      rating: {episode.rating?.average}
      {episode.image?.original && <Image src={episode.image?.original} alt="episode img" width={250} height={140} />}
			{episode.summary}
      </p>
    </>
  )
}
