
  


$(document).ready(function () {
    
   

    
   var IDs = [];
   $('body').find("section").each(function () { IDs.push(this.id); });
   IDs.forEach( (id) => {
       if(id !=""){
           var a = "a[href$="+id+"]";
        $("#"+id).mouseover( function() {
            $(a).addClass("active");
              
         })
      
         $("#"+id).mouseout(function () {
          $(a).removeClass("active");
         })  
       }
   })


   
});