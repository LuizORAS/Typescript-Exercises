let spaceships = []

function createSpacheship(name: string, pilot: string, crewLimit: number){
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }
    spaceships.push(spaceship)
    alert(`a nave ${spaceship.name} foi registrada!`)
}
//
//
//
//
function addCrew(crewName, spaceshipName){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find( eachShip => {
        return eachShip.name === spaceshipName
    })

    if(spaceship){
        if(spaceship.crew.length < spaceship.crewLimit){
            spaceship.crew.push(crewName)
        }
    }else{
        alert("Spaceship not founded!")
    }
}
//
//
//
//
//
function sendToMission(spaceshipName){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find( eachShip => {
        return eachShip.name === spaceshipName
    })

    if(spaceship){
        const crewAvailable = spaceship.crew.length
        if((spaceship.inMission === false) && (crewAvailable >= Math.floor((spaceship.crewLimit / 3)))){
            spaceship.inMission = true
            alert(`Spaceship ${spaceship.name} sent to mission!`)
        }else{
            alert(`Spaceship ${spaceship.name} was not able to be sent in mission\nReason: Already in Mission and/or Lacking in Crew`)
        }
    }else{
        alert("Spaceship not founded!")
    }

}
//
//
//
function listSpaceships(){
    let listing: string = ''
    spaceships.forEach((spaceship, index) =>{
        listing += `\n${index +1}ºSpacechip:\nName of the Spaceship: ${spaceship.name}\nName of the Pilot: ${spaceship.pilot}\nTotal size of the crew: ${spaceship.crewLimit}\nCrew: ${spaceship.crew}\nIn Mission: ${spaceship.inMission === false ? 'Não': 'Sim'}\n`
    })
    alert(listing)
}
//
//
//
//
//

/* 
    CRIAÇÃO DA MAIN E UTILIZAÇÃO DAS FUNÇÕES ACIMA;
    CHAMADA DA MAIN NO FINAL DO CÓDIGO;
*/

function main(){
    let isOn: boolean = true

    while(isOn){

        let escolha: number = Number(prompt(`Escolha uma opção:\n\n1. Adicionar uma nave\n2. Adicionar tripulante\n3. Enviar para missão\n4. Listar espaçonaves\n5. sair`))

        switch(escolha){
            case 1:
                let nome: string = prompt('Digite o nome da nave')
                let piloto: string = prompt('Digite o nome do piloto')
                let tamanho: number = Number(prompt('Digite o tamanho da tripulação total da nave'))
                createSpacheship(nome, piloto, tamanho)
                break
            case 2:
                let nomeNave: string = prompt('Qual o nome da nave?')
                let nomeTripulante: string = prompt('Qual o nome do novo tripulante a ser adicionado?')
                addCrew(nomeTripulante, nomeNave)
                break
            case 3:
                let naveNome: string = prompt('Qual o nome da nave?')
                sendToMission(naveNome)
                break
            case 4:
                listSpaceships()
                break
            case 5:
                alert('Saindo...')
                isOn = false
                break
            default:
                alert("Opção Inválida!")
                break
    
        }
    }

}

main()