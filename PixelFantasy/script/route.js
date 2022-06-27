let route = {
    hisReplace: function(id = 'news') {
        history.replaceState( {id}, `${id}`, `./#/${id}`);
    },
    hisPush: function (id = 'news') {
        history.pushState( {id}, `${id}`, `./#/${id}`);
    },
    switchFocus: function(id) {           
        
        // document.title = id;
        // this.tempLoad( id, 'content');
        getId(id).parentElement.siblings().forEach(ele => {
            ele.getTags('a').delClass('focus');
        });
        getId(id).closest(".navbar-nav>li").siblings().forEach(ele => {
            ele.getTags('a').delClass('focus');
        });

        getId(id).addClass('focus');

    },
    tempLoad: function(id , target){

        fetch(`./template/${id}.html`)
            .then(response => {
                if(response.ok != false){
                    // 轉換成存文字
                    return response.text();
                }
                else {
                    throw new Error('URL Error! Access Denied!');
                }
            })
            .then(text => {
                // 轉換成HTML   
                let HtmlParser = new DOMParser();
                return HtmlParser.parseFromString(text, 'text/html');
            })
            .then(html => {
                // 找尋插入的標籤
                switch (target) {
                    case 'nav':
                        document.querySelector('[slot=nav]').innerHTML = html.getTags('template')[0].innerHTML;
                        document.querySelectorAll('.navbar-nav>li a').forEach(ele => {
                            // console.log(ele.id);
                            window[ele.id].addEventListener('click', event => {
                                route.tempLoad(event.target.id, 'content');
                                route.switchFocus(event.target.id);
                                route.hisPush(event.target.id);
                            });
                        });
                        break;
                    case 'content':
                        document.querySelector('[slot=content]').innerHTML = html.getTags('template')[0].innerHTML;
                        route.switchFocus(id);
                        break;
                    case 'footer':
                        document.querySelector('[slot=footer]').innerHTML = html.getTags('template')[0].innerHTML;
                        break;
                    default:
                        break;
                }
                
                switch (id) {
                    case "vogue":
                    case "animal":
                    case "vehicle":
                    case "house":
                        pixelArtWork(id);
                        break;
                    case "news":
                        getNews();
                    default:
                        break;
                }
            })
    }
};

// 監聽此頁面的DOM都載入完畢時，才觸發做函式。
document.addEventListener("DOMContentLoaded", function(event) {
    
    route.tempLoad('nav', 'nav');
    let url = location.pathname.split("/")[location.pathname.split("/").length-1];
    if(url == '' || url == 'index.html' || url == 'news'){            
        
        route.tempLoad('news', 'content');
        route.hisReplace('news');

        // document.title = 'content';
    }else{
        route.tempLoad(location.hash.replace('#/', ''), 'content');          
        // route.focusSwitch(location.hash.replace('#/', ''));
    }
    route.tempLoad('footer', 'footer');
});

// 點擊上一頁下一頁觸發事件
window.addEventListener("popstate", event => {
    if (event.state?.id) {
        route.focusSwitch(event.state.id);
        route.hisReplace(event.state.id);
    }
});

// 輸入網址時觸發事件
window.addEventListener("hashchange", () => {
    console.log(location.hash.replace('#/', ''));
    route.tempLoad(location.hash.replace('#/', ''), 'content');
    // route.switchFocus(location.hash.replace('#/', ''));

});
// window.onload = e => {console.log(e)}