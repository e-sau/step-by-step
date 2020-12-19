const { getAll, getByGrade, getCompleted } = require("../../../src/api/endpoints/subjects");

describe( getAll.name, () => {
  it("should return Object", function () {
    const requestBody = getAll();
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe("subjects");
  });
});

describe( getByGrade.name, () => {
  it("should return Object", function () {
    const testSubjectID = 1;
    const requestBody = getByGrade( testSubjectID );
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe(`subjects/getByGrade/${ testSubjectID }`);
  });

  it("should to throw Error", function () {
    expect( getByGrade ).toThrow( Error );
  });

  it("should to throw TypeError", function () {
    [ {}, () => 1, "string" ].forEach( payload => {
      expect( () => getByGrade(payload) ).toThrow( TypeError );
    });
  });
});

describe( getCompleted.name, () => {
  it("should to throw Error", function () {
    expect( getCompleted ).toThrow( Error );
  });

  it("should to throw TypeError", function () {
    [ {}, () => 1, "string" ].forEach( payload => {
      expect( () => getCompleted(payload) ).toThrow( TypeError );
    });
  });

  it("should return Object", function () {
    const ID = 1;
    const requestBody = getCompleted( ID );
    expect( requestBody ).toBeInstanceOf( Object );
    expect( requestBody.uri ).toBe(`subjects/completed/${ ID }`);
  });
});
