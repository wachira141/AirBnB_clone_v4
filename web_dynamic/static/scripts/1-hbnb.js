#!/usr/bin/bash/node
$(document).ready(function() {
list = []
$("input").each( function(){
 if($(this).prop("checked")) {
    list.push($(this).data("data-id"))
} else {
    list = list.filter((list) function(){
        return list != $(this).data("data-id")
})
}
})
})
