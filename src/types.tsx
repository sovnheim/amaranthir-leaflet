export type Location = {
	id: number;
	name: string;
	lat: number | '';
	lng: number | '';
	layer: string;
	description: string;
	rowIndex: number;
};

export type LocationApiResponse = {
	results: Location[];
	hasNextPage?: boolean;
};

export type DisplayLayer = {
	name: string;
	minZoom: number;
	maxZoom: number;
};

export type DisplayLayers = DisplayLayer[];
