export default {
    template: `
					<button class="bg-blue-200 hover:bg-blue-400 border rounded px-4 py-2 disabled:cursor-not-allowed" :disabled="loading">
					<slot/>
					</button>
                `,
    data() {
        return {
            loading: false
        }
    }
}