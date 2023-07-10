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
});
