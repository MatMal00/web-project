import { ApiService } from "./api";

export function setupCounter(element: HTMLButtonElement) {
  const api = new ApiService("");
  let counter: number;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener("click", () => {
    const count = counter + 1;

    api.set("counter", counter + 1);
    setCounter(count);
  });

  setCounter(api.get<number>("counter") ?? 0);
}
