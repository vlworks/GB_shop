Vue.component('products', {
    data(){
      return {
          products: [],
      }
    },
    methods: {

    },
    mounted(){
        this.$parent.getJson(`db/products.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            })
    },
    template: `<div class="products">
        <product 
        v-for="product of products" 
        :key="product.id_product"
        :product="product"></product>
    </div>`
});
Vue.component('product', {
    props: ['product'],
    template: `<div class="product-item" >
            <img :src="product.img" :alt="product.product_name">
            <div class="desc">
                <h3>{{product.product_name}}</h3>
                <p>{{product.price}}</p>
                <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
            </div>
        </div>`
})