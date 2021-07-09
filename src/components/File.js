export default class File {
   constructor({ $target, data }) {
      this.file = document.createElement("div");
      this.file.className = "Node";
      this.file.dataset.filePath = data.filePath;
      this.file.dataset.nodeId = data.id;
      this.file.dataset.fileName = data.name;
      this.file.dataset.back = data.back;
      this.file_image = document.createElement("img");
      this.file_image.src = data.back ? "/src/assets/back.png" : data.filePath === null ? "/src/assets/folder.png" : "/src/assets/file.png";
      this.file_title = document.createElement("span");
      this.file_title.innerText = data.name;

      this.file.appendChild(this.file_image);
      this.file.appendChild(this.file_title);
      $target.appendChild(this.file);
   }
}
