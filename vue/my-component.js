export default {
    data() {
        return { count: 0, showAlert: false }
    },
    methods: {
        sum() {
            this.count++
            this.showAlert = true
        }
    },
    watch: {
        showAlert: function () {
            setTimeout(() => {
                this.showAlert = false
            }, 2000)
        }
    },
    template: `
    <div class="d-flex justify-content-center">
        <button @click="sum" class="btn btn-warning">
            I been clicked  {{ count }} times
        </button>    
    </div>

    <transition>
        <div
        v-if="showAlert"
        class="alert primary  p-1 position-absolute alert-custom d-flex align-items-center justify-content-center"
        >

        <span class="ms-2 w-100">Anita</span>
        <div class="w-100 d-flex justify-content-end">
            <span
            class="sm-padding medium me-3 py-1"
            
            >❤</span>
        </div>
        </div>
    </transition>
    `
}