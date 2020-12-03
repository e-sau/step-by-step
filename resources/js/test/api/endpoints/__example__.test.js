const { getTest, postTest } = require("../../../src/api/endpoints/__example__");

describe("Testing 'getTest()' from '__example_' endpoints", () => {
    it('should return Object', function () {
        const requestBody = getTest();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.headers ).toStrictEqual({ 'X_TEXT': '1'});
        expect( requestBody.uri ).toBe( "test" );
    });
});

describe("Testing 'postTest()' from '__example_' endpoints", () => {
    it('should return Object', function () {
        const requestBody = postTest();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
        expect( requestBody.method ).toBe("POST");
        expect( requestBody.body ).toBeInstanceOf( Object );
    });
});
