import TaskList from "./TaskList.js";

export default {
    components: {TaskList},
    template: `
        <section class="space-y-6">
            <task-list :tasks="filters.inProgress" title="To Do"></task-list>
            <task-list :tasks="filters.completed" title="Completed"></task-list>
            <form @submit.prevent="add()">
              <div class="border border-slate-600 text-black">
                <input v-model="newTask" placeholder="New to do ..." class="p-2"/> 
                <button type="submit" class="bg-white p-2 border-l">Add</button>
               </div>
            </form>
        </section>
    `,
    data() {
        return {
            tasks: [
                {id: 1, name: 'Finish tutorial', complete: true},
                {id: 2, name: 'Make coffee', complete: false},
                {id: 3, name: 'Read server logs', complete: false},
            ],
            newTask: ''
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.tasks.filter(task => !task.complete),
                completed: this.tasks.filter(task => task.complete),
            }
        }
    },
    methods: {
        add() {
            this.tasks.push({
                id: this.tasks.length + 1,
                name: this.newTask,
                completed: false
            });
            this.newTask = '';
        }
    }
}