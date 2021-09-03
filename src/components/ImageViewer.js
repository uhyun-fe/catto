const BASIC_URI = "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public";

class ImageViewer {
   constructor({ $app, setError }) {
      this.hidden_classname = "hidden";

      this.section = document.createElement("div");
      this.section.className = "Modal ImageViewer hidden";
      this.content = document.createElement("div");
      this.content.className = "content";
      this.$img = document.createElement("img");
      this.$img.addEventListener("error", () => {
         setError();
         this.closing();
      });

      // onError(() => setError());

      this.content.appendChild(this.$img);
      this.section.appendChild(this.content);
      $app.appendChild(this.section);
   }

   setImage(filePath) {
      this.section.classList.remove(this.hidden_classname);
      this.$img.src = BASIC_URI + filePath;
   }

   closing() {
      this.section.classList.add(this.hidden_classname);
   }
}

export default ImageViewer;
