function test(description) {
    console.log(description);
    return {
        isEqual,
        isNotANumber,
        doesNotThrowError,
        isInRange
    };
}

function doesNotThrowError(testFunction, description) {
    try {
        testFunction();
        console.log(`🟢 ${description}`);
    } catch (error) {
        console.log(error);
        console.log(`🔴 ${description}`);
    }
}

function isInRange(received, expectedLowerBound, expectedUpperBound, description) {
    if (received >= expectedLowerBound && received <= expectedUpperBound) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected between ${expectedLowerBound} and ${expectedUpperBound}, received ${received}`);
    }
}

function isNotANumber(received, description) {
    if (isNaN(received)) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Received ${received}`);
    }
}

function isEqual(received, expected, description) {
    if (Array.isArray(received) && Array.isArray(expected)) {
        if (JSON.stringify(received) === JSON.stringify(expected)) {
            console.log(`🟢 ${description}`);
        } else {
            console.log(`🔴 ${description}. Expected ${JSON.stringify(expected)}, received ${JSON.stringify(received)}`);
        }
    }
    else if (typeof received === "object" && typeof expected === "object") {
        if (JSON.stringify(received) === JSON.stringify(expected)) {
            console.log(`🟢 ${description}`);
        } else {
            console.log(`🔴 ${description}. Expected ${JSON.stringify(expected)}, received ${JSON.stringify(received)}`);
        }
    }
    else if (received === expected) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, received ${received}`);
    }
}


export default test;
