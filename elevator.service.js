const {elevatorStates: { DOWN, IDLE, UP }} = require("./config");
const elevatorsArray = require("./elevator");

const findElevator = (requestFloor, requestDirection) => {
  let bestFit = null;

  // In the event that all are equally good/bad, it distributes evenly.
  let closest = Math.floor(Math.random() * elevatorsArray.length);

  elevatorsArray.forEach((elevator, elevatorInd) => {
    const approachingPassenger =
      (elevator.direction === UP && elevator.floor <= requestFloor) ||
      (elevator.direction === DOWN && elevator.floor >= requestFloor) ||
      elevator.direction === IDLE; // requestDirection doesn't matter if it's idle

    const sameDirection =
      requestDirection === elevator.direction || elevator.direction === IDLE;

    const distance = Math.abs(requestFloor - elevator.floor);

    if (
      approachingPassenger &&
      sameDirection &&
      (bestFit === null ||
        distance < Math.abs(requestFloor - elevatorsArray[bestFit].floor))
    ) {
      bestFit = elevatorInd;
    }

    if (distance < Math.abs(requestFloor - elevatorsArray[closest].floor)) {
      closest = elevatorInd;
    }
  });

  const bestElevator = bestFit !== null ? bestFit : closest;
  const totalTravelTime =
    Math.abs(elevatorsArray[bestElevator].floor - requestFloor) *
    (elevatorsArray[bestElevator].travelSpeed / 1000);
  console.log(elevatorsArray[bestElevator].toString(totalTravelTime));
};

const getPassangerDirection = (currentFloor, destinationFloor) =>
  currentFloor < destinationFloor
    ? UP
    : currentFloor > destinationFloor
    ? DOWN
    : IDLE;

const goToFloor = (currentFloor, destinationFloor) =>
  findElevator(
    destinationFloor,
    getPassangerDirection(currentFloor, destinationFloor)
  );

module.exports = { goToFloor };
