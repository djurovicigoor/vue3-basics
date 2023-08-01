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
            tasks: [
                {id: 1, name: 'Finish tutorial', complete: true, category: 'study'},
                {id: 2, name: 'Make coffee', complete: false, category: 'break'},
                {id: 3, name: 'Read server logs', complete: false, category: 'tech'},
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
        add(taskName) {
            this.tasks.push({
                id: this.tasks.length + 1,
                name: taskName,
                completed: false
            });
        }
    }
}