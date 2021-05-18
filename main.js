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
        position: 'first',
        circleColor: 'white',
        active: false,
    },

    methods: {
        showNext() {
            // Shows next picture
            if (this.counter === this.images.length - 1) {
                return this.counter = 0, this.position = 'first', active = true;
            } else if (this.counter === this.images.length - 2) {
                return this.counter += 1, this.position = 'last', active = true;
            }
            return this.counter += 1, this.position = ' ', active = true;
        },
        showPrev() {
            // Shows previous picture
            if (this.counter === 0) {
                return this.counter = this.images.length - 1, this.position = 'last', active = true;
            } else if (this.counter === 1) {
                return this.counter -= 1, this.position = 'first', active = true;
            }
            return this.counter -= 1, this.position = ' first', active = true;
        },
    }
})