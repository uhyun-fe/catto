class LoadingComp {
   constructor($app) {
      this.hidden_classname = "hidden";
      this.section = document.createElement("div");
      this.section.className = "Modal Loading hidden";

      const content = document.createElement("div");
      content.className = "content";

      const $img = document.createElement("img");
      $img.src = "src/assets/loader.jpeg";

      content.appendChild($img);
      this.section.appendChild(content);
      $app.appendChild(this.section);
   }

   setState({ is_loading }) {
      if (is_loading) this.section.classList.remove(this.hidden_classname);
      else this.section.classList.add(this.hidden_classname);
   }
}

export default LoadingComp;
