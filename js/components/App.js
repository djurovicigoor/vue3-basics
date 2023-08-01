import Tasks from "./Tasks.js";
import Panel from "./Panel.js"
export default {
    components: {Tasks , Panel},
    template:`
    <div class="grid gap-6">
        <tasks></tasks>
       <panel theme="light">
         <template #title>Hello World</template>
         This is default slot
       </panel> 
      
    </div>
    `
}