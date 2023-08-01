export default {
    template: `
       <div class="flex gap-2"> 
            <button 
            @click="$emit('update:currentCategory' , category)"
            class="border rounded px-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500' : category === currentCategory
            }" 
            v-for="category in categories">
                {{category}}
            </button>
        </div>
        `,
    props: {
        initialCategories: Array,
        currentCategory: String
    },
    computed: {
        categories() {
            return ['all', ...new Set(this.initialCategories)]
        }
    }
}