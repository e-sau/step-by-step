const { getAll } = require("../../../src/api/endpoints/grades");

describe( getAll.name , () => {
  it("should return Object", function () {
    const requestBody = getAll();
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("grades");
  });
});
