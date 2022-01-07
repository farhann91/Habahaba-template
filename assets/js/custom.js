$("document").ready(() => {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 10) {
        $(".navbar").addClass("active");
      } else {
        $(".navbar").removeClass("active");
      }
    });
  });

  // Handling the view full project description button click
  const viewFullProjectDescription = $(".view-full-project-description-btn");
  const aboutOwner = $(".about-owner-btn");
  const allSingleOwnerProjects = $(".all-our-projects-btn");
  const fundProject = $(".fund-project-btn");

  // Handling click event view fullproject
  viewFullProjectDescription.on("click", () => {
    window.location.href = "single-project.html";
  });

  // About owner
  aboutOwner.on("click", () => {
    window.location.href = "profile.html";
  });

  // all projects by single owner
  allSingleOwnerProjects.on("click", () => {
    window.location.href = "single-user-all-projects.html";
  });

  // Fund a project
  fundProject.on("click", () => {
    window.location.href = "fund-project.html";
  });

  // Handling the count up
  const btc_counter = new CountUp("btc-counter", 0, 5269029.75, 2, 3);
  const eth_counter = new CountUp("eth-counter", 0, 435008.62, 2, 3);
  btc_counter.start();
  eth_counter.start();
});
AOS.init({ duration: 800, delay: 100, disable: "mobile" });
// AOS.init();
