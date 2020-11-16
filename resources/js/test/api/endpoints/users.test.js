import { User } from "../../../src/models/User";
import { signup, login, getUser } from "../../../src/api/endpoints/users";

describe("Testing 'signup()' from 'users' endpoints", () => {
    it('should return Object', function () {
        const requestBody = signup( new User() );

        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).toBe("register");
        expect( requestBody.method ).toBe( "POST" );
        expect( requestBody.body ).toBeInstanceOf( Object );
        expect( requestBody.body ).toStrictEqual( (new User()).getData() );
    });

    it('should throw TypeError', function () {
        [ {}, 1, "string", null, undefined ].forEach( payload => {
            expect( () => signup( payload ) ).toThrow( TypeError );
        });
    });
});

describe("Testing 'login()' from 'users' endpoints", () => {
    it('should return Object', function () {
        const email = "123@test.tt";
        const password = "1234";

        const requestBody = login( email, password );

        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).toBe("login");
        expect( requestBody.method ).toBe( "POST" );
        expect( requestBody.body ).toBeInstanceOf( Object );
        expect( requestBody.body ).toStrictEqual({
            email, password
        });
    });

    it('should throw Error', function () {
        expect( () => signup( "123@test.tt" ) ).toThrow( Error );
        expect( () => signup( null, "1234" ) ).toThrow( Error );
    });
});

describe("Testing 'getUser( token )' from 'users' endpoints", () => {

    it('should return Object', function () {
        const mockToken =  btoa("asdsdasdad");
        const requestBody = getUser( mockToken );

        expect( requestBody ).toBeInstanceOf( Object );
        expect( requestBody.uri ).toBe("user");
        expect( requestBody.headers ).toBeInstanceOf( Object );
        expect( requestBody.headers ).toStrictEqual({
            'Authorization': `Bearer ${ mockToken }`
        });
    });

    it('should throw Error', function () {
        expect( signup ).toThrow( Error );
    });
});
