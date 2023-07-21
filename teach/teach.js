document.addEventListener("DOMContentLoaded", function(){
  // Accordion Action
  const accordionItem = document.querySelectorAll(".title");

  accordionItem.forEach((el) =>
    el.addEventListener("click", () => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        accordionItem.forEach((el2) => el2.classList.remove("active"));
        el.classList.add("active");
      }
    })
  );

const subjectFilter = document.querySelector('#subject');
const gradeFilter = document.querySelector('#grade');
const noMatches = document.querySelector('.no-matches');

subjectFilter.addEventListener('change', filterBoxes);
gradeFilter.addEventListener('change', filterBoxes);

function filterBoxes() {
  const subject = subjectFilter.value;
  const grade = gradeFilter.value;
  
  let isMatchFound = false;

  document.querySelectorAll('.category-boxes').forEach(category => {
    let isCategoryMatch = false;

    category.querySelectorAll('.box').forEach(box => {
      const boxGrades = box.dataset.grade.split(' ');
      
      if ((subject === 'all' || box.dataset.subject === subject) &&
          (grade === 'all' || boxGrades.includes(grade))) {
        box.style.display = 'flex';
        isCategoryMatch = true;
        isMatchFound = true;
      } else {
        box.style.display = 'none';
      }
    });

    // If no box in the category matches, hide the category header
    if (!isCategoryMatch) {
      category.previousElementSibling.style.display = 'none';
    } else {
      category.previousElementSibling.style.display = 'block';
    }
  });

  // If no match is found at all, display the "No matches found" message
  if (!isMatchFound) {
    noMatches.style.display = 'block';
  } else {
    noMatches.style.display = 'none';
  }
}

});
