const { processRequestData } = require("../../../src/common/api/makeRequest");

describe("Testing processRequestData()", () => {
    const testCases = [
        () => true, { a: 1 }, true, 1, "string"
    ];
    it('should return result equals of Test cases', () => {
        testCases.forEach( payload => {
            const isFunction = ( typeof payload === "function" );
            expect( processRequestData( payload ) )
                .toEqual( isFunction ? payload() : payload );
        });
    });
});
