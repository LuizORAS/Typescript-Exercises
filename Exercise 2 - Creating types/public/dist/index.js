//yo let's start that shite
//ex1
let planets = [];
function addPlanet(name, coordinates, situation, satellites) {
    const planet = { name, coordinates, situation, satellites };
    planets.push(planet);
}
//ex2
function updatePlanet(planetName, newSituation) {
    const FoundedPlanet = planets.find(eachPlanet => eachPlanet.name == planetName);
    if (FoundedPlanet) {
        FoundedPlanet.situation = newSituation;
    }
    else {
        alert("Planet not founded!");
    }
}
//ex3
function addSatellite(planetName, satellite) {
    const FoundedPlanet = planets.find(eachPlanet => eachPlanet.name == planetName);
    if (FoundedPlanet) {
        FoundedPlanet.satellites.push(satellite);
    }
    else {
        alert("Planet not founded!");
    }
}
//ex4
function removeSatellite(planetName, satellite) {
    const FoundedPlanet = planets.find(eachPlanet => eachPlanet.name == planetName);
    if (FoundedPlanet) {
        const FoundedSatellite = FoundedPlanet.satellites.find(eachSatellite => eachSatellite == satellite);
        if (FoundedSatellite) {
            let newArray = FoundedPlanet.satellites.filter(oldSatellites => oldSatellites !== FoundedSatellite);
            FoundedPlanet.satellites = newArray;
        }
        else {
            alert("Satellite not founded!");
        }
    }
    else {
        alert("Planet not founded!");
    }
}
//ex5
function listPlanets() {
    let list = '';
    planets.forEach((eachPlanet, index) => {
        list += `\n${index + 1}º Planet:\nPlanet Name: ${eachPlanet.name}\nPlanet Coordinates: [${eachPlanet.coordinates}]\nSituation: ${eachPlanet.situation}\nSatellites: ${eachPlanet.satellites}\n`;
    });
    return list;
}
/*
    MAIN FUNCTION TO CALL
*/
function main() {
    let isOn = true;
    while (isOn) {
        let escolha = Number(prompt(`Escolha uma opção:\n\n1. Adicionar um Planeta\n2. Atualizar a situação de um planeta\n3. Adicionar um satélite\n4. Remover um satélite\n5. Listar os planetas \n6. Sair`));
        switch (escolha) {
            case 1:
                let nome = prompt('Digite o nome do planeta');
                let coordenadas = prompt('Digite as coordenadas');
                let coordenadasNovas = coordenadas.split(',');
                let situation;
                situation = prompt('Digite a situação do planeta');
                addPlanet(nome, coordenadasNovas, situation, []);
                break;
            case 2:
                let planeta = prompt("Qual o nome do planeta?");
                let novaSituação;
                novaSituação = prompt('Qual a situação do planeta?');
                updatePlanet(planeta, novaSituação);
                break;
            case 3:
                let planetaToAdd = prompt("Qual o nome do planeta?");
                let satellite = prompt('Qual o nome do satélite a ser adicionado?');
                addSatellite(planetaToAdd, satellite);
                break;
            case 4:
                let planetaToRem = prompt("Qual o nome do planeta?");
                let satelliteToRem = prompt('Qual o nome do satélite a ser removido?');
                removeSatellite(planetaToRem, satelliteToRem);
                break;
            case 5:
                alert(listPlanets());
                break;
            case 6:
                alert('Saindo...');
                isOn = false;
                break;
            default:
                alert("Opção Inválida!");
                break;
        }
    }
}
// main()
