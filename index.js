const {goToFloor} = require("./elevator.service");
const currentPassengerFloor = process.argv[2];
const destinationPassengerFloor = process.argv[3];

goToFloor(currentPassengerFloor, destinationPassengerFloor);


