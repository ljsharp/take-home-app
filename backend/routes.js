const router = require( 'express' ).Router();
const data = require( "./data" );

router.get( '/get-data', ( req, res ) =>
{
	return res.status( 200 ).json( data );
} );

module.exports = router;
