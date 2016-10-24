var ids = ["#item1", "#item2", "#item3", "#item4", "#item5"]
var items = [];
var upperList = [];
var realList = [];

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    ids.forEach(function(id) {
      items.push($("input"+id).val());
    });
    items.sort();

    upperList = items.map(function(item) {
      return item.toUpperCase();
    });

    realList = upperList.map(function(item) {
      return "<li>" + item + "</li>";
    });

    $("#list").append(realList);
    $(".output").show();
    $("form").hide();
    });
});
