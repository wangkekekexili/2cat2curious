namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -170
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (me, other) {
    info.changeScoreBy(1)
    other.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -170
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite, location) {
    game.over(false, effects.melt)
})
let coin: Sprite = null
let cat: Sprite = null
scene.setBackgroundColor(9)
cat = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e b f b . 
    f d d f d d f d d f f d f . 
    f b d d b b d d 2 b f d f . 
    . f 2 2 2 2 2 2 d b d b f . 
    . f d d d d d d d f f f . . 
    . f d b d f f f d f . . . . 
    . . f f f f . . f f . . . . 
    `, SpriteKind.Player)
cat.ay = 350
controller.moveSprite(cat, 100, 0)
scene.cameraFollowSprite(cat)
tiles.setTilemap(tilemap`level1`)
for (let coinPlaceholder of tiles.getTilesByType(assets.tile`coinPlaceholder`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 4 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    assets.animation`myAnim`,
    100,
    true
    )
    tiles.placeOnTile(coin, coinPlaceholder)
    tiles.setTileAt(coinPlaceholder, assets.tile`transparency16`)
}
