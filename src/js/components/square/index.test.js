/* eslint-disable no-undef */
import Square from ".";

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
        })

        it("should return true when id is formatted properly", () => {
            expect(Square.isValidId("A1")).toBe(true)
            expect(Square.isValidId("H8")).toBe(true)
        })
    })
})