//yo let's start that shite

//ex1
let planets = []
type PlanetSituation = "habitado" | "habitável" | "inabitável" | "inexplorado";

function addPlanet(name: string, coordinates: string[], situation: PlanetSituation, satellites: string[]){
    const planet = {name, coordinates, situation, satellites}
    planets.push(planet)
}

//ex2
function updatePlanet(planetName: string, newSituation: PlanetSituation ){
    const FoundedPlanet = planets.find( eachPlanet => eachPlanet.name == planetName )
    if(FoundedPlanet){
        FoundedPlanet.situation = newSituation
    }else{
        alert("Planet not founded!")
    }
}

//ex3
function addSatellite(planetName: string, satellite: string){
    const FoundedPlanet = planets.find( eachPlanet => eachPlanet.name == planetName )
    if(FoundedPlanet){
        FoundedPlanet.satellites.push(satellite)
    }else{
        alert("Planet not founded!")
    }
}

//ex4
function removeSatellite(planetName: string, satellite: string){
    const FoundedPlanet = planets.find( eachPlanet => eachPlanet.name == planetName )
    if(FoundedPlanet){
        const FoundedSatellite = FoundedPlanet.satellites.find( eachSatellite => eachSatellite == satellite)
        if(FoundedSatellite){
            let newArray = FoundedPlanet.satellites.filter( oldSatellites => oldSatellites !== FoundedSatellite )
            FoundedPlanet.satellites = newArray
        }else{
            alert("Satellite not founded!")
        }
    }else{
        alert("Planet not founded!")
    }
}


//ex5
function listPlanets(){
    let list: string = ''

    planets.forEach((eachPlanet, index) => {
        list += `\n${index + 1}º Planet:\nPlanet Name: ${eachPlanet.name}\nPlanet Coordinates: [${eachPlanet.coordinates}]\nSituation: ${eachPlanet.situation}\nSatellites: ${eachPlanet.satellites}\n`
    })

    return list
}


/*
    MAIN FUNCTION TO CALL
*/

function main(){
    let isOn: boolean = true

    while(isOn){

        let escolha: number = Number(prompt(`Escolha uma opção:\n\n1. Adicionar um Planeta\n2. Atualizar a situação de um planeta\n3. Adicionar um satélite\n4. Remover um satélite\n5. Listar os planetas \n6. Sair`))

        switch(escolha){
            case 1:
                let nome: string = prompt('Digite o nome do planeta')
                let coordenadas = prompt('Digite as coordenadas')
                let coordenadasNovas = coordenadas.split(',')
                let situation: PlanetSituation
                situation = prompt('Digite a situação do planeta')
                addPlanet(nome, coordenadasNovas, situation, [])
                break
            case 2:
                let planeta = prompt("Qual o nome do planeta?")
                let novaSituação: PlanetSituation  
                novaSituação = prompt('Qual a situação do planeta?')
                updatePlanet(planeta, novaSituação)
                break
            case 3:
                let planetaToAdd = prompt("Qual o nome do planeta?")
                let satellite: string = prompt('Qual o nome do satélite a ser adicionado?')
                addSatellite(planetaToAdd,satellite)
                break
            case 4:
                let planetaToRem = prompt("Qual o nome do planeta?")
                let satelliteToRem = prompt('Qual o nome do satélite a ser removido?')
                removeSatellite(planetaToRem, satelliteToRem)
                break
            case 5:
                alert(listPlanets())
                break
            case 6:
                alert('Saindo...')
                isOn = false
                break
            default:
                alert("Opção Inválida!")
                break
    
        }
    }

}

// main()


