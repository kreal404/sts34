// $(".tab-nav").find("a.about-link:first").addClass('active');
// $(".tab-content").find("div.tab-pane:first").addClass('show active');

let tab = function() {
    console.log("Fired!");

    let tabNav = document.querySelectorAll(".about-sublink"),
        tabContent = document.querySelectorAll(".tab-pane"),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener("click", selectTabNav);
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
        tabName = this.getAttribute("data-tab");
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName)
                ? item.classList.add("active")
                : item.classList.remove("active");
        });
    }
};

tab();
