const app = new Vue({
    el: "#app",

    data: {
        counter: 0,
        images: [
            "./assets/img/Yosemite-01.jpeg",
            "./assets/img/Yosemite-02.jpeg",
            "./assets/img/Yosemite-03.jpeg",
            "./assets/img/Yosemite-04.jpeg",
        ],
    },

    methods: {
        showNext() {
            // Shows next picture
            if (this.counter === this.images.length - 1) {
                return this.counter = 0;
            }
            return this.counter += 1;
        },
        showPrev() {
            // Shows previous picture
            if (this.counter === 0) {
                return this.counter = this.images.length - 1
            }
            return this.counter -= 1;
        }
    }
})