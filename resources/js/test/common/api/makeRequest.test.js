import makeRequest, { BASE_HEADERS}  from "../../../src/common/api/makeRequest";
import { processRequestData } from "../../../src/common/api/makeRequest";

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
    const apiCallTestCasesWithError = [ 1, null, {}, "string", true ];
    const requestBodyTestCasesWithError = [ , null, true, 1, "string", undefined ];

    const mockApiCall = ( data ) => data;
    const mockRequestObjects = [
        { url: "http://127.0.0.1/", uri: "test" },
        { url: "http://127.0.0.1/", uri: "test", method: "POST" },
        { url: "http://127.0.0.1/", uri: "test", method: "POST", body: { a: 1 } },
        { url: "http://127.0.0.1/", uri: "test", headers: { "TEST" : "TEST" } },
    ];

    it("should throw Error in wrong requestBody", () => {
        requestBodyTestCasesWithError.forEach( payload => {
            expect(() => {
                makeRequest( payload, mockApiCall );
            }).toThrow( Error );
        });
    });
    it("should throw Error in wrong apiCallArgument", () => {
        apiCallTestCasesWithError.forEach( apiCall => {
            expect(() => {
                makeRequest({}, apiCall );
            }).toThrow( Error );
        });
    });

    it("should return object", () => {
        mockRequestObjects.forEach( payload => {
            expect(() => {
                makeRequest( payload, mockApiCall );
            }).toBeInstanceOf( Object );

            expect( makeRequest( payload, mockApiCall ) ).toStrictEqual({
                url: `${ payload.url }${ payload.uri }`,
                method: payload.method || "GET",
                data: payload.body || {},
                headers: { ...BASE_HEADERS, ...( payload.headers || {} ) }
            });
        });
    });
});
