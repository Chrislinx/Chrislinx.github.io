function changeColor(){
	var trs  = document.getElementById("list").getElementsByTagName("tr");
	for(var i=0; i<trs.length; i=i+2){
		trs[i].className="even";
	}
}3