import { api } from "../api.js";
import { Route, Album, DetailModal } from "./index.js";
import { getItem, setItem } from "../utill/sessionStorage.js";

export default class MainSection {
   constructor({ $target, loading, error }) {
      this.$target = $target;
      this.section = document.createElement("div");
      this.section.className = "main";
      this.loading = loading;
      this.error = error;

      this.route = new Route({ $target: this.section });
      this.album = new Album({ $target: this.section });
      this.modal = new DetailModal({ $target });

      $target.appendChild(this.section);

      this.getTopLevelPhotos();
      this.onClickEvent();
   }

   setData(data) {
      this.route.setData();
      this.album.setData(data);
   }

   // 최상위 데이터 조회
   async getTopLevelPhotos() {
      this.loading.toggling();
      const response = await api.getTopLevelPhotos();
      if (!response.isError) {
         setItem("route", [{ id: 0, name: "root" }]);
         this.setData(response.data);
         this.loading.toggling();
      } else {
         this.error.setStatus(response.data);
      }
   }

   // 하위 데이터 조회
   async getLowLevelPhotos({ node_id, file_name }) {
      this.loading.toggling();
      const response = await api.getLowLevelPhotos({ node_id });
      if (!response.isError) {
         const now_route = getItem("route");
         setItem("route", file_name ? now_route.concat({ id: node_id, name: file_name }) : now_route.filter((n, i, o) => i < o.length - 1));
         this.setData(response.data);
         this.loading.toggling();
      } else {
         this.error.setStatus(response.data);
      }
   }

   // 클릭이벤트
   onClickEvent() {
      this.$target.addEventListener("click", ({ path }) => {
         const modal = path.find((c) => c.className === "modal_box");
         if (modal) return;

         const card = path.find((c) => c.className === "Node");
         if (card) {
            if (card.dataset.filePath !== "null") {
               this.modal.setData(card.dataset.filePath);
            } else {
               if (card.dataset.back === "true") {
                  const now_route = getItem("route");
                  if (now_route.length < 3) this.getTopLevelPhotos();
                  else this.getLowLevelPhotos({ node_id: now_route[now_route.length - 1].id, file_name: undefined });
               } else this.getLowLevelPhotos({ node_id: card.dataset.nodeId, file_name: card.dataset.fileName });
            }
         } else this.modal.setData(null);

         // 루트
         const route = path.find((c) => c.className === "route_span");
         if (!route) return;
         const nowRoute = getItem("route");
         const title = route.innerText;
         const current = nowRoute.find((c) => c.name === title);
         const idx = nowRoute.indexOf(current);
         if (idx < nowRoute.length - 1) {
            if (!idx) this.getTopLevelPhotos();
            else {
               setItem("route", nowRoute.slice(0, idx + 2));
               this.getLowLevelPhotos({ node_id: current.id, file_name: undefined });
            }
         }
      });

      // esc
      window.addEventListener("keyup", ({ code }) => {
         if (code === "Escape") this.modal.setData(null);
      });
   }
}
