import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const returnWhatIPassIn = <T>(t: T) => t;

it("Should ONLY allow strings to be passed in", () => {
  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>;

  returnWhatIPassIn(1);

  returnWhatIPassIn(true);

  returnWhatIPassIn({
    foo: "bar",
  });
});
