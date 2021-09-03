class ErrorComp {
   constructor($app) {
      this.$app = $app;
      this.error = null;
      this.hidden_classname = "hidden";

      this.section = document.createElement("section");
      this.section.className = "error_section";

      this.title = document.createElement("h2");
      this.title.innerText = "ERROR!!";

      this.statusCode = document.createElement("p");
      this.message = document.createElement("p");
      this.reloadButton = document.createElement("button");
      this.reloadButton.className = "reload";
      this.reloadButton.innerText = "reload";

      this.render();
   }

   setState(data) {
      this.error = data;
      this.render();
   }

   render() {
      if (!this.error) return this.section.classList.add(this.hidden_classname);

      this.$app.innerHTML = "";

      this.statusCode.innerText = this.error.status;
      this.message.innerText = this.error.message;

      this.section.appendChild(this.title);
      this.section.appendChild(this.statusCode);
      this.section.appendChild(this.message);
      this.section.appendChild(this.reloadButton);
      this.$app.appendChild(this.section);

      this.section.classList.remove(this.hidden_classname);
   }
}

export default ErrorComp;
