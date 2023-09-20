import { Icon } from 'leaflet';
import { DisplayLayers } from './types';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const defaultIcon = new Icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconAnchor: [12, 40],
});

export const displayLayers: DisplayLayers = [
	{
		name: 'Towns',
		minZoom: 5,
		maxZoom: 6,
	},
	{
		name: 'Capitals',
		minZoom: 0,
		maxZoom: 6,
	},
];
