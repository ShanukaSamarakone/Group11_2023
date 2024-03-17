document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
    const dropdownContents = document.querySelectorAll('.dropdown-content');
  
    dropdownHeaders.forEach((header, index) => {
      header.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the dropdown arrow
        dropdownContents[index].classList.toggle('show');
        header.parentElement.classList.toggle('open');
      });
    });

    dropdownArrows.forEach((arrow, index) => {
      arrow.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the dropdown header
        dropdownContents[index].classList.toggle('show');
        arrow.parentElement.parentElement.classList.toggle('open');
      });
    });
});