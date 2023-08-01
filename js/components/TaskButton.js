export default {
    template: `
					<button :class="{
					    'border rounded px-4 py-2 disabled:cursor-not-allowed' : true,
					    'bg-blue-600 hover:bg-blue-700': type === 'primary', 
					    'bg-indigo-600 hover:bg-indigo-700': type === 'secondary', 
					    'bg-gray-600 hover:bg-gray-700': type === 'muted', 
					    'is-loading' : loading
					}" :disabled="loading">
					<slot/>
					</button>
                `,
    props: {
        type: {
            type: String,
            default: 'primary'
        }  ,
        loading:{
            type: Boolean,
            default: false
        }
    }
}