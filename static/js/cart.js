var updateBtns = document.getElementsByClassName('update-cart')


for(var i =0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productID:', productId, 'Action:', action)

        console.log('USER:', user)
        if (user === 'AnonymousUser'){
            console.log('User is not authenticated')
        }else{
            console.log('User is authenticated, sending data...')
        }
    })
}