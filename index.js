    var len = document.getElementsByClassName("heading").length;
    for(var i=0;i<len;i++){
        document.querySelectorAll(".heading")[i].addEventListener("click" ,function(event){

            // alert("hai");
            if(this.innerHTML === "Home"){
                var j = 0;
                var i = 1;
                var k = 2;
            }else if(this.innerHTML === "Profile"){
                var j = 1;
                var i= 0;
                var k = 2;
            }
            else{
                var j = 2;
                var i = 0;
                var k = 1;
            }
            document.querySelectorAll(".heading")[i].classList.remove("ani");
            document.querySelectorAll(".heading")[k].classList.remove("ani")
            var el = this.innerHTML;
            document.querySelectorAll(".heading")[j].classList.add("ani");


        });
  }
// $("h1").css("color","#455"); 