import { decode, encode } from "./functions";

describe("encode function tests", () => {
  it("should encode english", () => {
    expect(encode("a")).toBe(".-");
    expect(encode("hello friends")).toBe(
      ".... . .-.. .-.. --- / ..-. .-. .. . -. -.. ..."
    );
  });

  it("should handle uppercase characters", () => {
    expect(encode("A")).toBe(".-");
  });

  it("should throw an error and give user feedback if any not alphabet, spaces or numbers are inputed", () => {
    expect(() => encode(".-")).toThrow("Unsupported");
  });

  it("should translate morse code into englis", () => {});
});

describe("decode function tests", () => {
  it("should ecode english", () => {
    expect(decode(".-")).toBe("a");
    expect(decode(".- ... -.. / .- ... -..")).toBe("asd asd");
    expect(decode(".... . .-.. .-.. --- / ..-. .-. .. . -. -.. ...")).toBe(
      "hello friends"
    );
  });
  it("should throw an error if any invalid characters are entered. ie . = / ", () => {
    expect(() => decode("hello")).toThrow("Unsupported");
  });

  it();

  expect(decode("...........")).toBe("#");
});
