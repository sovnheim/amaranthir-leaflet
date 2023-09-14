import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CRS } from 'leaflet';

import MapClickEvent from './components/MapClickEvent';

function App() {
	return (
		<div className="App">
			<MapContainer
				id="map"
				center={[-85, 85]}
				zoom={4}
				minZoom={0}
				maxZoom={6}
				scrollWheelZoom={true}
				crs={CRS.Simple}
			>
				{/* <MapLayers></MapLayers> */}

				<TileLayer
					attribution="sovnheim.io"
					url="/assets/barail/{z}/{x}/{y}.png"
				/>

				<MapClickEvent />
			</MapContainer>
		</div>
	);
}

export default App;
