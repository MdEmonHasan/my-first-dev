fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => setCardPhoto(data));
function setCardPhoto(data){
    
    let list = '';

    // for(var i = 0; i<10; i++){
        data.forEach(element => {
        
            list = list + `<div class="col-lg-2">
            <div class="image">
                <img src="${element.url}" alt="" class="img-fluid w-100">
            </div>
        </div>`;
            
        });
    // }
    var card_div = document.getElementById('set-card');
    card_div.innerHTML = list;
}