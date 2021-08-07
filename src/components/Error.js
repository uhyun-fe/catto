export default class Error {
   constructor({ $target }) {
      this.$target = $target;
      this.error = null;

      this.render();
   }

   setStatus(data) {
      this.error = data;
      this.render();
   }

   render() {
      if (!this.error) return;

      this.$target.innerHTML = "";

      const section = document.createElement("section");
      section.className = "error_section";

      const img = document.createElement("img");
      img.className = "error_image";
      img.src = "src/assets/error.jpeg";

      const statusCode = document.createElement("p");
      statusCode.className = "status_code";
      statusCode.innerText = this.error.status;

      const errorMessage = document.createElement("p");
      errorMessage.className = "error_message";
      errorMessage.innerText = this.error.message;

      const returnButton = document.createElement("button");
      returnButton.className = "return_button";
      returnButton.innerText = "돌아가기";
      returnButton.addEventListener("click", () => {
         location.reload();
      });

      section.appendChild(img);
      section.appendChild(statusCode);
      section.appendChild(errorMessage);
      section.appendChild(returnButton);

      this.$target.appendChild(section);
   }
}
