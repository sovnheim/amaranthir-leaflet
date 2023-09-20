import { useMapEvents } from 'react-leaflet';

function MapClickEvent() {
	useMapEvents({
		click(event) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			navigator.clipboard
				.writeText(`${event.latlng.lat}	${event.latlng.lng}`)
				.then(() => {});
		},
	});
	return <div></div>;
}

export default MapClickEvent;
