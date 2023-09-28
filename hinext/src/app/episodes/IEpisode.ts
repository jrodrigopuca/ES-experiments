export interface IEpisode {
	airdate?: string;
	airstamp?: string;
	airtime?: string;
	id: number;
	image?: {
		medium?: string;
		original?: string;
	};
	name: string;
	rating?: {
		average?: number;
	};
	runtime?: number;
	summary?: string;
	type?: string;
	url?: string;
	_links?: {
		self?: {
			href?: string;
		};
		show?: {
			href?: string;
		};
	};
}
