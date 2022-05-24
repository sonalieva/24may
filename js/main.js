let visitCount = localStorage.getItem('visitCount');
let besketbtn = document.getElementById('shopping')

let sidebar = document.getElementById('sidebar');

let closebtn=document.querySelector('.fa-xmark')


function BasketItem(id,count){
    this.Id = id;
    this.Count = count;
}

if(!visitCount){
    visitCount=0;
}

visitCount++;

localStorage.setItem('visitCount',visitCount)

let btns = document.querySelectorAll('.card .btn');

btns.forEach(el=>{
    el.addEventListener('click',function(e){
        let dataId = el.parentNode.parentNode.getAttribute('data-id');
        
        let basketStr = localStorage.getItem('basket');

        let basketItems;
        if(!basketStr){
            basketItems = [];
        }
        else{
            basketItems = JSON.parse(basketStr);
        }

        let item = basketItems.find(x=>x.Id == dataId);

        if(item){
            item.Count++;
        }
        else{
            item = new BasketItem(dataId,1);
            basketItems.push(item);
        }

        document.querySelector('.basket .item-count').innerText = basketItems.length;

        localStorage.setItem('basket',JSON.stringify(basketItems))
         let div = document.createElement('div')
       let divid =document.createAttribute('data-id')
       divid.value = dataId
      
        let span = document.createElement('span')
        let img = document.createElement('img');
        let icon = document.createElement('i');
        icon.classList.add('fa-solid')
        icon.classList.add('fa-ban')
        icon.classList.add('delete')
        img.classList.add('sideimg')
        span.classList.add('sidespan')
        let imgatr = document.createAttribute('src')
        img.setAttributeNode(imgatr)
        let dataIds = el.parentNode.parentNode
                let imgssss=dataIds.children[0]
                console.log(imgssss.src)
                imgatr.value= imgssss.src
                span.innerText='Count:'+ ' '+item.Count
                div.appendChild(img)
                div.appendChild(span)
                div.appendChild(icon)
                sidebar.appendChild(div)
        
      
        icon.addEventListener('click' ,function(){
            div.remove()
    })
})



console.log(visitCount)
