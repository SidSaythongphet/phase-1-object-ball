function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },           
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        },
    };
    return obj;
}


const game = gameObject()
const players = playersObject()
const homeTeam = {...game.home}
const awayTeam = {...game.away}
const teams = Object.values(game)
const allStats = Object.values(players)
const allPlayers = Object.keys(players)

function numPointsScored(playerName) {
    return players[playerName].points
}

function playersObject() {
    return {...game.home.players, ...game.away.players}
    //can also be written like: 
    //const players = object.assign({}, game.home.players, game.away.players)
}

function shoeSize(playerName) {
    return players[playerName].shoe
}

function teamColors(teamName) {
    if(teamName === homeTeam.teamName) {
        return {...game.home.colors}
    } else if(teamName === awayTeam.teamName) {
        return {...game.home.colors}
    } else 
        return undefined
}

function teamNames() {
    return teams.map(team => team.teamName)
}

function playerNumbers(teamName) {
    for(const team of teams) {
        if(team.teamName === teamName) {
            let stats = Object.values(team.players)
            return stats.map(stat => stat.number)
        }
    }
}

function playerStats(playerName) {
    return players[playerName]
}

const allShoeStats = allStats.map(shoeStat => shoeStat.shoe)
const allPointStats = allStats.map(pointStat => pointStat.points)

function biggestShoe() {
    return Math.max.apply(Math, allShoeStats)
}

function highestPoint() {
    return Math.max.apply(Math, allPointStats)
}

function bigShoeRebounds() {
    for(let gameKey in game) {
        const teamObject = game[gameKey]
        const playerObj =teamObject.players
        for(let player in playerObj) {
            if(playerObj[player].shoe === biggestShoe()) {
                return playerObj[player].rebounds
            }
        } 
    }
}

function mostPointsScored() {
    for(let gameKey in game) {
        const teamObject = game[gameKey]
        const playerObj = teamObject.players
        for(let player in playerObj) {
            if(playerObj[player].points === highestPoint()) {
                return player
            }
        } 
    }
}

function winningTeam() {
    const homeTeamStats = homeTeam.players
    const homeAllStats = Object.values(homeTeamStats)
    const homePoints = homeAllStats.map(pointStat => pointStat.points)
    const homeTotal = homePoints.reduce(function(accumulator, element) {return element + accumulator}, 0)
    // console.log(homeTotal)
    const awayTeamStats = awayTeam.players
    const awayAllStats = Object.values(awayTeamStats)
    const awayPoints = awayAllStats.map(pointStat => pointStat.points)
    const awayTotal = awayPoints.reduce(function(accumulator, element) {return element + accumulator}, 0)
    // console.log(awayTotal)
    if(homeTotal > awayTotal) {
        return "The " + homeTeam.teamName + " won with a score of " + homeTotal
    } else {
        return "The " + awayTeam.teamName + " won with a score of " + awayTotal
    }
}

const playerLength = allPlayers.map(player => player.length)
const maxLength = Math.max.apply(Math, playerLength)

function playerWithLongestName() {
    for(let player of allPlayers) {
        let nameLength = player.length
        if(nameLength === maxLength) {
            return player + " is the longest name with " + maxLength + " letters."
        }
    }
}