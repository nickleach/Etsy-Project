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
        pic1,
        pic2,
        block;


    guitarApi.results.forEach( function(item){
      itemImage = '<img class= itemImage src="'+item.Images[0].url_170x135 +'">';
      itemTitle = '<div class= "row"><a href= "#" class="item-title">' + item.title + '</a></div>';
      itemSeller = '<div class= "row"><a href= "#" class="item-seller">' + item.Shop.shop_name + '</a></div>';
      itemPrice = '<p class="item-price">' + '$' + item.price + ' ' + item.currency_code +'</p>';
      pic1= '<span class = "pic1"><img src ="images/hamburger.png"></span>';
      pic2= '<span class = "pic2"><img src ="images/heart.png"></span>';

      block = '<li class= "main-li">' + itemImage + itemTitle + itemSeller + itemPrice + pic1 + pic2 +'</li>';

      $('.main-ul').append(block);
    });
});

