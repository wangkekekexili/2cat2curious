const imgPlaceholder = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function(cat, flower) {
    flower.destroy()
    let bee = sprites.create(imgPlaceholder, SpriteKind.Enemy)
    animation.runImageAnimation(bee, assets.animation`beeAnimation`, 100, true)
    bee.setPosition(cat.x + 50, cat.y - 50)
    bee.follow(cat, 50, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(cat, bee) {
    bee.destroy()
    info.changeLifeBy(-1)
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
info.setLife(3)
let coin: Sprite = null
let flower: Sprite = null
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
    coin = sprites.create(imgPlaceholder, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    assets.animation`coinAnimation`,
    100,
    true
    )
    tiles.placeOnTile(coin, coinPlaceholder)
    tiles.setTileAt(coinPlaceholder, assets.tile`transparency16`)
}
for (let flowerPlaceholder of tiles.getTilesByType(assets.tile`flowerPlaceholder`)) {
    flower = sprites.create(img`
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . b b d d b b .
        b 1 1 3 3 1 1 b
        b 1 3 5 5 3 1 b
        b d 3 5 5 3 d b
        c 1 1 d d 1 1 c
        c d 1 d d 1 d c
        . c c 7 6 c c .
        . . 6 7 6 . . .
        . . 6 6 8 8 8 6
        . . 6 8 7 7 7 6
        . . 8 7 7 7 6 .
        . . 8 8 8 6 . .
    `, SpriteKind.Flower)
    tiles.placeOnTile(flower, flowerPlaceholder)
    tiles.setTileAt(flowerPlaceholder, assets.tile`transparency16`)
}