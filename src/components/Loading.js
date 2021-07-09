export default class Loading {
    constructor({$target}) {
        this.wrapper = document.createElement("div");
        this.wrapper.className = "loading_wrapper";
        this.wrapper.classList.add("hidden");

        $target.appendChild(this.wrapper);

        this.render();
    }

    toggling() {
        const loader = document.querySelector(".loading_wrapper");
        loader.classList.toggle("hidden");
    }

    render() {
        const loaderImage = document.createElement("img");
        loaderImage.className = "loader_image";
        loaderImage.src = "src/assets/loader.jpeg";

        this.wrapper.appendChild(loaderImage);
    }
}