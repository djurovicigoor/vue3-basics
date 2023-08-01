import TaskList from "./TaskList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: {TaskList, TaskCreate},
    template: `
        <section  class="flex gap-6">
            <task-list :tasks="filters.inProgress" title="To Do">
            <task-create @add="add($event)"></task-create> 
            </task-list>
            <div v-if="showCompleted">
            <task-list :tasks="filters.completed" title="Completed" can-toggle @toggle="showCompleted = !showCompleted"></task-list>
            </div>
        </section>
    `,
    data() {
        return {
            tasks: [],
            newTask: '',
            showCompleted: true
        }
    },
    created() {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(tasks => {
                this.tasks = tasks;
            });
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
        add(taskName) {
            this.tasks.push({
                id: this.tasks.length + 1,
                name: taskName,
                completed: false
            });
        }
    }
}