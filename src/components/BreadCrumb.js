class BreadCrumb {
   constructor($app) {
      this.roots = [];

      this.nav = document.createElement("nav");
      this.nav.className = "Breadcrumb";

      $app.appendChild(this.nav);
   }

   setState(data) {
      this.roots = data;
      this.render();
   }

   render() {
      this.nav.innerHTML = "";

      this.roots.forEach((r) => {
         const item = document.createElement("div");
         item.className = "crumb";
         item.innerText = r.title;
         this.nav.appendChild(item);
      });
   }
}

export default BreadCrumb;
