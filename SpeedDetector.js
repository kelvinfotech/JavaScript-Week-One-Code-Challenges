// This function calculates demerit points for speeding violations.
function calculateDemeritPoints(speed) {
    // This defines the constants for the speed limit, demerit points per kilometer over the limit, and maximum demerit points allowed.
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
    let demeritPoints = 0; // This initializes variable to store demerit points.

    // This checks if the speed is within the required speed limit.
    if (speed <= speedLimit) {
        console.log("Ok"); // This will show that the speed is okay if the speed is within the required speed limit.
    } else { // If the speed exceeds the required speed limit.
        // This calculates the demerit points based on how much over the limit the speed is.
        demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Points:", demeritPoints); // This will show the calculated demerit points based on how much over the limit the speed is.

        // This checks whether the demerit points exceed or equal the maximum demerit points allowed.
        if (demeritPoints >= maxDemeritPoints) {
            console.log("License suspended"); // This will show that the license is suspended if the demerit points exceed or equal the maximum demerit points allowed.
        }
    }
}

// Example in use
calculateDemeritPoints(80); // Output: Points: 2
calculateDemeritPoints(65); // Output: Ok
calculateDemeritPoints(100); // Output: Points: 6