$('h1').click(
    function(){
        alert("Header tag")
    }
)

// Buttons return a string and change the background colors

$().ready(function(){
    $("button#hello").click(function(){
        $("body").css("background-color", "blue");
        $("#isaid").prepend("<p>hello</p>");
        $("#websaid").prepend("<p>hello</p>")
    });

    $("button#goodbye").click(function(){
        $("body").css("background-color", "white")
        $("button").css("color", "white");
        $("#isaid").prepend("<p>goodbye</p>");
        $("#websaid").prepend("<p>goodbye</p>")
    })

    $('button#stop').click(
        function(){
            $("body").css("background-color", "red")
            $("#isaid").prepend("<p>STOP copying Me!!*^&</p>");
            $("#websaid").prepend("<p>Well, uuhm!</p>");
        });
});