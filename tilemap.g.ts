// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`5000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000001010100000000000000000000000000010101010101000000000000000000000000000000000001010100000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000010101010000000000000000000000000000000000000000000000010100010000000000000000000000000101010101010100000001010101000000000000000000000000010101010000010101010000000000000000000000000000000000000000000000010101010000000000000000010101000000000000000000000000000101000000000000000000010101000000010101000000000000000000000000000000000000000000000000010101010101010000000000000000000000000000000000010101010000000000000000000000000000000101010100000000000000000000000101010000010101010000000000000000000000000300000000000000000000000000010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010000000101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
................................................................................
................................................................................
................................................................................
................................................................................
................................................................................
2222222.........................................................................
................................................................................
................................................................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "lava":
            case "tile2":return tile2;
            case "land":
            case "tile1":return tile1;
            case "portol":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.