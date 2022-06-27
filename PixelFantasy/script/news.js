function getNews(){
    fetch("/jsondata/pixelartwork.json")
        .then(response => {
            // console.log(response);
            return response.json();
        })
        .then(json => {
            // console.log(json)
            var tableElement = makeTag("table");
            tableElement.className = "newsInfo_Table";
            for(var idx in json){
                
                var trElement = makeTag("tr");     
                var tdDateElement = makeTag("td");
                var tdInfoElement = makeTag("td");

                tdDateElement.innerHTML = json[idx].date;
                tdInfoElement.innerHTML = `「${json[idx].category}」新增：${json[idx].title}`;

                trElement.addKid(tdDateElement);
                trElement.addKid(tdInfoElement);
                tableElement.addKid(trElement);
                getId('newsInfo').addKid(tableElement);
                if(idx == 6) {
                    var divElement = makeTag("div");
                    divElement.id = "newsMore_Line"                    
                    divElement.innerHTML = "<a href='javascript:void(0)' class='more'>More...</a>";
                    getId('newsInfo').addKid(divElement);
                    break;
                }
            }
            getId("newsMore_Line").getClasses("more")[0].addEventListener("click",()=>{

                //點擊more時判斷news數量是否只有7則，超過7則表示已點擊過more，將不在增加news數量。
                if( getClasses("newsInfo_Table")[0].getTags("tr").length <= 7 ){
                    for(var i = 7; i<json.length; i++){
                        var trElement = makeTag("tr");     
                        var tdDateElement = makeTag("td");
                        var tdInfoElement = makeTag("td");
        
                        tdDateElement.innerHTML = json[i].date;
                        tdInfoElement.innerHTML = `「${json[i].category}」新增：${json[i].title}`;
        
                        trElement.addKid(tdDateElement);
                        trElement.addKid(tdInfoElement);
                        tableElement.addKid(trElement);                    
                    }
                    getId("newsMore_Line").getClasses("more")[0].innerText = "<<<Less";
                }
                else{
                    for(var i = 7; i<json.length; i++){
                        getClasses("newsInfo_Table")[0].getTags("tr")[7].remove();
                    }
                    getId("newsMore_Line").getClasses("more")[0].innerText = "More...";
                }               

            });
        });
}

