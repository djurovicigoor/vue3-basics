import TaskList from "./TaskList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: {TaskList, TaskCreate},
    template: `
        <section class="space-y-6">
            <task-list :tasks="filters.inProgress" title="To Do"></task-list>
            <task-list :tasks="filters.completed" title="Completed"></task-list>
            
            <task-create @add="add($event)"></task-create>           
        </section>
    `,
    data() {
        return {
            tasks: [],
            newTask: ''
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