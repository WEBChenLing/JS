			var mychar = document.getElementById("txt");
		//改变颜色
		function changeColor(){
			mychar.style.color="crimson";
			mychar.style.background=" burlywood";
		}
		//改变尺寸
		function changeWidth(){
			mychar.style.width="300px";
			mychar.style.height="500px";
		}
		//隐藏
		function hidetext(){
			mychar.style.display="none";
		}
		//显示
		function showtext(){
			mychar.style.display="block";
		}
		//重新设置
		function txt1(){
			var re = confirm("是否需要重置设置？");
			if(re==true){
				mychar.removeAttribute("style");
			}
			else{
				document.write("为您保留。");
			}
		}
