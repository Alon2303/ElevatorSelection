const {
  elevatorStates: { DOWN, IDLE, UP },
  elevatorSpeed,
} = require("./config");

function Elevator(id, floor, direction) {
  this.id = id;
  this.floor = floor;
  this.direction = direction;
  this.travelSpeed = elevatorSpeed;
  this.toString = (timeToRequestedFloor) =>`Elevator ${this.id} is ${getElevatorState()} and Arriving from floor  ${this.floor}\nTravel time: ${timeToRequestedFloor} seconds`;
}

const elevators = [
  new Elevator(1, 1, IDLE),
  new Elevator(2, 7, DOWN),
  new Elevator(3, 9, UP),
  new Elevator(4, 10, DOWN),
  new Elevator(5, 8, IDLE),
  new Elevator(6, 4, DOWN),
  new Elevator(7, 5, UP),
  new Elevator(8, 15, DOWN),
];

const getElevatorState = () => this.direction === IDLE ? "idle" : this.direction > 0 ? "on the way up" : "on the way down";

module.exports = elevators;
