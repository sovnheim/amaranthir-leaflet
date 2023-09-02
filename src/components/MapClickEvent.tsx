import { useMap, useMapEvents } from 'react-leaflet';

function MapClickEvent() {
	const map = useMap();

	useMapEvents({
		click(event) {
			console.log(
				'lat',
				event.latlng.lat,
				'lng',
				event.latlng.lng,
				'zoom',
				map.getZoom()
			);
		},
	});
	return <div></div>;
}

export default MapClickEvent;
