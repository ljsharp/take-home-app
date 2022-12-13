const express = require( 'express' );
const cors = require( "cors" );
const app = express();

app.use( cors( {
	origin: "*",
} ) );

const routes = require( './routes' );

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.use( routes );

app.listen( 8000 );
