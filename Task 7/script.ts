/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "NBA.json";

interface Player {
  firstName: string;
  lastName: string;
  googleSearch: string;
}

interface Team {
  id: number;
  name: string;
  players: Player[];
}

async function fetchNBAData() {
  try {
    const response = await fetch("NBA.json");
    const data: { teams: Team[] } = await response.json();
    displayTeams(data.teams);
  } catch (error) {
    console.error("Error fetching NBA data:", error);
  }
}

function displayTeams(teams: Team[]) {
  const outputElement = document.getElementById("output");

  if (!outputElement) return;

  teams.forEach((team) => {
    const teamCard = document.createElement("div");
    teamCard.className = "team-card";

    const teamName = document.createElement("h2");
    teamName.textContent = team.name;
    teamCard.appendChild(teamName);

    team.players.forEach((player) => {
      const playerCard = document.createElement("div");
      playerCard.className = "player-card";

      const playerName = document.createElement("p");
      playerName.textContent = `${player.firstName} ${player.lastName}`;

      const playerLink = document.createElement("a");
      playerLink.href = player.googleSearch;
      playerLink.textContent = "More Info";
      playerLink.target = "_blank";

      playerCard.appendChild(playerName);
      playerCard.appendChild(playerLink);
      teamCard.appendChild(playerCard);
    });

    outputElement.appendChild(teamCard);
  });
}

fetchNBAData();
