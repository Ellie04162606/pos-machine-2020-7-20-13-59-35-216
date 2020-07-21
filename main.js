function printReceipt(barcodes) {
    var cartItems = getEachItemCount(barcodes);
	cartItems = getItemsInfo(cartItems);
	cartItems = getItemsInfoWithTotalPrice(cartItems);
	var allCartItemPrice = getAllItemsPrice(cartItems);
	var receipt = generateReceipt(cartItems,allCartItemPrice);
	console.log(receipt);
}

function getBarcodeInfoList() {
    return [
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
    ]
}

function getEachItemCount(barcodes){
	var item = counterArray(barcodes);
	var cartItems=[];
	Object.keys(item).forEach(function(key){
		cartItems.push({
			barcode:key,
			count:item[key]
		})
	});
	return cartItems;
}

function counterArray(arr){
        var obj = {}; 
        arr.forEach(function(v,k){
            if(obj[v]){
                obj[v]++;
            }else{
                obj[v] = 1;
            }
        })
        return obj;
}

function getItemsInfo(cartItems){
	let barcodeInfoList = getBarcodeInfoList();
	cartItems.forEach(function(cartItems){
		let barcodeInfo = barcodeInfoList.find(elem => elem.barcode === cartItems.barcode);
        if (barcodeInfo) {
            cartItems.name = barcodeInfo.name;
            cartItems.unitPrice = barcodeInfo.price;
        }
	})
	return cartItems;
}

function getItemsInfoWithTotalPrice(cartItems){
	cartItems.forEach(cartItems => {
        cartItems.totalPrice = cartItems.unitPrice * cartItems.count;
    })
    return cartItems;
}

function getAllItemsPrice(cartItems){
	let totalPrice = 0;
    cartItems.forEach(cartItems => totalPrice += cartItems.totalPrice)
    return totalPrice;
}

function generateReceipt(cartItems,allCartItemPrice){
	let receiptItems = []
    cartItems.forEach(item => {
        let receiptItem = `Name: ${item.name}, Quantity: ${item.count}, Unit price: ${item.unitPrice} (yuan), Subtotal: ${item.totalPrice} (yuan)\n`;
        receiptItems.push(receiptItem);
    })
	let receipt = `\n***<store earning no money>Receipt ***\n`
    receiptItems.forEach(item => receipt += item)
    receipt += `----------------------\n`
    receipt += `Total: ${allCartItemPrice} (yuan)\n`
    receipt += `**********************`
    return receipt;
}


module.exports = {
    printReceipt
};