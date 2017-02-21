 $(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var groceryList = [];
    var itemList = ["item1", "item2", "item3", "item4", "item5", "item6"]

    itemList.forEach(function(item) {
      var item1 = ($("#" + item).val()).toUpperCase();
      groceryList.push(item1);
    //$("<li>" + item1).text(item1)
      });

    groceryList = groceryList.sort();
    groceryList.forEach(function(item){
      $("#groceriesNeeded").append("<li>" + item + "</li>");
    });
    console.log(groceryList);
  });
});
