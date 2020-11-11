const { getAll, getBySubject } = require("../../../../src/common/api/endpoints/tasks");

describe("Testing 'getAll()' from 'tasks' endpoints", () => {
    it('should return Object', function () {
        const requestBody = getAll();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });
});

describe("Testing 'getBySubject()' from 'tasks' endpoints", () => {
    const mockSubjectId = 1;

    /** @todo с реализацией метода доработать */
    it('should return Object', function () {
        const requestBody = getBySubject( mockSubjectId );
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
    });

    it('should to throw Error', function () {
        expect( getBySubject ).toThrow( Error );
    });

    it('should to throw TypeError', function () {
        const errorTypes = [ {}, () => 1, "string" ];
        errorTypes.forEach( payload => {
            expect( () => getBySubject(payload) ).toThrow( TypeError );
        })
    });
});

