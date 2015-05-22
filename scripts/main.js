$(document).ready( function(){
  // var sidebar = etsy.results.map( function(item){
  //   return item.taxonomy_path;
  // });
  // var sidebarItems= [];
  // sidebar.forEach (function(list){
  //   list.forEach (function (item){
  //     if(sidebarItems.indexOf(item === -1){
  //       sidebarItems.push(item);
  //     })
  //   })
  // })
  // va sidebarUL = $();
  // sidebarItems.forEach( function(sbItem){

  // })
    var content = $('.main-ul');
    var itemTitle,
        itemImage,
        itemSeller,
        itemPrice,
        block;


    guitarApi.results.forEach( function(item){
      itemImage = '<img src="'+item.Images[0].url_170x135 +'">';
      itemTitle = '<div class= "row"><a href= "#" class="item-title">' + item.title + '</a></div>';
      itemSeller = '<div clas= "row"><a href= "#" class="item-seller">' + item.Shop.shop_name + '</a></div>';
      itemPrice = '<p class="item-price">' + '$' + item.price + ' ' + item.currency_code +'</p>';

      block = '<li class= "main-li">' + itemImage + itemTitle + itemSeller + itemPrice +'</li>';

      $('.main-ul').append(block);
    });
});

