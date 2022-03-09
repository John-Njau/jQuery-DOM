$('h1').click(
    function () {
        alert("Header tag")
    }
)

// Buttons return a string and change the background colors

$().ready(function () {
    $("button#hello").click(function () {
        $("body").css("background-color", "blue");
        $("ul#user").prepend("<li>hello</li>");
        $("ul#webPage").prepend("<li>hello</li>")
    });

    $("button#goodbye").click(function () {
        $("body").css("background-color", "white")
        $("button").css("color", "white");
        $("#user").append("<li>goodbye</li>");
        $("#webPage").append("<li>goodbye</li>")
    })

    $('button#stop').click(
        function () {
            $("body").css("background-color", "red")
            $("#user").prepend("<li>STOP copying Me!!*^&</li>");
            $("#webPage").prepend("<li>Well, uuhm!</li>");
        });
});