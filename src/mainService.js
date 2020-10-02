export default class MainService {
  constructor({ targetEl }) {
    this.targetEl = targetEl;
    this.dataList = "";
  }

  init(dataList) {
    this.dataList = dataList.join("");
    this.render(this.dataList);
  }

  render(data) {
    this.targetEl.innerHTML = `<span>${data}</span>`;
  }
}
