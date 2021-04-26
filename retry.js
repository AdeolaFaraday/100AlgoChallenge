const arr = [1, 2, 3, 2, 4];
const removeAllInstances = (arr = []) => {
	filtered = arr.filter((val) => {
		const lastIndex = arr.lastIndexOf(val);
		const firstIndex = arr.indexOf(val);
		return lastIndex === firstIndex;
	});
	return filtered;
};
console.log(removeAllInstances(arr));

let n = 1;
async function retryRequest(promiseFunc, nrOfRetries) {
	// Write your code here
	// let response = null;
	await promiseFunc()
		.then((resp) => {
			response = resp;
			console.log(resp);
			return response;
		})
		.catch(async (err) => {
			await retryRequest(promiseFunc, nrOfRetries - 1);
		});
	return response;
}

let hasFailed = false;
function getUserInfo() {
	return new Promise((resolve, reject) => {
		if (!hasFailed) {
			hasFailed = true;
			reject('Exception!');
		} else {
			resolve('Fetched user!');
		}
	});
}
let promise = retryRequest(getUserInfo, 3);
if (promise) {
	promise.then((result) => console.log(result)).catch((error) => console.log('Error!'));
}
module.exports.retryRequest = retryRequest;
