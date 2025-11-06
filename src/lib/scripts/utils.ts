import { soundManager } from "./sound";

export const navigationKeys = {
    up: ['ArrowUp', 'w', 'W'],
    down: ['ArrowDown', 's', 'S'],
    left: ['ArrowLeft', 'a', 'A'],
    right: ['ArrowRight', 'd', 'D'],
    select: [' '],
}

/*
* Utility function to calculate the new navigation index in a grid layout.
* Parameters:
* - cols: number of columns in the grid
* - count: total number of items in the grid
* - selectedIndex: current selected index (-1 if none selected)
* - direction: direction of navigation ('up', 'down', 'left', 'right')
* Returns:
* - new selected index after navigation
*/
function getNavigateIndex(cols: number, count: number, selectedIndex: number , event: KeyboardEvent): number {
    if (!(navigationKeys.up.concat(navigationKeys.down, navigationKeys.left, navigationKeys.right).includes(event.key))) {
        return selectedIndex;
    }

    event.preventDefault();

    if (selectedIndex == -1) return 0;

    let newIndex = selectedIndex;

    const colLength = Math.floor(count / cols) + (count % cols > (selectedIndex % cols) ? 1 : 0);  // Number of rows in the current column
    const rowLength = Math.min(cols, count - selectedIndex + selectedIndex % cols);  // Number of items in the current row

    switch (true) {
        case navigationKeys.up.includes(event.key):
            event.preventDefault();
            newIndex = (selectedIndex - cols + colLength * cols) % (colLength * cols);
            break;
        case navigationKeys.down.includes(event.key):
            event.preventDefault();
            newIndex = (selectedIndex + cols) % (colLength * cols);
            break;
        case navigationKeys.left.includes(event.key):
            event.preventDefault();
            newIndex = ((selectedIndex - 1 + rowLength) % rowLength) + rowLength * Math.floor(selectedIndex / rowLength);
            break;
        case navigationKeys.right.includes(event.key):
            event.preventDefault();
            newIndex = ((selectedIndex + 1) % rowLength) + rowLength * Math.floor(selectedIndex / rowLength);
            break;
    }

    return newIndex;
}

export { getNavigateIndex };