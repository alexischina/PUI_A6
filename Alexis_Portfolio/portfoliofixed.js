//
function chooseProject(id) {
    localStorage.setItem("id2", id);
    window.location.href="project_detail.html";
}

var projects = {
    "chosenProject": [
        {
            "name": "Plan Pickup",
            "description": "This system utilizes rewards and incentives to motivate users to pick up their dog waste and throw them away in recepticles where the waste will be properly disposed of. Users can also view how they are doing compared to friends and others in the area.",
            "img": "img/planpickup.jpg",
            "id": 0
        },
        {
            "name": "Transportation Display",
            "description": "PTF DESCRIPTION",
            "img": "img/PTFstill.jpg",
            "id": 1
        },
        {
            "name": "iTrain",
            "description": "iTRAIN DESCRIPTION",
            "img": "img/iTrainUser.jpg",
            "id": 2
        },
        {
            "name": "Control Redesign",
            "description": "CONTROL REDESIGN DESCRIPTION",
            "img": "img/controls.jpg",
            "id": 3
        },
        {
            "name": "Plan PickUp",
            "description": "PLAN PICKUP DESCRIPTION",
            "img": "img/planpickup.jpg",
            "id": 4
        },
        {
            "name": "Bun Bun Bake Shop",
            "description": "BUNS DESCRIPTION",
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