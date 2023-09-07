import { useState, useEffect } from 'react';
import { LatLng, Icon } from 'leaflet';
import { LayerGroup, LayersControl, Marker, Tooltip } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { LocationApiResponse } from '../types';

function Markers() {
	const DefaultIcon = new Icon({
		iconUrl: icon,
		shadowUrl: iconShadow,
		iconAnchor: [12, 40],
	});

	const [locationData, setLocationData] = useState({
		locations: [],
	} as LocationApiResponse);

	const [layers, setLayers] = useState([] as string[]);

	useEffect(() => {
		fetch(
			'https://api.sheety.co/840a078c9e89e6bc339c83b398bf8317/toaLocationsDb/locations'
		)
			.then((response) => response.json())
			.then((json: LocationApiResponse) => {
				setLocationData(json);
				// TODO define layers from response from the API
				setLayers(['Towns', 'Capitals']);
			})
			.catch(() => {
				throw new Error('Could not retrieve marker data');
			});
	}, []);

	if (locationData.locations.length != 0) {
		return (
			<LayersControl position="topright">
				{layers.map((currentLayer, key) => {
					return (
						<LayersControl.Overlay key={key} checked name={currentLayer}>
							<LayerGroup>
								{locationData.locations.map((location) => {
									if (
										location.layer === currentLayer &&
										location.lat &&
										location.lng
									) {
										return (
											<Marker
												key={location.id}
												position={new LatLng(location.lat, location.lng)}
												icon={DefaultIcon}
											>
												<Tooltip key={location.id}>{location.name}</Tooltip>
											</Marker>
										);
									}
								})}
							</LayerGroup>
						</LayersControl.Overlay>
					);
				})}
			</LayersControl>
		);
	} else {
		return <div></div>;
	}
}

export default Markers;
