var times=document.getElementById("times")
	function showtime(){
		t=setInterval(function(){
		var date=new Date;
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var d=date.getDate();
		var h=date.getHours();
		var i=date.getMinutes();
		var s=date.getSeconds();
        if(i<10){
            i="0"+i;
        }
        if(s<10){
            s="0"+s;
        }
		times.innerHTML="系统时间："+y+"/"+m+"/"+d+" "+h+":"+i+":"+s;
	},1000)
}
	showtime()
