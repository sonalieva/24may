let visitCount = localStorage.getItem('visitCount');

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
    })
})



console.log(visitCount)