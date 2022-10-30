async function pixelArtWork(id){
    
    const res = await fetch(API_GET_DATA);
    const data =  await res.json();
    getId(`${id}Work`).innerHTML = '';
    for(var idx in data){
        var divElement = makeTag("div");
        divElement.className = "pixelart_Thumbnail";

        // console.log(`${id.replace(/^./, id[0].toUpperCase())} Fantasy`);
        // 替換id第一個小寫字母為大寫                
        if(`${id.replace(/^./, id[0].toUpperCase())}` == data[idx].category){
            var imgElement = makeTag("img");
            imgElement.src = `img/pixelart/${id}/` + data[idx].src;
            imgElement.addEventListener("load", () => {
                getClasses("showBoxPreloader")[0].addClass("d-none");
            })
            divElement.addKid(imgElement);
            divElement.setAttr("title", data[idx].title);
            divElement.setAttr("date", data[idx].date);
            divElement.setAttr("category", data[idx].category);
            divElement.setAttr("description", data[idx].description);
            divElement.setAttr("src", data[idx].src);

            if(getId("showBox") != null){
                divElement.addEventListener("click", event => {
                    getClasses("showBoxBackGround")[0].addClass("d-block");
                    getId("showBox").addClass("d-block");
                    getId("showBox").getTags("img")[0].src = event.target.currentSrc;
                    getId("showBox").getClasses("showBoxTitle")[0].innerHTML = event.currentTarget.title;
                    getId("showBox").getClasses("showBoxInfo")[0].innerHTML = event.currentTarget.getAttr("description");
                    getClasses("wrap")[0].addClass("wrapScrollHidden");
                    getClasses("showBoxClose")[0].addEventListener("click", event => {
                        getClasses("showBoxContainer")[0].scrollTop = 0;
                        getId("showBox").delClass("d-block");
                        getClasses("wrap")[0].delClass("wrapScrollHidden");
                        getClasses("showBoxBackGround")[0].delClass("d-block");                            
                    });
                    getClasses("showBoxContainer")[0].addEventListener("click", event => {
                        getClasses("showBoxContainer")[0].scrollTop = 0;
                        getId("showBox").delClass("d-block");
                        getClasses("wrap")[0].delClass("wrapScrollHidden");
                        getClasses("showBoxBackGround")[0].delClass("d-block");                            
                    });
                    getId("showBox").getClasses("showBoxCover")[0].addEventListener("click", event => {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log("event.preventDefault")
                    });
                });                        
            }

            getId(`${id}Work`).addKid(divElement);
        }
    }
}
