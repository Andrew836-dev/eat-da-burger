document.addEventListener("DOMContentLoaded", function () {
    $(".devour-burger").on("click", function () {
        let id = $(this).data("id");
        $.ajax("api/burgers/" + id, {
            method: "PUT",
            data: {
                devoured: 1
            }
        }).then(() => {
            location.reload();
        });
    });

    $("form").on("submit", function(event) {
        event.preventDefault();
        let burger = $("input").val().trim();
        if (burger) {
            $.ajax("api/burgers/", {
                method: "POST",
                data: {
                    burger_name: burger
                }
            }).then(() => {
                location.reload();
            });
        }

    });
});