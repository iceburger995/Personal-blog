const steamGames = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5C100CE83D335ED880715225270F877C&steamid=76561198029829713&format=json";
const steamSummary = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5C100CE83D335ED880715225270F877C&steamids=76561198029829713";

// CORS Enabled API - WIP

class User {
    constructor() {
        this.profileUrl = "";
        this.avatar = "";
        this.gameCount = null;
        this.mostPlayed = [];
    }
    getProfile() {
    	return fetch(steamSummary, {
    		method: "GET"
    	});
    }
}
