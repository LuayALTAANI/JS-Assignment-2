const SmoothieForm = document.getElementById('SmoothieForm');
const result = document.getElementById('result');
class Smoothie {
    constructor(size, ingredients, base) {
        this.size = size;
        this.ingredients = ingredients;
        this.base = base;
        this.price = this.calculatePrice();
    }

    calculatePrice() {
        let basePrice = 5;
        if (this.size === "medium") basePrice += 2;
        if (this.size === "large") basePrice += 4;

        return basePrice + this.ingredients.length * 1.5;
    }

    displayResult() {
        return `
        <h2>Your Smoothie</h2>
        <p>Size: ${this.size}</p>
        <p>Ingredients: ${this.ingredients.join(', ')}</p>
        <p>Base: ${this.base}</p>
        <p>Price: $${this.price.toFixed(2)}</p>
    `;
    }
}

SmoothieForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const size = SmoothieForm.elements['size'].value;
    const base = SmoothieForm.elements['base'].value;
    const ingredients = Array.from(SmoothieForm.elements['ingredients'])
        .filter(ingredient => ingredient.checked)
        .map(ingredient => ingredient.value);

    const smoothie = new Smoothie(size, ingredients, base);
    result.innerHTML = smoothie.displayResult();
});