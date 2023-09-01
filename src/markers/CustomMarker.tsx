import { LatLng, Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker, Popup } from 'react-leaflet';

function CustomMarker() {
	const position = new LatLng(51.505, -0.09);

	//fixes behavioural issue on default icons
	const DefaultIcon = new Icon({
		iconUrl: icon,
		shadowUrl: iconShadow,
	});

	return (
		<Marker position={position} icon={DefaultIcon}>
			<Popup>
				A pretty CSS3 popup. <br /> Easily customizable.
			</Popup>
		</Marker>
	);
}

export default CustomMarker;
