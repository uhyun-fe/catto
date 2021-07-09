import { getItem } from "../utill/sessionStorage.js";

export default class Route {
   constructor({ $target }) {
      this.$target = $target;
      this.routeNav = document.createElement("nav");
      this.routeNav.className = "route_nav";

      this.data = [];

      $target.appendChild(this.routeNav);
   }

   setData() {
      this.data = getItem("route");
      this.render();
   }

   render() {
      this.routeNav.innerHTML = "";
      for (let i = 0; i < this.data.length; i++) {
         const route_span = document.createElement("span");
         route_span.className = "route_span";
         route_span.innerText = this.data[i].name;
         this.routeNav.appendChild(route_span);
      }
   }
}
