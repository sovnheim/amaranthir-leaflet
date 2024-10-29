import { useState, useEffect } from 'react';
import { LatLng } from 'leaflet';
import {
	LayerGroup,
	LayersControl,
	Marker,
	Tooltip,
	useMapEvents,
} from 'react-leaflet';

import { LocationApiResponse } from '../types';
import { defaultIcon, displayLayers } from '../constants';

function Markers() {
	const [locationData, setLocationData] = useState({
		results: [],
	} as LocationApiResponse);

	const [zoomLevel, setZoomLevel] = useState(0);

	const map = useMapEvents({
		zoom() {
			setZoomLevel(map.getZoom());
		},
	});

	useEffect(() => {
		fetch('https://api.sheetson.com/v2/sheets/locations', {
			method: 'GET',
			headers: {
				'X-Spreadsheet-Id': '1ppDoTSdjjsRgKypnRwtAgRbmEgVJA52IAWiG8pqwuBg',
				Authorization:
					'Bearer 7HjZXmuhGDdJPY6YelSjjmGauFuEIyNInPIejUc4OcmtLcbl8egQeHnBZWs',
			},
		})
			.then((response) => response.json())
			.then((json: LocationApiResponse) => {
				setLocationData(json);
			})
			.catch(() => {
				throw new Error('Could not retrieve marker data');
			});
	}, []);

	// Prevent marker load before data is available
	if (locationData.results && locationData.results.length != 0) {
		return (
			<LayersControl>
				{displayLayers.map((currentLayer, layerKey) => {
					return (
						<LayersControl.Overlay
							key={layerKey}
							checked
							name={currentLayer.name}
						>
							<LayerGroup>
								{locationData.results.map((marker, locationKey) => {
									if (
										marker.lat != '' &&
										marker.lng != '' &&
										marker.layer === currentLayer.name &&
										zoomLevel <= currentLayer.maxZoom &&
										zoomLevel >= currentLayer.minZoom
									) {
										return (
											<Marker
												key={locationKey}
												position={new LatLng(marker.lat, marker.lng)}
												icon={defaultIcon}
											>
												<Tooltip key={marker.id}>{marker.name}</Tooltip>
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
