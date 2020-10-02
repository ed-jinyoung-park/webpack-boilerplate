import MainService from "./mainService.js";

window.addEventListener("DOMContentLoaded", () => {
  const targetEl = document.querySelector("#root");

  const service = new MainService({ targetEl });
  const datalist = [1, 2, 3, 4];
  service.init(datalist);

  targetEl.innerHTML += `datalist is ${service.dataList}`;
});
