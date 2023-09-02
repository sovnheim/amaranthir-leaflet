import { useState, useEffect } from 'react';
import { LatLng, Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

type Location = {
	id: number;
	name: string;
	lat: number;
	lng: number;
	layer: string[];
	description: string;
};

type LocationApiResponse = {
	locations: Location[];
};

function Markers() {
	const DefaultIcon = new Icon({
		iconUrl: icon,
		shadowUrl: iconShadow,
		iconAnchor: [12, 40],
	});

	const [markerData, setMarkerData] = useState({
		locations: [],
	} as LocationApiResponse);

	useEffect(() => {
		fetch(
			'https://api.sheety.co/840a078c9e89e6bc339c83b398bf8317/toaLocationsDb/locations'
		)
			.then((response) => response.json())
			.then((json: LocationApiResponse) => {
				setMarkerData(json);
			})
			.catch(() => {
				throw new Error('Could not retrieve marker data');
			});
	}, []);

	if (markerData.locations.length == 0) {
		return <div></div>;
	} else {
		return (
			<div>
				{markerData.locations.map((location) => {
					if (location.lat && location.lng) {
						return (
							<Marker
								key={location.id}
								position={new LatLng(location.lat, location.lng)}
								icon={DefaultIcon}
							>
								<Popup>{location.name}</Popup>
							</Marker>
						);
					}
				})}
			</div>
		);
	}
}

export default Markers;
