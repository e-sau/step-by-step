const { getAll } = require("../../../../src/common/api/endpoints/grades");

describe("Testing 'getAll()' from 'grades' endpoints", () => {
    it('should return Object', function () {
        const requestBody = getAll();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });
});
