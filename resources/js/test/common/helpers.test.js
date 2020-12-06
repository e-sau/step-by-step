import { object, string, func } from "../../src/common/helpers";

describe("Testing objectHelpers", () => {

  describe("testing update function", () => {
    it("should to throw TypeError", function () {
      expect( object.update ).toThrow( TypeError );
      expect( () => {
        object.update( null, []);
      }).toThrow( TypeError );
      expect( () => {
        object.update( "string", []);
      }).toThrow( TypeError );

      expect( () => {
        object.update({}, "string");
      }).toThrow( TypeError );
    });

    it("should to return new ref", function () {
      const testProperties = ["t", "newValue"];
      const testObject = { key: "test", t: "" };

      const clone = object.update( testObject, [
        testProperties
      ]);

      expect( clone ).not.toBe( testObject );
      expect( clone ).toStrictEqual({
        ...testObject, [ testProperties[0] ]: testProperties[1]
      });
    });
  });

  describe("testing keysTransform function", () => {

    it("should to throw Error", function () {
      expect( object.keysTransform ).toThrow( Error );
      expect(() => {
        object.keysTransform( {} );
      }).toThrow( Error );
    });

    it("should to throw TypeError", function () {
      expect( () => {
        object.keysTransform( null, () => 1 );
      }).toThrow( TypeError );

      expect( () => {
        object.keysTransform({}, "string" );
      }).toThrow( TypeError );
    });

    it("should to convertObject keys", function () {
      const testObject = {
        snake_case: "value",
        another_snake_case: "anotherValue"
      };
      const transformedKeys = object.keysTransform( testObject, string.snakeCaseToCamelCase );

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
});

describe("Testing stringHelpers", () => {
  describe("testing snakeCaseToCamelCase function", function () {
    it("should to throw Error", function () {
      expect( string.snakeCaseToCamelCase ).toThrow( Error );
    });

    it("should to return camelCaseString", function () {
      expect( string.snakeCaseToCamelCase("a") ).toBe( "a" );
      expect( string.snakeCaseToCamelCase("test_string") ).toBe( "testString" );
      expect( string.snakeCaseToCamelCase("long_test_string_") ).toBe( "longTestString" );
      expect( string.snakeCaseToCamelCase("_a") ).toBe( "a" );
      expect( string.snakeCaseToCamelCase("b_a") ).toBe( "bA" );
    });
  });
});

describe("Testing funcHelpers", () => {
  describe("testing memo function", function () {
    it("should to throw Error", function () {
      expect( func.memo ).toThrow( Error );
    });

    it("should to throw TypeError", function () {
      expect( () => func.memo("string") ).toThrow( TypeError );
      expect( () => func.memo(1) ).toThrow( TypeError );
      expect( () => func.memo({}) ).toThrow( TypeError );
      expect( () => func.memo([]) ).toThrow( TypeError );
    });

    it("should to return function", function () {
      const mockFunc = func.memo( () => 1 );
      expect( () => mockFunc() ).toBeInstanceOf( Function );
    });
  });
});
