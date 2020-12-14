import {
  memo,
  objectClone,
  objectTransformKeys,
  snakeCaseToLowerCamelCase,
  snakeCaseKebabCase
} from "../../src/common/helpers";

describe( objectClone.name, () => {
  it("should to throw TypeError", function () {
    expect( objectClone ).toThrow( TypeError );

    expect( () => {
      objectClone( null, []);
    }).toThrow( TypeError );

    expect( () => {
      objectClone( "string", []);
    }).toThrow( TypeError );

    expect( () => {
      objectClone({}, "string");
    }).toThrow( TypeError );
  });

  it("should to return new ref", function () {
    const testProperties = ["t", "newValue"];
    const testObject = { key: "test", t: "" };

    const clone = objectClone( testObject, [
      testProperties
    ]);

    expect( clone ).not.toBe( testObject );
    expect( clone ).toStrictEqual({
      ...testObject, [ testProperties[0] ]: testProperties[1]
    });
  });
});

describe( objectTransformKeys.name, () => {

  it("should to throw Error", function () {
    expect( objectTransformKeys ).toThrow( Error );
    expect(() => {
      objectTransformKeys( {} );
    }).toThrow( Error );
  });

  it("should to throw TypeError", function () {
    expect( () => {
      objectTransformKeys( null, () => 1 );
    }).toThrow( TypeError );

    expect( () => {
      objectTransformKeys({}, "string" );
    }).toThrow( TypeError );
  });

  it("should to convertObject keys", function () {
    const testObject = {
      snake_case: "value",
      another_snake_case: "anotherValue"
    };
    const transformedKeys = objectTransformKeys( testObject, snakeCaseToLowerCamelCase );

    expect( transformedKeys ).not.toStrictEqual({
      snakeCase: "value",
      another_snake_case: "anotherValue"
    });

    expect( transformedKeys ).toStrictEqual({
      snakeCase: "value",
      anotherSnakeCase: "anotherValue"
    });
  });
});



describe( snakeCaseToLowerCamelCase.name, function () {
  it("should to throw Error", function () {
    expect( snakeCaseToLowerCamelCase ).toThrow( Error );
  });

  it("should to return camelCaseString", function () {
    expect( snakeCaseToLowerCamelCase("AA") ).toBe( "AA" );
    expect( snakeCaseToLowerCamelCase("Aa") ).toBe( "Aa" );
    expect( snakeCaseToLowerCamelCase("a") ).toBe( "a" );
    expect( snakeCaseToLowerCamelCase("test_string") ).toBe( "testString" );
    expect( snakeCaseToLowerCamelCase("long_test_string_") ).toBe( "longTestString" );
    expect( snakeCaseToLowerCamelCase("_a") ).toBe( "a" );
    expect( snakeCaseToLowerCamelCase("b_a") ).toBe( "bA" );
    expect( snakeCaseToLowerCamelCase("____") ).toBe( "" );
  });
});

describe( snakeCaseKebabCase.name, function () {
  it("should to throw Error", function () {
    expect( snakeCaseKebabCase ).toThrow( Error );
  });

  it("should to return kebab-case string", function () {
    expect( snakeCaseKebabCase("AA") ).toBe( "AA" );
    expect( snakeCaseKebabCase("Aa") ).toBe( "Aa" );
    expect( snakeCaseKebabCase("a") ).toBe( "a" );
    expect( snakeCaseKebabCase("test_string") ).toBe( "test-string" );
    expect( snakeCaseKebabCase("long_test_string_") ).toBe( "long-test-string" );
    expect( snakeCaseKebabCase("_a") ).toBe( "a" );
    expect( snakeCaseKebabCase("b_a") ).toBe( "b-a" );
    expect( snakeCaseKebabCase("____") ).toBe( "" );
  });
});

describe( memo.name, function () {
  it("should to throw Error", function () {
    expect( memo ).toThrow( Error );
  });

  it("should to throw TypeError", function () {
    expect( () => memo("string") ).toThrow( TypeError );
    expect( () => memo(1) ).toThrow( TypeError );
    expect( () => memo({}) ).toThrow( TypeError );
    expect( () => memo([]) ).toThrow( TypeError );
  });

  it("should to return function", function () {
    const mockFunc = memo( () => 1 );
    expect( () => mockFunc() ).toBeInstanceOf( Function );
  });
});
