Vue.component('data-error', {
    data(){
        return {
            status: false
        }
    },
    methods: {
        close(){
            window.location.reload();
        },
        error(){
            this.status = true;
        },
    },
    computed: {
      checkError(){
          return this.status
      }
    },
    template: `
                    <div class="error" v-show="checkError">
                        <div class="text-error">
                            <h3>Произошла ошибка загрузки данных</h3>
                            <button @click="close">Обновить страницу</button>
                            <button @click="status = false">Закрыть</button>
                        </div>
                    </div>
    `
});