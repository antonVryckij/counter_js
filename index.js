const nodes = {
	incrBtn: "btn--increment",
	decrBtn: "btn--decrement",
	counter: "counter",
};

class Counter {
	constructor({ incrBtn, decrBtn, counter }) {
		this.incrBtn = this.getNodeByClassName(incrBtn);
		this.decrBtn = this.getNodeByClassName(decrBtn);
		this.counter = this.getNodeByClassName(counter);

		this.bindledHandler = this.onClickHandler.bind(this);
	}

	getNodeByClassName(className) {
		return document.querySelector(`.${className}`);
	}

	onClickHandler({ target }) {
		const isIncrement = target.dataset.name === "increment" ? true : false;

		this.counter.setAttribute(
			"style",
			`transform: translateY(${isIncrement ? "-" : ""}100%); opacity: 0.2;`
		);

		setTimeout(() => {
			isIncrement ? this.counter.value++ : this.counter.value--;
			this.counter.setAttribute(
				"style",
				`transform: translateY(${
					isIncrement ? "" : "-"
				}100%); transition: none; opacity: 0.2`
			);
			setTimeout(() => {
				this.counter.removeAttribute("style");
			}, 200);
		}, 200);
	}

	init() {
		this.incrBtn.addEventListener("click", this.bindledHandler);
		this.decrBtn.addEventListener("click", this.bindledHandler);
	}
}

const myCounter = new Counter(nodes);
myCounter.init();
