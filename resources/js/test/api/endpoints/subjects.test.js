const { getAll, getByGrade } = require("../../../src/api/endpoints/subjects");

describe("Testing 'getAll()' from 'subjects' endpoints", () => {
    it("should return Object", function () {
        const requestBody = getAll();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });
});

describe("Testing 'getByGrade()' from 'subjects' endpoints", () => {
    /** @todo с реализацией метода доработать */
    it("should return Object", function () {
        const testSubjectID = 1;
        const requestBody = getByGrade( testSubjectID );

        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).toBe(`subjects/getByGrade/${ testSubjectID }`);
    });

    it("should to throw Error", function () {
        expect( getByGrade ).toThrow( Error );
    });

    it("should to throw TypeError", function () {
        [ {}, () => 1, "string" ].forEach( payload => {
            expect( () => getByGrade(payload) ).toThrow( TypeError );
        });
    });
});

