export default class DetailModal {
   constructor({ $target }) {
      this.src = "";
      this.basic_src = "https://www.naver.com"; // 이미지 불러올 api
      this.section = document.createElement("div");
      this.section.className = "detail_modal";
      this.section.classList.add("hidden");
      this.box = document.createElement("div");
      this.box.className = "modal_box";
      this.img = document.createElement("img");

      this.section.appendChild(this.box);
      $target.appendChild(this.section);
   }

   setData(src) {
      this.src = src;
      if (src !== null) {
         this.section.classList.remove("hidden");
         this.render();
      } else this.section.classList.add("hidden");
   }

   render() {
      //   this.img.src = this.basic_src + this.src; // api 없음
      this.img.src = "/src/assets/sample1.jpeg";

      this.box.appendChild(this.img);
   }
}
