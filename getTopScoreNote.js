function getStudentsWithNamesAndTopNotes(students) {
	let arr = students.map((a) => [{ name: a.name, topNotes: a.notes.length < 1 ? 0 : Math.max(...a.notes) }]);
	return arr.flat();
}
console.log(getStudentsWithNamesAndTopNotes([{ name: 'John', notes: [3, 5, 4] }]));
