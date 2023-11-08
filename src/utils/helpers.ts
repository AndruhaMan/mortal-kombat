import { locations } from "../data/locations";

export function canSwitchRight(currentPos: number) {
  return currentPos !== 4 && currentPos !== 9 && currentPos !== 14;
}

export function canSwitchLeft(currentPos: number) {
  return currentPos !== 0 && currentPos !== 5 && currentPos !== 10;
}

export function canSwitchUp(currentPos: number) {
  return currentPos > 4;
}

export function canSwitchDown(currentPos: number) {
  return currentPos < 10;
}

export function selectRandomLocation() {
  return locations[Math.floor(Math.random() * locations.length)];
}