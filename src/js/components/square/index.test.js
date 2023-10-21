/* eslint-disable no-undef */
import Square from ".";
import { InvalidIdentifierError } from "../../lib/errors";
import { jest } from '@jest/globals';

describe("Square", () => {
    describe("isValidId", () => {
        it("should return false when id is not a string", () => {
            [12, undefined, null, [], {}, false, Symbol()].forEach((value) => {
                expect(Square.isValidId(value)).toBe(false)
            })
        })

        it("should return false when id isn't formatted properly", () => {
            expect(Square.isValidId("AA")).toBe(false)
            expect(Square.isValidId("11")).toBe(false)
            expect(Square.isValidId("1A")).toBe(false)
            expect(Square.isValidId("K1")).toBe(false)
            expect(Square.isValidId("A9")).toBe(false)
            expect(Square.isValidId("A81")).toBe(false)
            expect(Square.isValidId("A")).toBe(false)
        })

        it("should return true when id is formatted properly", () => {
            expect(Square.isValidId("A1")).toBe(true)
            expect(Square.isValidId("H8")).toBe(true)
        })
    })

    describe("createElement", () => {
        let createElementSpy;
        let classListAddSpy;

        beforeEach(() => {
            createElementSpy = jest.spyOn(document, "createElement");
            classListAddSpy = jest.fn();
            createElementSpy.mockReturnValue({ classList: { add: classListAddSpy } });
        });

        afterEach(() => {
            createElementSpy.mockRestore();
        });


        it("should throw an error for an invalid ID", () => {
            expect(() => new Square("invalid", true)).toThrow(InvalidIdentifierError);
        });

        it("should throw an error if isWhite is not boolean", () => {
            expect(() => new Square("A1", null)).toThrow("isWhite must be a boolean value");
        });

        it("should create a white square", () => {
            new Square("A1", true);
            expect(createElementSpy).toHaveBeenCalledWith("div");
            expect(classListAddSpy).toHaveBeenCalledWith("square");
        });

        it("should create a black square", () => {
            new Square("A1", false);
            expect(createElementSpy).toHaveBeenCalledWith("div");
            expect(classListAddSpy).toHaveBeenCalledWith("square");
            expect(classListAddSpy).toHaveBeenCalledWith("square--black");
        });
    })
})