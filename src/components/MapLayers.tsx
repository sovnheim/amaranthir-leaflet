import { ImageOverlay, useMapEvents } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';
import { useState } from 'react';

function MapLayers() {
	const bounds = new LatLngBounds([0, 0], [-240, 240]);

	const [zoomLevel, setZoomLevel] = useState(0);

	const map = useMapEvents({
		zoom() {
			setZoomLevel(map.getZoom());
		},
	});

	return (
		<div>
			{zoomLevel <= 4 ? (
				<ImageOverlay
					url="/assets/barail_labels.png"
					bounds={bounds}
				></ImageOverlay>
			) : null}
		</div>
	);
}

export default MapLayers;
