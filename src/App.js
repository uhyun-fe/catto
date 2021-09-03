// Components
import LoadingComp from "./components/LoadingComp.js";
import ErrorComp from "./components/ErrorComp.js";
import BreadCrumb from "./components/BreadCrumb.js";
import Nodes from "./components/Nodes.js";
import ImageViewer from "./components/ImageViewer.js";

// Api
import { api } from "./utils/api.js";

const cache = {};

class App {
   constructor($app) {
      this.loading = new LoadingComp($app);
      this.error = new ErrorComp($app);

      this.root = [];

      this.breadCrumb = new BreadCrumb($app);
      this.nodes = new Nodes($app);
      this.imageViewer = new ImageViewer({
         $app,
         setError: () => this.error.setState({ status: "403", message: "해당 이미지를 불러올 수 없습니다." }),
      });

      this.init();
   }

   async init() {
      this.root.push({ id: 0, title: "root" });
      const rootId = this.root[0].id;
      cache[rootId] = await this.getTopNodes();
      this.nodes.setNodes({ nodes: cache[rootId], id: rootId });
      this.breadCrumb.setState(this.root);

      this.onClickEvent();
      this.onKeyPressEvent();
   }

   // 최상위 경로 파일 조회
   getTopNodes = async () => {
      this.loading.setState({ is_loading: true });
      const res = await api.getRootNodes();
      if (!res.isError) {
         this.loading.setState({ is_loading: false });
         return res.data;
      } else {
         this.error.setState(res.data);
      }
   };

   // 하위 경로 파일 조회
   getLowNodes = async (id) => {
      if (cache[id]) return cache[id];
      this.loading.setState({ is_loading: true });
      const res = await api.getLowLevelNodes(id);
      if (!res.isError) {
         this.loading.setState({ is_loading: false });
         cache[id] = res.data;
         return res.data;
      } else {
         this.error.setStatus(res.data);
      }
   };

   // 클릭이벤트
   onClickEvent() {
      document.body.addEventListener("click", async ({ path }) => {
         // BreadCrumb에서 특정 경로 선택
         const crumb = path.find((p) => p.className === "crumb");
         if (crumb) {
            const selected = this.root.find((r) => r.title === crumb.innerText);
            const idx = this.root.indexOf(selected);
            if (idx === this.root.length - 1) return;
            this.root = this.root.splice(0, idx + 1);
            this.breadCrumb.setState(this.root);
            const last = this.root[this.root.length - 1];
            const data = await this.getLowNodes(last.id);
            this.nodes.setNodes({ nodes: data, id: last.id });
            return;
         }

         // 아이템 클릭
         const node = path.find((p) => p.className === "Node");
         if (node) {
            const node_id = node.dataset.node_id;
            if (node_id) {
               // 디렉토리일 경우
               const data = await this.getLowNodes(node_id);
               this.root.push({ id: node_id, title: node.innerText });
               this.breadCrumb.setState(this.root);
               this.nodes.setNodes({ nodes: data, id: node_id });
            } else if (node.dataset.path) {
               // 사진일 경우
               this.imageViewer.setImage(node.dataset.path);
            } else {
               // 뒤로가기일 경우
               this.root.pop();
               this.breadCrumb.setState(this.root);
               const last = this.root[this.root.length - 1];
               const data = await this.getLowNodes(last.id);
               this.nodes.setNodes({ nodes: data, id: last.id });
            }
            return;
         }

         // 이미지뷰어 모달밖 영역 클릭
         const outOfModal = path.filter((p) => p.className === "Modal ImageViewer" || p.className === "content");
         if (outOfModal.length === 1) {
            return this.imageViewer.closing();
         }

         // reload 버튼 클릭
         const reload = path.find((p) => p.className === "reload");
         if (reload) document.location.reload();
      });
   }

   // keypress이벤트
   onKeyPressEvent() {
      document.body.addEventListener("keydown", ({ key }) => {
         if (key === "Escape") return this.imageViewer.closing();
      });
   }
}

export default App;
