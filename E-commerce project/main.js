var list = []
function generatebill(price,prodname,btnnumber,image)
{
    checklogin()

   if(q[btnnumber-1].value == '')
   {
       alert("Please enter a quantity")
       
   }
   else
   {
    var q = document.getElementsByClassName('quantity');
    var bill = 0;
    
        bill = q[btnnumber-1].value*price
        var obj = {
            'name': prodname,
            'quantity': q[btnnumber-1].value,
            'price': price,
            'image': image,
            'total': bill
        }
        list.push(obj)
        localStorage.setItem('list', JSON.stringify(list))
        localStorage.setItem('code',123)
        alert("Your total bill is: " + bill);
   }
    
   
   
}
function checklogin()
{
   if(localStorage.getItem('email') && localStorage.getItem('password'))
   {

   }
   else
   {
      alert("You must be logged in to continue")
      window.location.href = "login.html"
   }
}