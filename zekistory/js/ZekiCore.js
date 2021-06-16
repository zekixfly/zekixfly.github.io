//Copyright
(function(){
  var crz = 'Copyright Zone';
  crz = crz.padStart(crz.length+15, "-").padEnd(crz.length+15*2,"-");
  console.log(`%c${crz}\n
  Author: Zeki
  Mail: zekixfly@hotmail.com
  
  版權聲明:
  一、本網站的版權屬原作者所有。
  二、盼望尊重知識產權，如要轉貼複製請註明出處來源。
  三、出處來源: https://zekistory.updog.co/\n
${crz}`, 'font-size: large; color: brown;'); 
})();







(function(win, elePro, arrPro, HTMLColPro) {



  var ImportSrc = document.getElementById('ZekiCore').getAttribute('import');
  var importTag = document.createElement('script');
  importTag.type = 'text/javascript';
  importTag.src = './js/'+ImportSrc+'.js';
  document.documentElement.appendChild(importTag);

  Object.defineProperties(win, {
    //EX: importJS(['https://www.gstatic.com/firebasejs/4.13.0/firebase.js','./scripts/yourscript.js']);
    'importJS': {
      value: function ({scripts = [], asyncState = false} = {}, callback = undefined) {
        // var webScript = document.getElementsByTagName('webScript')[0];
        var scriptTag;  
        var loadScriptNum = 0;        

        if( scripts.length !== 0 ) {
          addScript(scripts);
        }

        function addScript(scripts) {
          for(var i = 0 ; i<scripts.length; i++) {
            scriptTag = document.createElement('script');
            scriptTag.onload = handleLoad;
            // scriptTag.onreadystatechange = handleReadyStateChange;
            scriptTag.async = asyncState;
            scriptTag.type = 'text/javascript';
            scriptTag.src = scripts[i];
            document.documentElement.appendChild(scriptTag);
          }    
        }
        
        function handleLoad(e) {
          loadScriptNum++;    
          if(loadScriptNum >= scripts.length) {
            if(callback !== undefined) {
              callback();
            }
            loadScriptNum = 0; 
          } 
        }          
      },
      writable: false,
      enumerable: false
    },
    //create element
    'makeTag': {
      value: function(tagName) {
        return document.createElement(tagName);
      },
      writable: false,
      enumerable: false
    },
    //get multiple class element
    'getTags': {
      value: function(tags) {  
        return document.getElementsByTagName(tags);
      },
      writable: false,
      enumerable: false
    },
    //get multiple class element
    'getClasses': {
      value: function(styles) {  
        return document.getElementsByClassName(styles);
      },
      writable: false,
      enumerable: false
    },
    //get one id element
    'getId': {
      value: function(id) {
        return document.getElementById(id);
      },
      writable: false,
      enumerable: false
    },
    //EX:getIds(['id1','id2']);  
    //get multiple id element's array
    'getIds': {
      value: function(idArr) {
        var a =[];
        for(var i=0; i<idArr.length; i++) {
          a.push(document.getElementById(idArr[i]));
        }
        return a;       
      },
      writable: false,
      enumerable: false
    },
    //get multiple name element
    'getNames': {
      value: function(name) {
        return document.getElementsByName(name);
      },
      writable: false,
      enumerable: false
    },
    //customer alert.
    'alert': {
      value: function(txt) {
        var alertTitle = 'Message Box',
          alertBtnTxtOK = '確定',
          alertBtnTxtCancel = '取消';
        var mask = document.body.addKid(document.createElement('div'));
        mask.className = 'mask';
        var alertBox = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
        alertBox.id = 'alert-box';
        var boxTitle = alertBox.appendChild(document.createElement('h1'));
        boxTitle.appendChild(document.createTextNode(alertTitle));
        var boxContent = alertBox.appendChild(document.createElement('p'));
        boxContent.innerHTML = txt;
        var boxBtnOK = alertBox.appendChild(document.createElement('input'));
        boxBtnOK.type = 'button';
        boxBtnOK.value = alertBtnTxtOK;
        boxBtnOK.focus();
        boxBtnOK.onclick = function() {
          removeAlert();
        }
        function removeAlert() {
          document.getElementsByTagName("body")[0].removeChild(alertBox);
          document.body.removeChild(mask);
        }
      },
      writable: false,
      enumerable: false
    },
    //customer msgTip.
    'msgTip': {
      value: function(txt) {
        var tipBox = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
        tipBox.id = 'tip-box';
        tipBox.innerHTML = txt;
        tipBox.addClass('fadeInDown');
        // tipBox.addClass('animated.infinite');
        // tipBox.addClass('fadeInDown');

        setTimeout(removeTip, 3000);  

        function removeTip() {
          document.getElementsByTagName("body")[0].removeChild(tipBox);
        }
      },
      writable: false,
      enumerable: false
    },
    //customer confirm.
    'confirm': {
      value: function(txt, callBackFn = undefined) {
        var confirmTitle = 'Message Box',
          confirmBtnTxtOK = '確定',
          confirmBtnTxtCancel = '取消';
        var mask = document.body.addKid(document.createElement('div'));
        mask.className = 'mask';
        var confirmBox = document.getElementsByTagName('body')[0].appendChild(document.createElement('div'));
        confirmBox.id = 'confirm-box';
        var boxTitle = confirmBox.appendChild(document.createElement('h1'));
        boxTitle.appendChild(document.createTextNode(confirmTitle));
        var boxContent = confirmBox.appendChild(document.createElement('p'));
        boxContent.innerText = txt;
        var boxBtnOK = confirmBox.appendChild(document.createElement('input'));  
        boxBtnOK.type = 'button';
        boxBtnOK.value = confirmBtnTxtOK;
        boxBtnOK.focus();
        boxBtnOK.onclick = function() {
          if(callBackFn !== undefined ){
            callBackFn();
          }          
          removeConfirm();
        }
        var boxBtnCancel = confirmBox.appendChild(document.createElement('input'));
        boxBtnCancel.type = 'button';
        boxBtnCancel.value = confirmBtnTxtCancel;
        boxBtnCancel.onclick = function() {    
          removeConfirm();
        }
        function removeConfirm() {
          document.getElementsByTagName("body")[0].removeChild(confirmBox);
          document.body.removeChild(mask);
        }
      },
      writable: false,
      enumerable: false
    },
    'ajax': {
      value: function ({type = 'get', url = undefined, ok = function(){console.log('Ok funtion not defiend.')}, postDataType='application/x-www-form-urlencoded; charset=UTF8' , postData = null} = {}) {
      var request = null;

      if(url!=undefined) {

        Object.defineProperty(win, 'ok', {
          value: ok,
          writable: false,
          enumerable: false,
          configurable: true //To be set to true, objects can be deleted.
        })
        

        //Chrome, FireFox
        if(window.XMLHttpRequest) {
          try {
            request = new XMLHttpRequest();
            // var supportsCORS = (new XMLHttpRequest()).withCredentials !== undefined;
            // console.log('CORS: ' + supportsCORS);
          }
          catch(err) {
            console.log(err);
            request = null;
          }
        }
        //IE
        else if(window.ActiveXObject) {
          try {
            request = new ActiveXObject("Msxml2.XMLHTTP.3.0");
          }
          //old IE
          catch(err) {
            console.log(err);
            try {
              request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(err) {      
              console.log(err);
              request = null;
            }
          }
        }


        if(request!= null) {
          // delete the previous request.
          request.abort();

          // console.log(request);
          // url += "?dummy=" + new Date().getTime();

          try {       
            request.onreadystatechange = callback;
            request.open(type, url, true);// Third argument is asynchronous's boolean value.
            if(type.toLowerCase() == "get") {
              //if type as get that It don't need send data.
              request.send(null)
            }
            else {
              // if type as post that It need data to send.
              request.setRequestHeader("Content-type", postDataType);
              request.send(postData);
            }
          } catch(e) {            
            console.log("Ajax error communiction whith the server.\n"+ "Details: " + e);
          }
        } 
      }

      function callback(event) {
          if(event.target.readyState == 4 && event.target.status == 200) {
            
            console.log('readyState 4: request finished and response is ready.');
            // console.log(request.getResponseHeader("Content-Type"));
            // console.log(event);
            var response = JSON.parse(event.target.response);
            ok(response);
            delete win.ok;            
          }
          else {
            switch (event.target.status) {              
              case 200:
                // console.log("status 200: OK.");
                switch (event.target.readyState) {
                  case 0:
                    // console.log("readyState 0: request not initialized.");
                    break;
                  case 1:
                    // console.log("readyState 1: server connection established.");
                    break;
                  case 2:
                    // console.log("readyState 2: request received.");
                    break;
                  case 3:
                    // console.log("readyState 3: processing request.");
                    break;
                  default:
                    // statements_def
                    // console.log(request);
                    break;
                }
                break;
              case 403:
                console.log("Error 403: Forbidden.");                
                break;
              case 404:
                console.log("Error 404: Page not found.");                
                break;
              default:
                // statements_def                
                break;
            }
          }
        }
      },
      writable: false,
      enumerable: false
    },
   'testSpeed': {
      value: function(functionString) {  
        var start = performance.now();
        (Function(functionString)());
        var end = performance.now();
        console.log('耗時：' + (end - start) + '微秒。');
        // delete start, end;
      },
      writable: false,
      enumerable: false
    }
  });

  Object.defineProperties(elePro, {
    //get multiple class element
    'getTags': {
      value: function(tags) {  
        return this.getElementsByTagName(tags);
      },
      writable: false,
      enumerable: false
    },
    //get multiple class element
    'getClasses': {
      value: function(styles) {  
        return this.getElementsByClassName(styles);
      },
      writable: false,
      enumerable: false
    },
    //get attribute
    'getAttr': {
      value: function(attr) {
        return this.getAttribute(attr);
      },
      writable: false,
      enumerable: false
    },
    //set attribute
    'setAttr': {
      value: function(key,val) {
        return this.setAttribute(key,val);
      },
      writable: false,
      enumerable: false
    },
    //remove attribute
    'delAttr': {
      value: function(attr) {
        return this.removeAttribute(attr);;
      },
      writable: false,
      enumerable: false
    },
    // append Child
    'addKid': {
      value: function(element) {
        this.appendChild(element);
        return element;
      },
      writable: false,
      enumerable: false
    },
    // batch append Child
    'addKids': {
      value: function(arrElement) {
        var self = this;
        arrElement.forEach(function(kid){self.appendChild(kid)});
      },
      writable: false,
      enumerable: false
    },
    // remove Child
    'delKid': {
      value: function(element) {
        this.removeChild(element);
        return this;
      },
      writable: false,
      enumerable: false
    },
    // batch remove Child
    'delKids': {
      value: function(arrElement) {
        var self = this;
        arrElement.forEach(function(Kid){self.removeChild(Kid)});
      },
      writable: false,
      enumerable: false
    },
    // add Class 
    'addClass': {
      value: function(style) {    
        this.classList.add(style);   
        return this; 
      },
      writable: false,
      enumerable: false
    },
    // remove Class 
    'delClass': {
      value: function(style) {
        this.classList.remove(style);
        return this;
      },
      writable: false,
      enumerable: false
    },
    // fadeOut 
    'fadeOut': {
      value: function() {
        this.style.opacity = 1;
        var self = this;
        (function fade(){
          if (self.style.opacity > 0) {
            self.style.opacity -= 0.1;
            requestAnimationFrame(fade);
          } else {
            self.style.display = "none";
          }  
        })()
        return this;
      },
      writable: false,
      enumerable: false
    },
    // fadeIn 
    'fadeIn': {
      value: function() {
        this.style.opacity = 0;
        var self = this;
        (function fade(){
          op = parseFloat(self.style.opacity)
          if (self.style.opacity < 1) {
            op += 0.1;
            self.style.opacity = op;
            requestAnimationFrame(fade);
          } else {
            self.style.display = " inline-block";
          }  
        })()
        return this;
      },
      writable: false,
      enumerable: false
    },


    //EX: getId('id').siblings().addClass('style');
    //EX: getId('id').siblings().delClass('style');
    'siblings': {
      value: function() {
        var a=[],//definede array to push this's siblings element.
            p,n;


        p=this.previousSibling;  
        while(p){//If it has finding p's previous old brother element, continued execute below code.
          if(p.nodeType===1){ 
          a.push(p); 
          } 
          p=p.previousSibling//Final, assign the p's previous node to p.
        }

        a.reverse()//Invert the order, so the order of the elements is in web's elements order.

        n=this.nextSibling;
        while(n){//If it has finding p's next younger brother element, continued execute below code.
          if(n.nodeType===1){ 
            a.push(n); 
          } 
        n=n.nextSibling; 
        }

        return a//Final, return in order's array.
      },
      writable: false,
      enumerable: false
    },
    'dataBind': {
      value: function({data=undefined}={}) {
        var allNodeList = this.querySelectorAll('*');
        var arr = [].slice.call(allNodeList);
        arr.map(  
          function(item,idx) {
            switch (true) {
              case (eval(item.getAttr('z-text'))!=undefined):         
                item.innerText = eval(item.getAttr('z-text'));          
                break;
              case (eval(item.getAttr('z-html'))!=undefined):
                // console.log(eval(item.getAttr('z-html')));
                item.innerHTML = eval(item.getAttr('z-html'));
              case (eval(item.getAttr('z-data'))!=undefined):
                item.setAttribute('z-data', eval(item.getAttr('z-data')));
                break;
              default:
                // statements_def
                break;
            }
          }
        );
      },
      writable: false,
      enumerable: false
    }
  });

  Object.defineProperties(arrPro, {
    // batch remove class
    'addClass': {
      value: function(style) {
        this.forEach(function(v){v.classList.add(style)});
        return this;
      },
      writable: false,
      enumerable: false
    },
    // batch add class
    'delClass': {
      value: function(style) {
        this.forEach(function(v){v.classList.remove(style)});
        return this;
      },
      writable: false,
      enumerable: false
    },

    // NodeType - Named Constant
    // 1 ELEMENT_NODE
    // 2 ATTRIBUTE_NODE
    // 3 TEXT_NODE
    // 4 CDATA_SECTION_NODE
    // 5 ENTITY_REFERENCE_NODE
    // 6 ENTITY_NODE
    // 7 PROCESSING_INSTRUCTION_NODE
    // 8 COMMENT_NODE
    // 9 DOCUMENT_NODE
    // 10  DOCUMENT_TYPE_NODE
    // 11  DOCUMENT_FRAGMENT_NODE
    // 12  NOTATION_NODE

    //EX: getIds(['id1,id2']).siblings().addClass('style');
    //EX: getIds(['id1,id2']).siblings().delClass('style');
    'siblings': {
      value: function() {      
        var a=[],//definede array to push this's siblings element.
            p,n,
            oriArrLength;

            for(var i=0; i<this.length; i++) {
              p=this[i].previousSibling; //The "this" mean is Finding id、class or tagname multiple element's array.
              while(p) {
        
                if(this.indexOf(p)==-1) { //First check previous element not equal to this array's element.
                  if(p.nodeType===1) {

                    if(a.length>0) {
                      if(a.indexOf(p)==-1) {//Second check previous element not equal to a's array elelment.
                        a.push(p);
                      }

                    }
                    else{
                      a.push(p); 
                    } 

                  }
                }


              p=p.previousSibling;//Final, assign the p's previous node to p.
            }
          }

          a.reverse()//Invert the order, so the order of the elements is in web's elements order.

          for(var i=0; i<this.length; i++) {
            n=this[i].nextSibling;
            while(n) {

              if(this.indexOf(n)==-1) { 
                if(n.nodeType===1) {

                  if(a.length>0) {
                    if(a.indexOf(n)==-1) {
                      a.push(n); 
                    }
                  }
                  else {
                    a.push(n); 
                  }
                }
              }

              n=n.nextSibling; 
            }
          }
        return a//Final, return in order's array.
      },
      writable: false,
      enumerable: false
    }
    // etc. etc.
  });

  // HTMLCollection.call(obj)

  Object.defineProperties(HTMLColPro, {
    'filter': {
      value: function(filterFn) {
        var arr = [].slice.call(this);
        return arr.filter(filterFn);
      },
      writable: false,
      enumerable: false
    },
    'map': {
      value: function(mapFn) {
        var arr = [].slice.call(this);
        return arr.map(mapFn);
      },
      writable: false,
      enumerable: false
    },
    'forEach': {
      value: function(forEachFn) {
        var arr = [].slice.call(this);
        arr.forEach(forEachFn);//The forEach can not return value, so it's not need add return;
      },      
      writable: false,
      enumerable: false
    },
    'addClass': {
      value: function(style) {
        this.forEach(function(v){v.classList.add(style)});
        return this;
      },
      writable: false,
      enumerable: false
    },
    'delClass': {
      value: function(style) {
        this.forEach(function(v){v.classList.remove(style)});
        return this;
      },
      writable: false,
      enumerable: false
    },
    'indexOf': {
        value: function(element) {
        var arr = [].slice.call(this);
        var elementIdx = arr.indexOf(element);        
        return elementIdx;
      },
      writable: false,
      enumerable: false
    }
  });
  



  // body append Child
  HTMLBodyElement.prototype.addKid = function(element) {  
    this.appendChild(element);
    return element;

  };

})(window, Element.prototype, Array.prototype, HTMLCollection.prototype);



