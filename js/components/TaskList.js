import Task from "./Task.js";

export default {
    components: {Task},
    template: `
        <section v-show="filteredTasks.length">
        <h2 class="font-bold mb-2">
        {{title}}
        <span>{{filteredTasks.length}}</span>
        </h2>
        
        <div class="flex gap-2"> 
            <button 
            class="border rounded px-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500' : category === currentCategory
            }" 
            v-for="category in categories" 
            @click="currentCategory = category">
                {{category}}
            </button>
        </div>
        
        <ul class="border border-slate-600 divide-y divide-gray-600 mt-6">
            <task  v-for="task in filteredTasks" :key="task.id" :task="task"></task>
        </ul>
        </section>
    `,
    data() {
        return {
            currentCategory: 'all'
        }
    },
    props: {
        tasks: Array,
        title: String
    },
    computed: {
        filteredTasks() {
            if(this.currentCategory === 'all'){
                return this.tasks;
            }
            return this.tasks.filter(task => task.category === this.currentCategory);
        },
        categories() {
            return ['all' , ...new Set(this.tasks.map(task => task.category))];
        }
    }
}