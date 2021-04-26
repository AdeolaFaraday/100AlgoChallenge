const teamsArr = ['Manchester United', 'Man City', 'Arsenal', 'Ajax', 'Ausburg', 'Cadiz', 'Chelsea', 'Liverpoool'];

const teamFunc = (team) => {
	const newArr = teamsArr.filter((t) => {
		return t == t.match(new RegExp(`^${team}.*`, 'i'));
	});
	return newArr;
};

console.log(teamFunc('ma'));
