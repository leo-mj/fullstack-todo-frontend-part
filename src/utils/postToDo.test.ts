import { isVoidExpression } from "typescript";
import { postToDo } from "./postToDo";

test("expect postToDo to return void", () => {
  expect(postToDo("yay", "yay")).toBe(isVoidExpression);
});
