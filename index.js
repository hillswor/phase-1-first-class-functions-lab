const returnFirstTwoDrivers = (array) => array.slice(0, 2)

const returnLastTwoDrivers = (array) => array.slice(array.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
	return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, driverFunction) => driverFunction(array);