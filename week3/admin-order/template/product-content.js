for(var i =0; i<productList.length; i++) {
	var tbody = makeTag('tbody');	
	tbody.innerHTML += `				
			  <tr>
			  	
				  <td class="product-info">
				  	<a href="${productList[i].url}" target="blank">
							<label class="checkbox-container no_selection">
							<input type="checkbox">
							<span class="checkmark"></span>
							</label>
							<span class="photo"><img src="${productList[i].productPhoto}" alt=""></span>
							<span class="name ellipsis">${productList[i].productName}</span>
				  	</a>
				  </td>
				  
				  <td class="original">
				  	<span>HK$${productList[i].priceOriginal}</span>
				  </td>
				  <td class="discount">
				  	<span>HK$${productList[i].priceDiscount}</span>
				  </td>
				  <td class="merginSCI" colspan="3">
									<div class="item">
										<div class="size"><span>L</span></div>
										<div class="color"><span>${productList[i].Specification[0].color}</span><span>${productList[i].Specification[1].color}</span></div>
										<div class="inventory"><span>${productList[i].Specification[0].inventory}</span><span>${productList[i].Specification[1].inventory}</span></div>
									</div>
									<div class="clearfix"></div>
									<div class="item">
										<div class="size"><span>M</span></div>
										<div class="color"><span>${productList[i].Specification[2].color}</span><span>${productList[i].Specification[3].color}</span></div>
										<div class="inventory"><span>${productList[i].Specification[2].inventory}</span><span>${productList[i].Specification[3].inventory}</span></div>
									</div>
									<div class="clearfix"></div>
									<div class="item">
										<div class="size"><span>S</span></div>
										<div class="color"><span>${productList[i].Specification[4].color}</span><span>${productList[i].Specification[5].color}</span></div>
										<div class="inventory"><span>${productList[i].Specification[4].inventory}</span><span>${productList[i].Specification[5].inventory}</span></div>
									</div>
				 	</td>
				  <td class="status">
				  	<span><button class="select">PUBLISHED</button></span>
				  </td>
				 </tr>`;
		getId('item-list').getClasses('product-list')[0].addKid(tbody);
}