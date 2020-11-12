import { User } from "../../../../src/models/User";
const { signup, login } = require("../../../../src/common/api/endpoints/users");

describe("Testing 'signup()' from 'users' endpoints", () => {
    const mockUser = new User();
    const errorArgumentTestCases = [
        {}, 1, "string", null, undefined,
    ];
    it('should return Object', function () {
        const requestBody = signup( mockUser );
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
        expect( requestBody.method ).toBe( "POST" );
        expect( requestBody.body ).toBeInstanceOf( Object );
    });

    it('should throw TypeError', function () {
        errorArgumentTestCases.forEach( payload => {
            expect( () => signup( payload ) ).toThrow( TypeError );
        });
    });
});

describe("Testing 'login()' from 'users' endpoints", () => {
    it('should return Object', function () {
        const requestBody = login( "123@test.tt", "1234" );
        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
        expect( requestBody.method ).toBe( "POST" );
        expect( requestBody.body ).toBeInstanceOf( Object );
    });

    it('should throw Error', function () {
        expect( () => signup( "123@test.tt" ) ).toThrow( Error );
        expect( () => signup( null, "1234" ) ).toThrow( Error );
    });
});
