const express = require( "express" );

const router = express.Router();

router.get( "", async function ( req, res ) {
    return res.render( "profile/profile.ejs" );
} );


module.exports = router;