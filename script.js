$(() => {

    let name = $("#name");
    let email = $("#email");
    let phone = $("#phone");
    let messageText = $("#message-area");

    $('#submit').on('click', function (e) {
        this.innerHTML = "button clicked";

        let required = [name, email, phone, messageText];
        console.log(required)
        for (let i = 0; i < required.length; i++) {
            if (required[i].val().trim() == "") {
                $("#message").html("Please Fill Out Required Field.");
                $("#message").addClass("warning");
                required[i].prev().addClass("warning");
            } else {
                required[i].prev().removeClass("warning");
            }
            if ($("label").hasClass("warning")) {
                
            } else {
                $("#form").remove();
                $("h2").text("Thanks for your feedback.")
            }
        }
    })
});