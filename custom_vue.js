





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
			{text: "pierwszy todo", done:true },
		],
		todoText: '',
		buttonBlack: true,
		html_textarea: '',
		bindedAttr: 'class'
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
		},
		deleteTodo(index, el) {
			const vm = this;
			// vm.$delete(tablica/obiekt, numer_indexu)
			// rozwiązanie stworzone i polecane przez vue
			// pierwszy argument to tablica, 
			// drugi to index elementu do usunięcia
			vm.$delete(vm.todos, index);

			// rozwiązanie czystego javascript'u, 
			// metoda filter wykonuje pętle przez 
			// wszystkie elementy tablicy todos, 
			// następnie zwraca tylko te elementy 
			// który spełnią napisany w funkcji warunek
			vm.todos = vm.todos.filter(i => i != el);
		}
	},
	computed: {
		inputClasses () {
			if (this.buttonBlack) {
				return 'color_black';
			}
		}
		// bindedAttr () {
		// 	return 'class';
		// }
	}
})

