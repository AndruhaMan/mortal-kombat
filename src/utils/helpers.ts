import { locations } from "../data/locations";
import { Direction } from "../types/direction";

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

export function incrementNumberInArray(array: number[], numIndex: number) {
  return array.map((num, index) => {
    if (index === numIndex) {
      return num < 9
        ? num + 1
        : 0;
    }

    return num;
  })
}

export function handleSwitch(
  direction: Direction,
  setPosition: (value: React.SetStateAction<number>) => void,
) {

  switch (direction) {
    case Direction.Up: {
      setPosition(current => {
        return canSwitchUp(current)
          ? (current - 5)
          : current;
      })
      break;
    }

    case Direction.Down: {
      setPosition(current => {
        return canSwitchDown(current)
          ? (current + 5)
          : current;
      })
      break;
    }

    case Direction.Right: {
      setPosition(current => {
        return canSwitchRight(current)
          ? (current + 1)
          : current;
      })
      break;
    }

    case Direction.Left: {
      setPosition(current => {
        return canSwitchLeft(current)
          ? (current - 1)
          : current;
      })
      break;
    }

    default:
      break;
  }
}

export function getDirectionByKeyCode(keyCode: string) {
  switch (keyCode) {
    case 'KeyA':
    case 'ArrowLeft':
      return Direction.Left;

    case 'KeyD':
    case 'ArrowRight':
      return Direction.Right;

    case 'KeyS':
    case 'ArrowDown':
      return Direction.Down;

    case 'KeyW':
    case 'ArrowUp':
    default:
      return Direction.Up;
  }
}