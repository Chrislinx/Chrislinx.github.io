var left=0;
var icon=document.getElementById('iconlist').getElementsByTagName('li');
var iconclick=document.querySelector('#iconlist');
var imgclick=document.querySelector('#imgl');
var shang=document.querySelector('.shang');
var xia=document.querySelector('.xia');
        run();
        var timer;
        function run(){
            if(left<=-6400){
                left=0;
            }
            var m=Math.floor(-left/800);
            imgl.style.marginLeft=left+"px";
            var n=(left%800==0)?n=1800:n=10;
            left-=10;
            timer=setTimeout(run,n);
            iconchange(m);
        }
        function imglocaltion(n){
            let lt=-(n*800);
            imgl.style.marginLeft=lt+"px";
            left=lt;
        }
        shang.onclick=function(){
            let shanggo=Math.floor(-left/800)-1;
            if(shanggo==-1){
                shanggo=7;
            }
            imglocaltion(shanggo);
        }
        xia.onclick=function(){
            let xiago=Math.floor(-left/800)+1;
            if(xiago==8){
                xiago=0;
            }
            imglocaltion(xiago);
        }
        function iconchange(m){
            for(let index=0;index<icon.length;index++){ 
                icon[index].style.backgroundColor='';
        }
        if(m<icon.length){
            icon[m].style.backgroundColor='#3AD9FF';

        }
    }

    iconclick.onclick=function(){
        var tg=event.target;
        let ico1=tg.innerHTML-1;
        imglocaltion(ico1);
        iconchange(ico1); 
    }

    imgclick.onmouseover=function(){
        clearTimeout(timer);
    }

    imgclick.onmouseout=function(){
        run();
    }

