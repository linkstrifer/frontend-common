class Cat {
	constructor({ id, name }) {
		this.name = name;
		this.image = `img/cat${id}.jpg`;
	}
}

class Dog {
	constructor(id) {
		this.name = `dog${id}`;
		this.image = `img/dog${id}.jpg`;
	}
}

const allCats = [
	{
		id: 1,
		name: 'Pepito'
	},
	{
		id: 2,
		name: 'Nami'
	}
];

class List {
	constructor({
		el,
		data,
		animal,
		...rest
	}) {
		this.el = el;
		this.data = data;
		this.animal = animal;
		this.rest = rest;

		this.render = this.render.bind(this);
		this.add = this.add.bind(this);

		this.render();
	}

	createImage(imageData) {
		const animal = new this.animal(imageData);
		const newElementContainer = document.createElement('div');

		for(const property in this.rest) {
			newElementContainer.style[property] = this.rest[property];
		}

		newElementContainer.classList.add('section')
		
		const newElementName = document.createElement('p');
		const newElementImage = document.createElement('img');
		
		newElementName.textContent = animal.name;
		newElementImage.src = animal.image;

		newElementContainer.appendChild(newElementName);
		newElementContainer.appendChild(newElementImage);

		return newElementContainer;
	}

	render() {
		if (this.data && this.data.length > 0) {
			this.data.forEach(imageData => {
				this.el.appendChild(
					this.createImage(imageData)
				);
			});
		}
	}

	add(id) {
		this.el.appendChild(
			this.createImage(id)
		);
	}
};

const list1 = new List({
	el: document.querySelector('#list'),
	data: allCats,
	animal: Cat,
	label: 'label',
});

const list2 = new List({
	el: document.querySelector('#list2'),
	data: allCats,
	animal: Cat,
	border: '1px solid #ccc',
	backgroundColor: 'rgba(0,0,0,.5)',
	color: 'white',
});
