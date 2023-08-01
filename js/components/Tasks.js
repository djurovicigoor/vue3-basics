import TaskList from "./TaskList.js";
export default {
    components:{TaskList},
    template: `
        <section class="space-y-6">
            <task-list :tasks="filters.inProgress" title="To Do"></task-list>
            <task-list :tasks="filters.completed" title="Completed"></task-list>
        </section>
    `,
    data() {
        return {
            tasks: [
                {id: 1, name: 'Finish tutorial', complete: true},
                {id: 2, name: 'Make coffee', complete: false},
                {id: 3, name: 'Read server logs', complete: false},
            ]
        }
    },
    computed: {
        filters(){
            return{
                inProgress: this.tasks.filter(task => !task.complete),
                completed: this.tasks.filter(task => task.complete),
            }
        }
    }
}