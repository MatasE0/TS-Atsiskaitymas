/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var TEAMS_ENDPOINT = 'teams.json';
var PLAYERS_ENDPOINT = 'players.json';
function fetchTeamsData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(TEAMS_ENDPOINT)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    displayTeams(data.teams);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching teams data:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchPlayersData(teamId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, teamPlayers, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(PLAYERS_ENDPOINT)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    teamPlayers = data.players.filter(function (player) { return player.teamId === teamId; });
                    displayPlayers(teamPlayers);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error fetching players data:', error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function displayTeams(teams) {
    var outputElement = document.getElementById('output');
    if (!outputElement)
        return;
    teams.forEach(function (team) {
        var teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        var teamName = document.createElement('h2');
        teamName.textContent = team.teamName;
        teamCard.appendChild(teamName);
        var simpleName = document.createElement('p');
        simpleName.textContent = "Simple Name: ".concat(team.simpleName);
        teamCard.appendChild(simpleName);
        var abbreviation = document.createElement('p');
        abbreviation.textContent = "Abbreviation: ".concat(team.abbreviation);
        teamCard.appendChild(abbreviation);
        var location = document.createElement('p');
        location.textContent = "Location: ".concat(team.location);
        teamCard.appendChild(location);
        var playersButton = document.createElement('button');
        playersButton.textContent = 'Players';
        playersButton.onclick = function () { return fetchPlayersData(team.id); };
        teamCard.appendChild(playersButton);
        outputElement.appendChild(teamCard);
    });
}
function displayPlayers(players) {
    var modal = document.getElementById('modal');
    var modalContent = document.getElementById('modal-content');
    if (!modal || !modalContent)
        return;
    modalContent.innerHTML = '';
    players.forEach(function (player) {
        var playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        var playerName = document.createElement('p');
        playerName.textContent = "".concat(player.firstName, " ").concat(player.lastName);
        playerCard.appendChild(playerName);
        modalContent.appendChild(playerCard);
    });
    modal.style.display = 'block';
}
function closeModal() {
    var modal = document.getElementById('modal');
    if (modal)
        modal.style.display = 'none';
}
fetchTeamsData();
document.addEventListener('click', function (event) {
    var modal = document.getElementById('modal');
    if (modal && event.target === modal) {
        closeModal();
    }
});
