//
function chooseProject(id) {
    localStorage.setItem("id2", id);
    window.location.href="project_detail.html";
}

var projects = {
    "chosenProject": [
        {
            "name": "Plan Pickup",
            "description": "Piles of dog waste take years to break down, which can harm the environment. Bacteria and parasite pollution from dog waste can be extremely dangerous to humans. Background research on dog waste, market research on existing products, and user research on potential stakeholders was conducted to develop a system of dog waste pickup that takes into consideration environmental factors and human convenience and practicality. Several rounds of ideation were completed to explore different methods of dog waste pick up and disposal. Ideas with the most potential were explored further until a direction was chosen. The decided solution was a physical waste bin tied in with a smart phone application. Model-making proceeded for the waste bin, while wireframes were developed for the application. Plan PickUp disposal bins can be placed in a variety of environments to offer dog owners an environmentally friendly method of waste disposal. These bins are emptied and taken to dog waste-specific compost centers, which have the capabilities of disposing of dog waste without harming humans or the environment. The corresponding smart phone application allows users to gain points, rankings, and rewards for utilizing Plan PickUp. When a user disposes of their dog waste, they scan the Plan PickUp disposal bin with their smartphone, earning points. They then can exchange points earned for rewards and see how they match up with other Plan PickUp users in the area. ",
            "img": "img/planpickup.jpg",
            "id": 0
        },
        {
            "name": "Transportation Display",
            "description": "The PTF transportation display allows users traveling at the Atlantic Hub to easily locate where they are tryin to go. All locations are listed so that users can easily scan for their destination and see the potential ways of getting there. Additional times are shown as well. A manual control near the display allows users to scroll the display to a different time so that they can see future departures. This improves the overall experience of travelers.",
            "img": "img/PTFstill.jpg",
            "id": 1
        },
        {
            "name": "iTrain",
            "description": "iTrain is an interactive training device for ball and stick containing sports that allows athletes to train individually. The hardware allows athletes to bounce a ball off the product’s surface to improve their muscle memory and hand eye coordination. The interface on the device allows for workouts to be customized based on the athlete’s ability level and the skills they want to train. A corresponding smartphone application allows athletes to connect with teammates and coaches as well as track their progress. This product can revolutionize the sports training field as it allows for team concepts and skills to be learned and practiced on an individual level.",
            "img": "img/iTrainUser.jpg",
            "id": 2
        },
        {
            "name": "Control Redesign",
            "description": "This original microwave panel design involved several significant usability problems. The redesign strived to improve features such as feedforward, feedback, and signifiers to improve the user experience and allow the device to be used efficiently and effectively.",
            "img": "img/controls.jpg",
            "id": 3
        },
        {
            "name": "CUI",
            "description": "This conversational user interface is designed to improve the experience of families on vacation. Currently, it is difficult to have a family vacation without conflict, as it is nearly impossible to satisfy everyone’s needs at the same time. With Lucy, each family member is given a conversational bracelet, which they can use to make the most out of their trip. Each member can use Lucy to make plans and coordinate with family members, all while enjoying their own time on vacation.",
            "img": "img/CUI.jpg",
            "id": 4
        },
        {
            "name": "Bun Bun Bake Shop",
            "description": "This website for a bake shop in Pittsburgh, Pennsylvania was created using HTML, CSS, JavaScript, and jQuery. It allows users to input an order for buns and select various characteristics of those buns. It then allows users to add their selections to their cart, view their cart, see their selections, and see their total cost. This required using local storage in JavaScript and learning how to pass information from page to page within the same website. The design of the site also required user testing and constant iteration between prototypes and hard coding.",
            "img": "img/Buns.jpg",
            "id": 5
        },
    ]
}

$(document).ready(function () {

    n=Number(localStorage.getItem("id2"));
    updateProductDetail(n);

// get the HTML template using jQuery
    // var source = $("#selection-template").html();
    // // compile the template into a function
    // var template = Handlebars.compile(source);
    // // create new HTML using our data
    // var newHTML = template(projects);
    // // add the new HTML to the page
    // $("#product-selection-container").append(newHTML);

    // // TODO: (Step 8): add code below for changing product details on click
    // $(".product-selection").click(function() {
    //     var id = $(this).attr("id");
    //     updateProductDetail(id);
    // });

// TODO (Step 6): fill in function for updating detail-template based on id
function updateProductDetail(id) {
    // get the HTML template using jQuery
    var source = $("#detail-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(projects.chosenProject[id]);
    // add the new HTML to the page
    $("#product-detail-container").html(newHTML);
}

});