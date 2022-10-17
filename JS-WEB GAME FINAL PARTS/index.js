let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px' 
document.body.append(greenCharacter)

function addBackground(backgroundImgName, fileSource, backgroundStartBottom, backgroundEndTop){
    let imageWidth = 100
    for (let currentRow = backgroundStartBottom; currentRow < backgroundEndTop; currentRow++){
        for (let currentColumn = 0; currentColumn < window.innerWidth; currentColumn += imageWidth){
            newImage(backgroundImgName, fileSource, `${currentColumn}px`, `${currentRow*imageWidth}px`)
        }
    }
}


let horizonPosition = 5
let backgroundsList = [
    {
        imageName: 'grass',
        assetLocation: 'assets/grass.png',
        startPositionX: 0,
        endPositionX: horizonPosition
    },
    {
        imageName: 'sky',
        assetLocation: 'assets/sky.png',
        startPositionX: horizonPosition,
        endPositionX: window.innerHeight
    }
]
for (let currentImage = 0; currentImage < backgroundsList.length; currentImage++){
    addBackground(window[backgroundsList[currentImage].imageName], backgroundsList[currentImage].assetLocation, backgroundsList[currentImage].startPositionX, backgroundsList[currentImage].endPositionX)
}

function newImage(newImgName, fileSource, positionLeft, PositionBottom){
    newImgName = document.createElement('img')
    newImgName.src = fileSource
    newImgName.style.position = 'fixed'
    newImgName.style.left = positionLeft
    newImgName.style.bottom = PositionBottom
    document.body.append(newImgName)
    return newImgName
}

let imagesList = [
    {
        imageName: 'greenCharacter',
        assetLocation: 'assets/green-character.gif',
        positionY: '100px',
        PositionX: '100px'
    },
    {
        imageName: 'pineTree',
        assetLocation: 'assets/pine-tree.png',
        positionY: '450px',
        PositionX: '200px'
    },
    {
        imageName: 'tree',
        assetLocation: 'assets/tree.png',
        positionY: '200px',
        PositionX: '300px'
    },
    {
        imageName: 'pillar',
        assetLocation: 'assets/pillar.png',
        positionY: '350px',
        PositionX: '100px'
    },
    {
        imageName: 'crate',
        assetLocation: 'assets/crate.png',
        positionY: '150px',
        PositionX: '200px'
    },
    {
        imageName: 'well',
        assetLocation: 'assets/well.png',
        positionY: '500px',
        PositionX: '425px'
    }
]

for (let currentImage = 0; currentImage < imagesList.length; currentImage++){
    newImage(window[imagesList[currentImage].imageName], imagesList[currentImage].assetLocation, imagesList[currentImage].positionY, imagesList[currentImage].PositionX)
}

function newItem(newItemName, fileSource, positionLeft, PositionBottom) {
    newItemName = newImage(newItemName, fileSource, positionLeft, PositionBottom)
    newItemName.addEventListener('dblclick', function(){
        newItemName.remove()
    })
}

let itemsList = [
    {
        imageName: 'sword',
        assetLocation: 'assets/sword.png',
        positionY: '500px',
        PositionX: '405px'
    },
    {
        imageName: 'sheild',
        assetLocation: 'assets/sheild.png',
        positionY: '165px',
        PositionX: '185px'
    },
    {
        imageName: 'staff',
        assetLocation: 'assets/staff.png',
        positionY: '600px',
        PositionX: '100px'
    }
]
for (let currentImage = 0; currentImage < itemsList.length; currentImage++){
    newItem(window[itemsList[currentImage].itemsName], itemsList[currentImage].assetLocation, itemsList[currentImage].positionY, itemsList[currentImage].PositionX)
}

const pc = newPlayableCharacter(100, 110)

const npc = newNonPlayableCharacter(50, 300)

    npc.walkNorth(1400)
    .then(() => npc.walkEast(1200))
    .then(() => npc.walkSouth(300))
    .then(() => npc.walkEast(1500))
    .then(() => npc.walkSouth(1500))
    .then(() => npc.walkWest(2700))
    .then(() => npc.walkNorth(400))

const inventory = newInventory()
move(inventory).to(0, 0)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)