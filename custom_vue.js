





const section_two = new Vue({
	el: "#section_two",
	data: {
		name: 'Nazwa pierwsza',
		bool: true,
		buttonCategory: 'przycisk normalny',
		buttonCategoryTwo: 'inny przycisk',
		another: 1,
		buttonOne: "btn btn-primary",
		todos: [
			{text: "pierwszy todo"},
			{text: "drugi todo"},
			{text: "drugi todo"},
			{text: "drugi todo"},
			{text: "drugi todo"}
		],
		todoText: '',
		buttonBlack: true
	},
	methods: {
		// pierwszy sposób tworzenie metody
		// addTodo: function () {
		// },
		// drugi sposób tworzenie metody
		addTodo () {
			const vm = this;
			vm.todos.push(
				{text: vm.todoText}
			);
			vm.todoText = '';
		}
	},
	computed: {
		inputClasses () {
			if (this.buttonBlack) {
				return 'color_black';
			}
		}
	}
})

