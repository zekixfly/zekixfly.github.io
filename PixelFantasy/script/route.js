let route = {
    replace: function(ref = 'news') {
        history.replaceState( {page: ref}, `${ref}`, `./#/${ref}`);
    },
    push: function (ref = 'news') {
        history.pushState( {page: ref}, `${ref}`, `./#/${ref}`);
    },
    active: function(ref) {           
        
        const currentNode = document.querySelector(`[ref=${ref}]`)
        document.title = `Pixel Fantasy - ${ref.replace(/^./,ref[0].toUpperCase())}`;       
        currentNode.siblings().forEach(ele => {
            ele.delClass('active');
        });

        currentNode.closest('.nav-list>li').siblings().forEach(ele => {
            ele.delClass('active');
        });
        
        currentNode.parentElement.querySelectorAll('.nav-list-pixel>li').forEach(ele => {
            ele.delClass('active');
        });

        currentNode.addClass('active');

    },
    tempLoad: async function(ref , target){
        
        try {
            const response = await fetch(`./template/${ref}.html`);
            
            // 轉換成文字
            const htmlText = await response.text();

            // 轉換成HTML
            const htmlParser = new DOMParser();
            const htmlElement = htmlParser.parseFromString(htmlText, 'text/html');

            // 取得template樣板網頁的內容
            const htmlTemplate = htmlElement.getTags('template')[0].innerHTML;

            // 找尋插入的標籤
            switch (target) {
                case 'nav':
                    document.querySelector('[slot=nav]').innerHTML = htmlTemplate;
                    getId('navList').onclick = event => {
                        // console.log(event.target.getAttr('ref'));
                        if(event.target.getAttr('ref')){
                            // route.tempLoad(event.target.getAttr('ref'), 'content');
                            route.push(event.target.getAttr('ref'));
                            route.active(event.target.getAttr('ref'));
                        }
                    }
                    route.active('news');
                    break;
                case 'content':
                    document.querySelector('[slot=content]').innerHTML = htmlTemplate;

                    /* 判斷template樣板網頁裡是否有script，
                    如果有script就取得template樣板網頁裡的script，
                    並將script載入template當前的樣板頁面。 */
                    if(htmlElement.getTags('script').length !== 0){
                        htmlElement.getTags('script').map( script => {
                            const scriptTag = makeTag('script');
                            scriptTag.type = script.type || 'text/javascript';
                            if(script.src){
                                scriptTag.src = script.src;
                            }else if(script.innerHTML){
                                scriptTag.innerHTML = script.innerHTML;
                            }
                            document.querySelector('[slot=content]').addKid(scriptTag);
                        })                
                    }                    
                    route.active(location.hash.replace('#/', ''));
                    break;
                case 'footer':
                    document.querySelector('[slot=footer]').innerHTML = htmlTemplate;
                    break;
                default:
                    break;
            }

        } catch (error) {
             console.warn('Request Error:', error);
        }   
                       
    }
};

// 綁定事件監聽，這樣就創建了2個全新的事件，事件名為pushState和replaceState，我們就可以在全局監聽：
history.replaceState.bindEvent();
history.pushState.bindEvent();

window.addEventListener('replaceState', function(e) {
    route.tempLoad(location.hash.replace('#/', ''), 'content');
});

window.addEventListener('pushState', function(e) {
    route.tempLoad(location.hash.replace('#/', ''), 'content');
});

// 監聽此頁面的DOM都載入完畢時，才觸發做函式。
document.addEventListener("DOMContentLoaded", function(event) {

    route.tempLoad('nav', 'nav');
    
    let url = location.pathname.split("/")[location.pathname.split("/").length-1];
    if(url == '' || url == 'index.html'){           
        route.replace('news');
    }else{
        route.tempLoad(location.hash.replace('#/', ''), 'content');        
    }
    route.tempLoad('footer', 'footer');    
});

// 點擊上一頁下一頁觸發事件
window.addEventListener("popstate", event => {
    if (event.state?.page) {
        route.active(event.state.page);
        route.replace(event.state.page);
    }
});

// 輸入網址時觸發事件
window.addEventListener("hashchange", () => {
    route.tempLoad(location.hash.replace('#/', ''), 'content');
});
// window.onload = e => {console.log(e)}