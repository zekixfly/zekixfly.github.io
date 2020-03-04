getTags('header')[0].innerHTML = `
	<a href="./" class="logo">Shoptime</a>
	<nav class="bg_navbar">
		<button id="home-btn" class="nav-btn" onclick="navBtn(this,'home-content')">HOME</button>
		<button id="orders-btn" class="nav-btn" onclick="navBtn(this, 'orders-content')">ORDERS</button>
		<button id="product=btn" class="nav-btn" onclick="navBtn(this, 'product-content')">PRODUCT</button>		
	</nav>
	<span class="admin-title">ADMIN</span>
`;

function navBtn(navBtnThis, pageType) {
	navBtnThis.addClass('nav-btn-focus').siblings().delClass('nav-btn-focus');
	getTags(pageType)[0].delClass('none-style').addClass('block-style').siblings().addClass('none-style');
}
getId('home-btn').onclick();