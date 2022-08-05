let route = {
    hisReplace: function(ref = 'news') {
        history.replaceState( {ref}, `${ref}`, `./#/${ref}`);
    },
    hisPush: function (ref = 'news') {
        history.pushState( {ref}, `${ref}`, `./#/${ref}`);
    },
    navSwitchFocus: function(currentNode) {           
        
        // document.title = ref;        
        currentNode.siblings().forEach(ele => {
            ele.delClass('focus');
        });

        currentNode.closest('.nav-list>li').siblings().forEach(ele => {
            ele.delClass('focus');
        });
        
        currentNode.parentElement.querySelectorAll('.nav-list-pixel>li').forEach(ele => {
            ele.delClass('focus');
        });

        currentNode.addClass('focus');

    },
    tempLoad: async function(ref , target){

        await fetch(`./template/${ref}.html`)
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
                        document.getElementById('navList').onclick = event => {
                            // console.log(event.target.getAttr('ref'));
                            if(event.target.getAttr('ref')){
                                route.tempLoad(event.target.getAttr('ref'), 'content');                                
                                route.hisPush(event.target.getAttr('ref'));
                                route.navSwitchFocus(event.target);
                            }
                        }
                        route.navSwitchFocus( document.querySelector('[ref=news]') );
                        break;
                    case 'content':
                        document.querySelector('[slot=content]').innerHTML = html.getTags('template')[0].innerHTML;
                        break;
                    case 'footer':
                        document.querySelector('[slot=footer]').innerHTML = html.getTags('template')[0].innerHTML;
                        break;
                    default:
                        break;
                }
                
                switch (ref) {
                    case 'vogue':
                    case 'animal':
                    case 'vehicle':
                    case 'house':
                        pixelArtWork(ref);
                        break;
                    case 'news':
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
});
// window.onload = e => {console.log(e)}