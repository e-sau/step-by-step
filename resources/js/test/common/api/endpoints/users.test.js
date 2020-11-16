import { User } from "../../../../src/models/User";
import { signup, login, getUser } from "../../../../src/common/api/endpoints/users";

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

describe("Testing 'getUser( token )' from 'users' endpoints", () => {
    const mockToken =  btoa("asdsdasdad");
    it('should return Object', function () {
        const requestBody = getUser( mockToken );

        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).not.toBeUndefined();
        expect( requestBody.headers ).toBeInstanceOf( Object );
        expect( requestBody.headers ).toStrictEqual({
            'Authorization': `Bearer ${ mockToken }`
        });
    });

    it('should throw Error', function () {
        expect( signup ).toThrow( Error );
    });
});
