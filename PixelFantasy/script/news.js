async function getNews(){

    const res = await fetch(API_GET_DATA);
    const data =  await res.json();
    
    let tableElement = makeTag("table");
    tableElement.className = "newsInfo_Table";
    
    for(let idx in data){
        
        let trElement = makeTag("tr");     
        let tdDateElement = makeTag("td");
        let tdInfoElement = makeTag("td");

        tdDateElement.innerHTML = data[idx].date;
        tdInfoElement.innerHTML = `「${data[idx].category}」新增：${data[idx].title}`;

        trElement.addKid(tdDateElement);
        trElement.addKid(tdInfoElement);
        tableElement.addKid(trElement);
        getId('newsInfo').addKid(tableElement);
        if(idx == 6) {
            let divElement = makeTag("div");
            divElement.id = "newsMore_Line"                    
            divElement.innerHTML = "<a href='javascript:void(0)' class='more'>More...</a>";
            getId('newsInfo').addKid(divElement);
            break;
        }
    }
    getId("newsMore_Line").getClasses("more")[0].addEventListener("click",()=>{

        //點擊more時判斷news數量是否只有7則，超過7則表示已點擊過more，將不在增加news數量。
        if( getClasses("newsInfo_Table")[0].getTags("tr").length <= 7 ){
            for(let i = 7; i<data.length; i++){
                let trElement = makeTag("tr");     
                let tdDateElement = makeTag("td");
                let tdInfoElement = makeTag("td");

                tdDateElement.innerHTML = data[i].date;
                tdInfoElement.innerHTML = `「${data[i].category}」新增：${data[i].title}`;

                trElement.addKid(tdDateElement);
                trElement.addKid(tdInfoElement);
                tableElement.addKid(trElement);                    
            }
            getId("newsMore_Line").getClasses("more")[0].innerText = "<<<Less";
        }
        else{
            for(let i = 7; i<data.length; i++){
                getClasses("newsInfo_Table")[0].getTags("tr")[7].remove();
            }
            getId("newsMore_Line").getClasses("more")[0].innerText = "More...";
        }
    });
}

