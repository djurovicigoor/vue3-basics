export default {
    template: `
      <div :class="{
        'p-4 border rounded-lg':true,
        'bg-white border-gray-300 text-black': theme == 'light',
        'bg-gray-700 border-gray-600 text-white': theme == 'dark'
      }">
        <h2 v-if="$slots.title" class="font-bold">
            <slot name="title"/>
        </h2>
        
        <slot />
      </div>
    `,
    props:{
        theme: {
            type: String , default: 'dark'
        }
    }
}