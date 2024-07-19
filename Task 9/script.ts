/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

interface Player {
    firstName: string;
    lastName: string;
    id: number;
    teamId: number;
  }
  
  interface Team {
    id: number;
    abbreviation: string;
    teamName: string;
    simpleName: string;
    location: string;
  }
  
  const TEAMS_ENDPOINT = 'teams.json';
  const PLAYERS_ENDPOINT = 'players.json';
  
  async function fetchTeamsData() {
    try {
      const response = await fetch(TEAMS_ENDPOINT);
      const data: { teams: Team[] } = await response.json();
      displayTeams(data.teams);
    } catch (error) {
      console.error('Error fetching teams data:', error);
    }
  }
  
  async function fetchPlayersData(teamId: number) {
    try {
      const response = await fetch(PLAYERS_ENDPOINT);
      const data: { players: Player[] } = await response.json();
      const teamPlayers = data.players.filter(player => player.teamId === teamId);
      displayPlayers(teamPlayers);
    } catch (error) {
      console.error('Error fetching players data:', error);
    }
  }
  
  function displayTeams(teams: Team[]) {
    const outputElement = document.getElementById('output');
    if (!outputElement) return;
  
    teams.forEach(team => {
      const teamCard = document.createElement('div');
      teamCard.className = 'team-card';
  
      const teamName = document.createElement('h2');
      teamName.textContent = team.teamName;
      teamCard.appendChild(teamName);
  
      const simpleName = document.createElement('p');
      simpleName.textContent = `Simple Name: ${team.simpleName}`;
      teamCard.appendChild(simpleName);
  
      const abbreviation = document.createElement('p');
      abbreviation.textContent = `Abbreviation: ${team.abbreviation}`;
      teamCard.appendChild(abbreviation);
  
      const location = document.createElement('p');
      location.textContent = `Location: ${team.location}`;
      teamCard.appendChild(location);
  
      const playersButton = document.createElement('button');
      playersButton.textContent = 'Players';
      playersButton.onclick = () => fetchPlayersData(team.id);
      teamCard.appendChild(playersButton);
  
      outputElement.appendChild(teamCard);
    });
  }
  
  function displayPlayers(players: Player[]) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    if (!modal || !modalContent) return;
  
    modalContent.innerHTML = ''; 
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.className = 'player-card';
  
      const playerName = document.createElement('p');
      playerName.textContent = `${player.firstName} ${player.lastName}`;
      playerCard.appendChild(playerName);
  
      modalContent.appendChild(playerCard);
    });
  
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'none';
  }
  
  fetchTeamsData();
  
  document.addEventListener('click', event => {
    const modal = document.getElementById('modal');
    if (modal && event.target === modal) {
      closeModal();
    }
  });
  