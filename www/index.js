import init, { greet } from "rust_workshop";

init().then(_ => {
  greet("Mike Shoyk");
})