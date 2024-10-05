const cateGories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${cateGories.length}`);

cateGories.forEach((category) => {
  const title = category.querySelector('h2').textContent; 
  const elementsCount = category.querySelectorAll('li').length; 
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
