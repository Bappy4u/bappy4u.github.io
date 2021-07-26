//focused on table of contents
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    if (entry.intersectionRatio > 0) {
      document
        .querySelector(`#post-content aside nav li a[href="#${id}"]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`#post-content aside nav li a[href="#${id}"]`)
        .classList.remove("active");
    }
  });
});
document
  .querySelectorAll("#post-content .post-content p[id]")
  .forEach((section) => {
    observer.observe(section);
  });
