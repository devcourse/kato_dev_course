



Vue.component('input-component', {
	data: function () {
		return {
			input_name: 'newName'
		}
	},
	props: [
		'label_input'
	],
	template: `
	<div>
		<header>
			<slot name="header"></slot>
		</header>
		<label :for="input_name">{{label_input}}</label>
		<slot></slot>
		<input :id="input_name" :name="input_name"></input>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>`
})


Vue.component('tab-home', {
	template: '<div>Tab home sprawdźmy</div>'
})
Vue.component('tab-posts', {
	template: '<div>Tab posts</div>'
})
Vue.component('tab-archive', {
	template: '<div>Tab archive</div>'
})





Vue.component('single-post', {
	props:['title', 'body', 'post_id'],
	template: `
		<div class="single-post">
			<h3>{{title}}</h3>
			<div class="content" v-html="body"></div>
		</div>
	`	
})





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
		bindedAttr: 'class',
		searchTodo: '',
		type: false,
		searchAxios: '',
		answerAxios: {
			text: '',
			img: ''
		},
		delayGetAnswerAxios: null,
		label_inputs: [
			{text: 'label dynamiczny'},
			{text: 'label dynamiczny dwa'},
			{text: 'label dynamiczny trzy'}
		],
		label_input_one: 'label_input_one',
		label_input_two: 'label_input_two',
		label_input_three: 'label_input_three',
		tabs:['Home', 'Posts', 'Archive'],
		currentTab:'Archive',
		posts:[
		  {
		    "userId": 1,
		    "id": 1,
		    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
		    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
		  },
		  {
		    "userId": 1,
		    "id": 2,
		    "title": "qui est esse",
		    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
		  },
		  {
		    "userId": 1,
		    "id": 3,
		    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
		    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
		  },
		  {
		    "userId": 1,
		    "id": 4,
		    "title": "eum et est occaecati",
		    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
		  },
		  {
		    "userId": 1,
		    "id": 5,
		    "title": "eum et est occaecati",
		    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
		  },
		  {
		    "userId": 1,
		    "id": 6,
		    "title": "eum et est occaecati",
		    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
		  },
		  {
		    "userId": 1,
		    "id": 7,
		    "title": "eum et est occaecati",
		    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
		  },
		]
	},
	methods: {
		// pierwszy sposób tworzenie metody
		// addTodo: function () {
		// },
		// drugi sposób tworzenie metody
		addTodo () {
			const vm = this;
			vm.todos.push(
				{text: vm.todoText, done: false}
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
		},
	    getAnswerAxios () {

	      if (this.searchAxios.indexOf('?') === -1) {
	        this.answerAxios.text = 'Aby uzyskać odpowiedź dodaj znak zapytania';
	        return
	      }

	      this.answerAxios.text = 'Niech pomyślę..';

	      const vm = this
	      axios.get('https://yesno.wtf/api')
	        .then(function (response) {
	        	console.log(response);
	        	vm.answerAxios.text = response.data.answer
	          vm.answerAxios.img = response.data.image
	        })
	        .catch(function (error) {
	          vm.answerAxios.text = 'Error! Could not reach the API. ' + error
	        })
	    },
	    getPosts () {
	    	return axios.get('https://jsonplaceholder.typicode.com/posts')
	    }

	},
	computed: {
		currentTabComponent: function () {
			return 'tab-' + this.currentTab.toLowerCase()
			// tab-archive
		},
		inputClasses () {
			if (this.buttonBlack) {
				return 'color_black';
			}
		},
		searchedTodos () {
			let searchedTodosArr = this.todos;
			let searchTodo = this.searchTodo;
			if (!searchTodo) { return searchedTodosArr}

			searchTodo = searchTodo.trim().toLowerCase();
			searchedTodosArr = searchedTodosArr.filter(function(item) {
				if (item.text.toLowerCase().indexOf(searchTodo) !== -1) {
					return item;
				}
			})
			return searchedTodosArr;
		},
		// metoda computed z możliwością przekazanie elementu w parametre
		// exampleComputed: {
		// 	get: function () {
		// 		return 'Siemanko';
		// 	},
		// 	set: function (argumentWReferencji) {
		// 		console.log(argumentWReferencji);
		// 	}
		// },
		// bindedAttr () {
		// 	return 'class';
		// }
	},
	watch: {
		// deklaracja zmiennej którą nasłuchujemy w postaci funkcji
		// nazwaZmiennejWInstancji (nowaZawartość, staraZawartość) {
		// 	console.log(nowaZawartość);
		// 	console.log(staraZawartość);
		// },
		// searchTodo (newSearch, oldSearch) {
		// 	const oldTodos = this.todos;
		// 	let newTodos = oldTodos.filter(f => {
		// 		console.log(f.text);
		// 		console.log(newSearch);
		// 		f.text = newSearch;
		// 	})
		// 	console.log(newTodos);
		// 	// this.searchedTodos = newTodos; 
		// 	console.log(this.todos);
		// }
		searchAxios (newSearch, oldSearch) {
			const vm = this;
			this.answerAxios.text = 'Dajesz, dajesz, długo nie będę czekać';
			setTimeout(function() {
				vm.getAnswerAxios();
			}, 500);
		}
	},
	created () {
		const vm = this
		// wejść na https://jsonplaceholder.typicode.com/ 
		// i pozyskać listę post poprzez axiosa,
		// następnie zapisać do obiektu zadeklarowanego w instancji
		// wykonanie metody getPosts pozyskującej dane o postach z api jsonplaceholder
		this.getPosts()
		.then( response => vm.posts = response.data)
		.catch( err => console.log(err))
	},
	beforeMount () {
		console.log('beforeMount');
	},
	mounted () {
		console.log('mounted');
	},
	beforeUpdate () {
		console.log('beforeUpdate');
	},
	updated () {
		console.log('updated');
	},
	beforeDestroy () {
		console.log('beforeDestroy');
	},
	destroyed () {
		console.log('destroyed');
	}
})

