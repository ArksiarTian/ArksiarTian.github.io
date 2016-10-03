window.onload = function()
{
    var one = document.getElementById('firstCard');
    var two = document.getElementById('secondCard');
    var third = document.getElementById('thirdCard');
    var text1=document.getElementById("text1");
    var text2=document.getElementById("text2");
    var text3=document.getElementById("text3");
    one.onmousedown=function()
    {
    	one.style.backgroundColor="#555555";
        window.location.href="http://mc.163.com";
    }
    one.onmouseover=function()
    {
		one.style.backgroundColor="#FFFFFF";
		one.style.border="1px solid #555555";
		//文字样式改变
		text1.style.color="#555555";	
    }
    one.onmouseout=function()
    {
		one.style.backgroundColor="#555555";
		one.style.border="1px solid #CCCCCC";
		//文字
		text1.style.color="#FFFFFF";	
    }
    two.onmousedown=function()
    {
    	one.style.backgroundColor="#555555";
    	window.location.href="http://ow.blizzard.cn";
    }
    two.onmouseover=function()
    {
		two.style.backgroundColor="#FFFFFF";
		two.style.border="1px solid #555555";
		text2.style.color="#555555";
    }
    two.onmouseout=function()
    {
		two.style.backgroundColor="#555555";
		two.style.border="1px solid #CCCCCC";
		text2.style.color="#FFFFFF";
    }
    third.onmousedown=function()
    {
    	one.style.backgroundColor="#555555";
    	window.location.href="http://www.github.com/ArksiarTian";
    }
    third.onmouseover=function()
    {
		third.style.backgroundColor="#FFFFFF";
		third.style.border="1px solid #555555";
		text3.style.color="#555555";
    }
    third.onmouseout=function()
    {
		third.style.backgroundColor="#555555";
		third.style.border="1px solid #CCCCCC";
		text3.style.color="#FFFFFF";
    }
 }
