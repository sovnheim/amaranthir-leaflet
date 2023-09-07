export type Location = {
	id: number;
	name: string;
	lat: number;
	lng: number;
	layer: string;
	description: string;
};

export type LocationApiResponse = {
	locations: Location[];
};
