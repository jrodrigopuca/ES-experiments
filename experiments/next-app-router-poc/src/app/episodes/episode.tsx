import Image from "next/image";
import { IEpisode } from "./IEpisode";

const Episode = (e: IEpisode) => {
	return (
		<>
			<h3>{e.name}</h3>
			{e.image?.medium && <Image src={e.image?.medium} alt="episode img" width={250} height={140} />}
			{e.summary}
			<a href={`episodes/${e.id}`}>Ver más</a>
		</>
	);
};

export default Episode;
