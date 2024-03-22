function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
    let demeritPoints = 0;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Points:", demeritPoints);
        if (demeritPoints >= maxDemeritPoints) {
            console.log("License suspended");
        }
    }
}

calculateDemeritPoints(90); // Output: Points: 2
calculateDemeritPoints(95); // Output: Ok
calculateDemeritPoints(300); // Output: Points: 8