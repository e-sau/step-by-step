import makeRequest, { BASE_HEADERS }  from "../../src/api/makeRequest";
import { processRequestData } from "../../src/api/makeRequest";

describe("Testing processRequestData()", () => {
    const testCases = [
        () => true, { a: 1 }, true, 1, "string"
    ];
    it("should return result equals of Test cases", () => {
        testCases.forEach( payload => {
            const isFunction = ( typeof payload === "function" );
            expect( processRequestData( payload ) )
                .toEqual( isFunction ? payload() : payload );
        });
    });
});

describe("Testing makeRequest()", () => {
    const mockApiCall = ( data ) => data;

    it("should throw Error in wrong requestBody", () => {
        expect(() => { makeRequest( null, mockApiCall ) }).toThrow( Error );
        expect(() => { makeRequest( undefined, mockApiCall ) }).toThrow( Error );
        expect(() => { makeRequest( true, mockApiCall ) }).toThrow( Error );
        expect(() => { makeRequest( 1, mockApiCall ) }).toThrow( Error );
        expect(() => { makeRequest( "string", mockApiCall ) }).toThrow( Error );
    });
    it("should throw Error in wrong apiCallArgument", () => {
        expect(() => { makeRequest({}, 1 ) }).toThrow( Error );
        expect(() => { makeRequest({}, null ) }).toThrow( Error );
        expect(() => { makeRequest({},  "string" ) }).toThrow( Error );
        expect(() => { makeRequest({}, true ) }).toThrow( Error );
    });

    it("should return object", () => {
        const mockRequestObjects = [
            { url: "http://127.0.0.1/", uri: "test" },
            { url: "http://127.0.0.1/", uri: "test", method: "POST" },
            { url: "http://127.0.0.1/", uri: "test", method: "POST", body: { a: 1 } },
            { url: "http://127.0.0.1/", uri: "test", headers: { "TEST" : "TEST" } },
        ];

        mockRequestObjects.forEach( payload => {
            expect(() => { makeRequest( payload, mockApiCall ) }).toBeInstanceOf( Object );

            expect( makeRequest( payload, mockApiCall ) ).toStrictEqual({
                url: `${ payload.url }${ payload.uri }`,
                method: payload.method || "GET",
                data: payload.body || {},
                headers: { ...BASE_HEADERS, ...( payload.headers || {} ) }
            });
        });
    });
});
