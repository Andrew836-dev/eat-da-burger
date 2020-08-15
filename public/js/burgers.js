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

    $(".remove-burger").on("click", function () {
        let id = $(this).data("id");
        $.ajax("api/burgers/" + id, {
            method: "DELETE"
        }).then(() => {
            location.reload();
        })
    })

    $("form").on("submit", function(event) {
        event.preventDefault();
        let burger = $("input").val().trim().slice(0,45);
        if (burger) {
            $.ajax("api/burgers", {
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