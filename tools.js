//   封装函数 getByClassName
 Document.prototype.getByClassName = function(className){
        var arr = document.getElementsByTagName('*');
        var allArr = Array.prototype.slice.call(arr,0);
        var filterArr = [];
        function dealClass(dom){
            var reg = /\s+/g;
            var arrClassName = dom.className.replace(reg,' ').trim();
            return arrClassName;
        }
        allArr.forEach(function(ele,index){
            var itemClassArr = dealClass(ele).split(' ');
            console.log(itemClassArr);
            for(var i = 0; i < itemClassArr.length;i++){
                if(itemClassArr[i] == className){
                    filterArr.push(ele);
                    break;
                }
            }
        })
        return filterArr;
    }
// 深度克隆
function deepClone(target,origin){
        var copy;
        if(origin != null){
            for(var prop in origin){
                src = target[prop];
                copy = origin[prop];
                if(copy && typeof copy == 'object'){
                    if(Object.prototype.toString.call(copy) == '[object Object]'){
                        src = src ? src : {};
                    }else{
                        src = src ? src :[];
                    }
                    target[prop] = deepClone(src,copy)
                }else{
                    target[prop] = copy;
                }
            }
        }
        return target;
    }