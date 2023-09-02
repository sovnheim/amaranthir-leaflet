import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CRS, LatLngBounds } from 'leaflet';

import Markers from './components/Markers';
import MapClickEvent from './components/MapClickEvent';

function App() {
	const bounds = new LatLngBounds([0, 0], [-240, 240]);

	return (
		<div className="App">
			<MapContainer
				id="map"
				center={[-147, 146]}
				zoom={3}
				minZoom={0}
				maxZoom={5}
				scrollWheelZoom={true}
				crs={CRS.Simple}
				maxBounds={bounds}
			>
				<TileLayer
					attribution="sovnheim.io"
					url="/assets/tiles/{z}/{x}/{y}.png"
				/>

				<Markers />
				<MapClickEvent />
			</MapContainer>
		</div>
	);
}

export default App;
