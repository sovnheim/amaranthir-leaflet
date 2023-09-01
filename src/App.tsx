import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { CRS } from 'leaflet';

function App() {
	return (
		<div className="App">
			<MapContainer
				id="map"
				center={[0, 0]}
				zoom={2}
				minZoom={2}
				scrollWheelZoom={true}
				crs={CRS.Simple}
			>
				<TileLayer
					attribution="sovnheim.io"
					url="/assets/tiles/{z}/{x}/{y}.png"
				/>
			</MapContainer>
		</div>
	);
}

export default App;
