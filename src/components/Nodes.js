class Nodes {
   constructor($app) {
      this.section = document.createElement("div");
      this.section.className = "Nodes";

      $app.appendChild(this.section);
   }

   getNodeElement() {
      const item = document.createElement("div");
      item.className = "Node";
      const img = document.createElement("img");
      item.appendChild(img);
      return { item, img };
   }

   setNodes({ nodes, id }) {
      this.section.innerHTML = "";

      if (id !== 0) {
         // 첫 루트가 아닌 경우 (뒤로가기버튼 필요)
         const { item, img } = this.getNodeElement();
         img.src = "src/assets/back.jpg";
         this.section.appendChild(item);
      }

      nodes.forEach((node) => {
         const { item, img } = this.getNodeElement();

         if (node.filePath) {
            // 사진인 경우
            img.src = "src/assets/file.jpg";
            item.dataset.path = node.filePath;
         } else {
            // directory인 경우
            img.src = "src/assets/folder.jpg";
            item.dataset.node_id = parseInt(node.id);
         }

         const title = document.createElement("div");
         title.innerText = node.name;
         item.appendChild(title);
         this.section.appendChild(item);
      });
   }
}

export default Nodes;
