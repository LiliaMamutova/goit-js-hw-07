const categoriesElement = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesElement.length}`);

const categories = document.querySelectorAll(".item");

categories.forEach((category) => {
    const titleEl = category.querySelector("h2").textContent;
    const counterEl = category.querySelectorAll("li").length;

    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${counterEl}`);
})











