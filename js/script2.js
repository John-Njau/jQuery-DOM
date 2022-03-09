// Removing code
$(document).ready(function(){
    $("button#hello").click(function(){
        $("ul#user").children("li").first().click(function() {
            $(this).remove();
          })
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
          });
    });
});