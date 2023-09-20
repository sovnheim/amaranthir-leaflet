import { useMap, useMapEvents } from 'react-leaflet';

function MapClickEvent() {
	const map = useMap();

	useMapEvents({
		click(event) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			navigator.clipboard
				.writeText(`${event.latlng.lat}	${event.latlng.lng}`)
				.then(() => {
					// eslint-disable-next-line no-console
					console.log(
						'lat',
						event.latlng.lat,
						'lng',
						event.latlng.lng,
						'zoom',
						map.getZoom()
					);
				});
		},
	});
	return <div></div>;
}

export default MapClickEvent;
