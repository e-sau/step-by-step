const { getAll, getByGrade } = require("../../../../src/common/api/endpoints/subjects");

describe("Testing 'getAll()' from 'subjects' endpoints", () => {
    it('should return Object', function () {
        const requestBody = getAll();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });
});

describe("Testing 'getByGrade()' from 'subjects' endpoints", () => {
    const mockGradeId = 1;

    /** @todo с реализацией метода доработать */
    it('should return Object', function () {
        const requestBody = getByGrade( mockGradeId );
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });

    it('should to throw Error', function () {
        expect( getByGrade ).toThrow( Error );
    });

    it('should to throw TypeError', function () {
        const errorTypes = [ {}, () => 1, "string" ];
        errorTypes.forEach( payload => {
            expect( () => getByGrade(payload) ).toThrow( TypeError );
        })
    });
});

