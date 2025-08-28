scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (!(C)) {
        C = true
        game.showLongText("You push past the branches...", DialogLayout.Bottom)
        game.showLongText("A faint glow catches your eye.", DialogLayout.Bottom)
        game.showLongText("You obtained the Tuning Crystal!!", DialogLayout.Bottom)
        pause(200)
        game.showLongText("wireless phone: incoming call", DialogLayout.Bottom)
        game.showLongText("**static**", DialogLayout.Bottom)
        game.showLongText("...", DialogLayout.Bottom)
        game.showLongText("**cough**", DialogLayout.Bottom)
        game.showLongText("Wireless phone: call ended abruptly.", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (!(A)) {
        A = true
        music.play(music.createSoundEffect(WaveShape.Noise, 300, 300, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 . . . . . . . . . 5 . . . 
            . . 5 . . . . . . . . . 5 . . . 
            . . 5 . . 7 7 7 7 7 . . 5 . . . 
            . . 5 . . 7 7 7 . . . . 5 . . . 
            . . 5 . . 7 7 . . . . . 5 . . . 
            . . 5 . . 7 7 . . . . . 5 . . . 
            . . 5 . . 7 7 7 . . . . 5 . . . 
            . . 5 . . 7 7 7 7 7 . . 5 . . . 
            . . 5 . . . . . . . . . 5 . . . 
            . . 5 . . . . . . . . . 5 . . . 
            . . 5 . . . . . . . . . 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("Your wireless phone buzzes softly inside the chest...", DialogLayout.Bottom)
        game.setDialogCursor(img`
            ..........888888888888..........
            ........8887777777777888........
            ......88877666666666677888......
            .....8877666667777666667788.....
            ....887666667788887766666788....
            ....866666677888888996666678....
            ...88666667788877889976666688...
            ...88666677888677688877666688...
            ...88666778888888888887766688...
            ...88667788888888888888776688...
            ..cc866788866777777668887668cc..
            .ccbc8668866666666666688668cbcc.
            .fcbcc86666666666666666668ccbcf.
            .fcbbcc886666666666666688ccbdcf.
            .f8bbbccc88888888888888cccbddcf.
            .f8cbbbbccccccccccccccccbdddbcf.
            .f8ccbbbbbccccccccccccb11dddccf.
            .f6ccccbbbdddddddddddd111ddcccf.
            .f6ccccccbbddddddddddd11dbbcccf.
            .f6cccccccccccccbbbbbbbbbdbcccf.
            ..f6cccccccccbbbbbbbbbbbddbccf..
            ..f6cccccccccbbbbbbbbbbbddbccf..
            ..ff6ccccccccbbbbbbbbbbbddbcff..
            ...ff6cccccccbbbbbbbbbbbddbff...
            ....ffcccccccbbbbbbbbbbbdbff....
            ......ffccccbbbbbbbbbbbbff......
            ........ffffffffffffffff........
            `)
        pause(150)
        game.showLongText("...", DialogLayout.Bottom)
        game.showLongText("Friend: Heya! You won't believe this - I swear I just heard the dungeon on the line!", DialogLayout.Bottom)
        pause(150)
        game.showLongText("You: I'm still a few kilometers out according to the map.", DialogLayout.Bottom)
        pause(150)
        game.showLongText("Friend: Then you're on track. Oh - and watch out near the old forest road.", DialogLayout.Bottom)
        pause(150)
        game.showLongText("You: Got it. I'll check in later.", DialogLayout.Bottom)
        // Fade to new area
        color.startFadeFromCurrent(color.White, 1000)
        tiles.setCurrentTilemap(tilemap`level2`)
        color.startFadeFromCurrent(color.originalPalette, 1000)
        // A little lore drop mid-transition
        game.showLongText("Friend: Remember... the tuning crystal is guarded by an old man who never leaves his chair.", DialogLayout.Bottom)
        pause(150)
        game.showLongText("*static rises sharply*", DialogLayout.Bottom)
        pause(400)
        game.showLongText("Friend: Wait-did you hear tha-", DialogLayout.Bottom)
        // "Odd" call cutoff sound
        music.play(music.createSoundEffect(WaveShape.Square, 500, 500, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.showLongText("Wireless phone: Connection lost unexpectedly.", DialogLayout.Bottom)
        INITMAP2()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.showLongText("You: Finally... I found it!!!", DialogLayout.Bottom)
    game.showLongText("Wireless phone: Initiating final call...", DialogLayout.Bottom)
    game.showLongText("**loud static**", DialogLayout.Bottom)
    game.showLongText("A faint voice: ...you made it...", DialogLayout.Bottom)
    game.showLongText("THE END!!!", DialogLayout.Bottom)
    creditsofwhichitsjustme()
})
function creditsofwhichitsjustme() {
    game.showLongText("=== CREDITS ===", DialogLayout.Center)
    game.showLongText("Game Design: killercraft-the-coder", DialogLayout.Center)
    game.showLongText("Story: killercraft-the-coder", DialogLayout.Center)
    game.showLongText("Art & SFX: killercraft-the-coder", DialogLayout.Center)
    game.showLongText("Thanks for playing!", DialogLayout.Center)
    pause(1000);
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("Wireless phone: reconnecting...", DialogLayout.Bottom)
    game.showLongText("Friend: Oh - you're still there? Thought you'd left already.", DialogLayout.Bottom)
    game.showLongText("Friend: Anyway... about that cough earlier... forget I said anything.", DialogLayout.Bottom)
    game.showLongText("*click*", DialogLayout.Bottom)
    game.reset();

}

function INITMAP2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        mySprite2 = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            d d . f f f f f f . d d 
            d d d f f d d f f d d d 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`myTile2`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(B)) {
        game.showLongText("Old Man: Hm? Oh, the tuning crystal? I've heard tales...", DialogLayout.Bottom)
    }
    B = true
})
let B = false
let mySprite2: Sprite = null
let A = false
let C = false
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
