const { getTest, postTest } = require("../../../../src/common/api/endpoints/__example__");

describe("Testing 'getTest()' from '__example_' endpoints", () => {
    it('should return Object', function () {
        const requestBody = getTest();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });
});

describe("Testing 'postTest()' from '__example_' endpoints", () => {
    it('should return Object', function () {
        const requestBody = postTest();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
        expect( requestBody.method ).toBe("POST");
        expect( requestBody.body ).not.toBeUndefined();
    });
});
