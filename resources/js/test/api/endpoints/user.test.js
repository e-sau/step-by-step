import { get } from "../../../src/api/endpoints/user";

describe("Testing 'getUser( token )' from 'users' endpoints", () => {

  it("should return Object", function () {
    const requestBody = get();
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("user");
    expect( requestBody.body ).toBe( undefined );
  });
});
