var a=("在大上海的意义何在？");
document.write(a);

function 弹出(){
	alert("调用正确！");
}

//弹出对话框，根据点击按钮回复
function why(){
	var message=confirm("你是为了什么待在上海？");
	if(message==true){
		document.write("赚钱！");
	}
	else{
		document.write("不知道！");
	}
}

//提问，根据输入的数据
function QS(){
	var score=prompt("输入你的分数");
	if(score == 100){
		document.write("哇，学霸！");
	}
	else if(score>=80){
		document.write("优秀！");
	}
	else if(score>=60){
		document.write("加油哦！");
	}
	else if(score=null){
		document.write("请输入分数");
	}
	else
	{
		document.write("你这太少了吧！");
	}
}

//打开窗口
function Wopen(){
	window.open('https://www.baidu.com/','_blank');
}

//关闭窗口
function Close(){
	window.close();
}

//打开新窗口，弹出对话框，有if判断语句，打开慕课网
function muke(){
	var op = confirm("真的都要打开新世界的大门吗？");
	if(op==true){
		window.open('https://www.baidu.com','baidu','_blank','width=400px,height=500px,menubar=no,toolbar=no')
	}
	else{
		document.write("哎呀呀呀，看来你不想要寻找啊。");
	}
}
