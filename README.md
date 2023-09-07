# Interactive map of Amaranthir

- Project bootstrapped with create-react-app  
- Linting done using eslint and prettier  
- Map integration done using leafletJS and react-leaflet
- Map art done with wonderdraft
- Map tiled using  [gdal2tiles-leaflet](https://github.com/commenthol/gdal2tiles-leaflet/)
- Backend using Sheety

## Running the app 
`yarn start`


## To Do
- Copy location coordinates when clicking on a place in the map: It displays a snackbar that auto-disappears after N seconds, with a button that allows copying to clipboard 
- Hide marker layers based on their type: When zoomed above 3, the layer category "countries" is no longer visible 
- Open a side panel providing detailed information on locations clicked
- Add a layer that displays the main names of the countries 
- drawing paths and exporting them
