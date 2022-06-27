function pixelArtWork(id){
    fetch("./jsondata/pixelartwork.json")
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(json => {
            // console.log(json)
            for(var idx in json){
                var divElement = makeTag("div");
                divElement.className = "pixelart_Thumbnail";

                // console.log(`${id.replace(/^./, id[0].toUpperCase())} Fantasy`);
                // 替換id第一個小寫字母為大寫                
                if(`${id.replace(/^./, id[0].toUpperCase())} Fantasy` == json[idx].category){
                    var imgElement = makeTag("img");
                    imgElement.src = `img/pixelart/${id}/` + json[idx].src;
                    imgElement.addEventListener("load", () => {
                        getClasses("showBoxPreloader")[0].addClass("showBoxPreloaderNone");
                    })
                    divElement.addKid(imgElement);
                    divElement.setAttr("title", json[idx].title);
                    divElement.setAttr("date", json[idx].date);
                    divElement.setAttr("category", json[idx].category);
                    divElement.setAttr("description", json[idx].description);
                    divElement.setAttr("src", json[idx].src);

                    if(getId("showBox") != null){
                        divElement.addEventListener("click", event => {
                            getClasses("showBoxBackGround")[0].addClass("showBoxBlock");
                            getId("showBox").addClass("showBoxBlock");
                            getId("showBox").getTags("img")[0].src = event.target.currentSrc;
                            getId("showBox").getClasses("showBoxTitle")[0].innerHTML = event.currentTarget.title;
                            getId("showBox").getClasses("showBoxInfo")[0].innerHTML = event.currentTarget.getAttr("description");
                            getClasses("wrap")[0].addClass("wrapScrollHidden");
                            getClasses("showBoxClose")[0].addEventListener("click", event => {
                                getClasses("showBoxContainer")[0].scrollTop = 0;
                                getId("showBox").delClass("showBoxBlock");
                                getClasses("wrap")[0].delClass("wrapScrollHidden");
                                getClasses("showBoxBackGround")[0].delClass("showBoxBlock");                            
                            });
                            getClasses("showBoxContainer")[0].addEventListener("click", event => {
                                getClasses("showBoxContainer")[0].scrollTop = 0;
                                getId("showBox").delClass("showBoxBlock");
                                getClasses("wrap")[0].delClass("wrapScrollHidden");
                                getClasses("showBoxBackGround")[0].delClass("showBoxBlock");                            
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
        });
    
}
