import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("only first parameter", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("first parameter with additional classes", () => {
    expect(classNames("someClass", {}, ["first", "second"])).toBe(
      "someClass first second"
    );
  });

  test("all parameters, mods is true", () => {
    expect(
      classNames("someClass", { hovered: true, visible: true }, [
        "first",
        "second",
      ])
    ).toBe("someClass hovered visible first second");
  });

  test("all parameters, mods is false", () => {
    expect(
      classNames("someClass", { hovered: false, visible: false }, [
        "first",
        "second",
      ])
    ).toBe("someClass first second");
  });

  test("all parameters, mods is true and false", () => {
    expect(
      classNames("someClass", { hovered: true, visible: false }, [
        "first",
        "second",
      ])
    ).toBe("someClass hovered first second");
  });

  test("all parameters, mods is undefined", () => {
    expect(
      classNames("someClass", { hovered: undefined, visible: undefined }, [
        "first",
        "second",
      ])
    ).toBe("someClass first second");
  });
});
