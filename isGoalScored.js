function isGoalScored(goal) {
	return goal
		.map((a) =>
			a
				.join()
				.split('')
				.filter((a) => a !== ' ')
				.join('')
		)
		.some((a) => a == '#0#');
}

console.log(isGoalScored([[' #0 # '], [' # # '], [' # # '], [' ####### '], [' # '], [' # '], [' # ']]));
