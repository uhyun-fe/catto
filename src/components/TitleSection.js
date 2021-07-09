export default class TitleSection {
   constructor({ $target }) {
      this.section = document.createElement("h1");
      this.section.className = "main_title";
      this.section.innerHTML = `caTTo 고양이 사진첩`;

      $target.appendChild(this.section);
   }
}
