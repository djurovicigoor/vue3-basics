import Task from "./Task.js";
import TaskCategories from "./TaskCategories.js";
import Panel from "./Panel.js";

export default {
    components: {Task , TaskCategories , Panel},
    template: `
        <Panel v-show="filteredTasks.length" class="w-70">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
            {{title}}
            <span>({{filteredTasks.length}})</span>
            </h2>
            
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>
        
        <task-categories 
        v-model:currentCategory="currentCategory"
        :initial-categories="tasks.map(task => task.category)" 
        ></task-categories>
        
        <ul class="border border-slate-600 divide-y divide-gray-600 mt-6">
            <task  v-for="task in filteredTasks" :key="task.id" :task="task"></task>
        </ul>
        
        <slot></slot>
        </Panel>
    `,
    data() {
        return {
            currentCategory: 'all'
        }
    },
    props: {
        tasks: Array,
        title: String,
        canToggle: {
            type: Boolean, default: false
        }
    },
    computed: {
        filteredTasks() {
            if (this.currentCategory === 'all') {
                return this.tasks;
            }
            return this.tasks.filter(task => task.category === this.currentCategory);
        },
        categories() {
            return ['all', ...new Set(this.tasks.map(task => task.category))];
        }
    }
}