import { get, update, savePhoto } from "../../../src/api/endpoints/user";
import { Model } from "../../../src/models/Model";
import { User } from "../../../src/models/User";

describe( get.name, () => {
  it("should return Object", function () {
    const requestBody = get();
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("user");
  });
});

describe( update.name, () => {
  it("should throw TypeError", function () {
    [ null, undefined, 1, "string", {}, Model ].forEach( payload => {
      expect( () => update( payload ) ).toThrow( TypeError );
    });
  });

  it("should return Object", function () {
    const user = User.buildUser({ id: 1 });
    const requestBody = update( user );

    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe(`users/${ user.id }`);
    expect( requestBody.method ).toBe("PUT");
    expect( requestBody.body ).toStrictEqual( user.getData() );
  });
});

describe( savePhoto.name, () => {
  it("should throw TypeError", function () {
    [ null, undefined, 1, "string", {}, Model ].forEach( payload => {
      expect( () => savePhoto( payload ) ).toThrow( TypeError );
    });
  });
  it("should return Object", function () {
    const file = new File([], "test");
    const requestBody = savePhoto( file );

    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("user/avatar");
    expect( requestBody.method ).toBe("POST");
    expect( requestBody.body ).toBeInstanceOf( FormData );
  });
});
