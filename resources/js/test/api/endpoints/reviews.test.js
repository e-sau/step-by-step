const { getAll } = require("../../../src/api/endpoints/reviews");

describe( getAll.name, () => {
  it("should return Object", function () {
    const requestBody = getAll();
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("reviews?with=user");
  });
});
