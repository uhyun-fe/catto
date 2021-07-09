import { getItem } from "../utill/sessionStorage.js";
import { File } from "./index.js";

export default class Album {
   constructor({ $target }) {
      this.section = document.createElement("div");
      this.section.className = "Nodes";
      this.data = [];

      $target.appendChild(this.section);
   }

   setData(data) {
      this.data = data;
      this.render();
   }

   render() {
      this.section.innerHTML = "";
      if (getItem("route").length > 1) new File({ $target: this.section, data: { id: 0, name: "", filePath: null, back: true } });
      this.data.map((cat) => {
         new File({ $target: this.section, data: cat });
      });
   }
}
