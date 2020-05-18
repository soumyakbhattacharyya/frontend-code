
Vue.component('detail',{
    template: `
    <div>
       <h1 v-on:click='change(val)'>{{val}}</h1>
       <h2>{{someOtherValue}}</h2>
    </div>      
    `,
    data() {
        return {val: 1}
    },
    methods: {
        change(arg){
            this.val = arg + 5
        }
    },
    computed: {
        someOtherValue(){return this.val * 9;}
    }
})
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: 'vmSocks-green-onWhite.jpg',
        information: 'https://en.wikipedia.org/wiki/Sock',
        stock: 5,
        onSale: true,
        selectedIndex: 0,
        contentAttributes: ['Polyester', 'Artificial Colour', 'Elastic'],
        infos: [{
            key: '1',
            qualifier: 'weight',
            value: '99.8 g'
        },
        {
            key: '2',
            qualifier: 'item number',
            value: 'SCS - 2701'
        },
        {
            key: '3',
            qualifier: 'ASIN',
            value: 'B07PWPR88H'
        },
        {
            key: '4',
            qualifier: 'Date of Arrival',
            value: '22 March 2019'
        }

        ],
        cart: 0,
        variants: [
            { variant: 'green', brand: "A", file: 'vmSocks-green-onWhite.jpg' },
            { variant: 'blue', brand: "B", file: 'vmSocks-blue-onWhite.jpg' },
        ]
    },
    methods: {
        addToCart() {
            this.cart = this.cart + 1
            console.log(this.cart)
        },
        removeFromCart() {
            this.cart = this.cart - 1
            console.log(this.cart)
        },
        colorChosen(color) {
            this.image = color.file
        },
        variantChosen(index){
            this.selectedIndex = index
            console.log(index)
        }

    },
    computed: {
        brandInfo() {
            return this.variants[this.selectedIndex].brand + " " + this.product
        }
    }

})
