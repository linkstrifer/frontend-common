class Cat {
	constructor(name, image){
		this.name = name;
		this.image = image;
	}
}

const cat1 = new Cat('cat1', 'img/cat1.jpg');
const cat2 = new Cat('cat2', 'img/cat2.jpg');
const cat3 = new Cat('cat3', 'img/cat3.jpg');
const cat4 = new Cat('cat4', 'img/cat4.jpg');
const cat5 = new Cat('cat5', 'img/cat5.jpg');
const cat6 = new Cat('cat6', 'img/cat6.jpg');

const allCats = [cat1, cat2, cat3, cat4, cat5, cat6];


const listView = {
	init() {
		this.list = document.getElementById('list');
		this.render();
	},

	render() {
		for(const cats of allCats){
			const newElementContainer = document.createElement('div');
			newElementContainer.classList.add('section')
			const newElementName = document.createElement('p');
			const newElementImage = document.createElement('img');
			
			newElementName.textContent = cats.name;
			newElementImage.src = cats.image;

			newElementContainer.appendChild(newElementName);
			newElementContainer.appendChild(newElementImage);
			list.appendChild(newElementContainer);
		}
	}
};

listView.init();