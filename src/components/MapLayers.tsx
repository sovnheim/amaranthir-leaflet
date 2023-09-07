import { ImageOverlay } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import Markers from './Markers';

function MapLayers() {
	// TODO: Pass LatLngBounds with the properties of the element
	const bounds = new LatLngBounds([0, 0], [-240, 240]);

	const layersControlOptions = ['Towns', 'Capitals', 'Countries'];

	return (
		<div>
			<ImageOverlay
				url="/assets/barail_labels.png"
				bounds={bounds}
			></ImageOverlay>
			<Markers />
		</div>
	);
}

export default MapLayers;
