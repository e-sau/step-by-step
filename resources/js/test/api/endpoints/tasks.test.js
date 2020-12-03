const { getAll, getBySubject } = require("../../../src/api/endpoints/tasks");

describe("Testing 'getAll()' from 'tasks' endpoints", () => {
    it('should return Object', function () {
        const requestBody = getAll();
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).toBe("tasks");
    });
});

describe("Testing 'getBySubject()' from 'tasks' endpoints", () => {
    it('should return Object', function () {
        const subjectID = 1;
        const requestBody = getBySubject( subjectID );
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).toBe(`tasks/getBySubject/${ subjectID }`);
    });

    it('should to throw Error', function () {
        expect( getBySubject ).toThrow( Error );
    });

    it('should to throw TypeError', function () {
        [ {}, () => 1, "string" ].forEach( payload => {
            expect( () => getBySubject(payload) ).toThrow( TypeError );
        })
    });
});

