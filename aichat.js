var a=0;
var oldicebot=0;
function laobing(){
	var obj=new Date();
	var t=obj.getHours();
	var str=user.value;
	if(user.value.match("你好")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'你好'+'</span></div>';
		return oib;
	}else if(user.value.match("早上好")!=null||user.value.match("早")!=null){
		if(t<=11&&t>=6){
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'早上好'+'</span></div>';
			return oib;
		}else{
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'emmm......现在好像不是早上'+'</span></div>';
			return oib;
		}
	}else if(user.value.match("晚上好")!=null){
		if(t>=19&&t<=5){
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'晚上好'+'</span></div>';
			return oib;
			/*x=document.getElementById("oldice");
			x.innerHTML='老冰：晚上好';*/
		}else{
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'emmm......现在好像不是晚上'+'</span></div>';
			return oib;
			/*x=document.getElementById("oldice");
			x.innerHTML='老冰：';*/
		}
	}else if(user.value.match("下午好")!=null){
		if(t>=14&&t<=18){
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'下午好'+'</span></div>';
			return oib;
			/*x=document.getElementById("oldice");
			x.innerHTML='老冰：';*/
		}else{
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'emmm......现在好像不是下午'+'</span></div>';
			return oib;
			//x=document.getElementById("oldice");
			//x.innerHTML='老冰：';
		}
	}else if(user.value.match("中午好")!=null){
		if(t>=12&&t<=13){
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'中午好'+'</span></div>';
			return oib;
			//x=document.getElementById("oldice");
			//x.innerHTML='老冰：';
		}else{
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'emmm......现在好像不是中午'+'</span></div>';
			return oib;
			//x=document.getElementById("oldice");
			//x.innerHTML='老冰：';
		}
	}else if(user.value.match("晚安")!=null){
		if(t>=19&&t<=23){
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'晚安~'+'</span></div>';
			return oib;
			//x=document.getElementById("oldice");
			//x.innerHTML='老冰：';
		}else{
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'emmm......现在好像不是晚上'+'</span></div>';
			return oib;
			//x=document.getElementById("oldice");
			//x.innerHTML='老冰：';
		}
	}else if(user.value.match("再见")!=null||user.value.match("拜")!=null||user.value.match("下了")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'Au revoir~~~'+'</span></div>';
		return oib;
		//x=document.getElementById("oldice");
		//x.innerHTML='老冰：';
		setTimeout(aurevoir,2000);
	}else if(user.value.match("儿子")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'?!!你竟然敢对我这样[○･｀Д´･ ○]？！让你尝尝我老冰的厉害！'+'</span></div>';
		setTimeout(chengfa,2000);
		//x=document.getElementById("oldice");
		//x.innerHTML='老冰：';
	}else{
		return false;
	}
}
function code(){
	if(user.value.match(".search")!=null){
		window.open('https://www.baidu.com/s?ie=UTF-8&wd='+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
		//x=document.getElementById("oldice");
		//x.innerHTML='老冰：请输入';
	}else if(user.value.match(".web")!=null){
		window.open(user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
		//x=document.getElementById("oldice");
		//x.innerHTML='老冰：请输入';
	}else if(user.value.match(".aurevoir")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'Au revoir~~~'+'</span></div>';
		setTimeout(aurevoir,2000);
		return oib;
		//x=document.getElementById("oldice");
		//x.innerHTML='老冰：';
	}else if(user.value.match(".help")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'聊天<br>.search([搜索内容]) 搜索（搜索引擎：百度）<br>.web([网址])网址导航<br>.cal计算器<br>.baike([查询内容])使用百度百科查询<br>.time显示时间<br>.hanyu([要查询的词、成语、诗词])<br>.pinyin([拼音查字,不用写音标])<br>.cidian([类型:此处可以输入:汉字/词语/组词/造句/近义词/反义词],[字/词])<br>.map([在地图上搜索])使用百度地图搜索地点<br>.video([搜索视频])使用好看视频搜索视频<br>.aurevoir关闭老冰<br><br>注：<br>1.老冰的代码仅支持半角符号。<br>2.网址导航需要加上http之类的前缀。<br>3.发送消息的快捷键：ctrl+enter。'+'</span></div>';
		return oib;
	}else if(user.value.match(".html")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'<textarea id="comphtml" style="width:500px;height:310px;" value=""></textarea><br><button onclick="comp_html()">运行！</button>'+'</span></div>';
		return oib;
	}
	else if(user.value.match(".time")!=null){
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+Date()+'</span></div>';
		return oib;
	}else if(user.value.match(".cal")!=null){
		oib='<div class="atk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><div style="width:500px;height:310px;">'+'<head><style>#ok,.td,#clear,#last,#cop{text-align:center;}.td,#clear,#ok,#last,#cop{background-color:rgba(223, 255, 243, 0.81);border:none;	height:60px;font-size: 22px;background: rgba(223, 255, 243, 0.81);}#showoo{width:98.7%;height:60px;outline: none;text-align: right;font-size: 15px;background: rgba(251, 255, 227, 0.81);}.td:hover{background:LightBlue;}#clear:hover{background:LightBlue;}#ok:hover{background:LightBlue;}#last:hover{background:LightBlue;}#cop:hover{background:LightBlue;}</style></head><body><table><tr><td colspan="5" id="showoo" style="line-height:17px;"><span id="showow" style="color:grey;">0</span><div style="height:10px;"></div><span id="show" style="top:0px;font-size:30px;">0</span></td></tr><tr><!--<td onclick="copy(this)" id="cop">复制</td>--><td class="td" id="zero"onclick="calcu()">0</td><td class="td">.</td><!--<td id="last"><</td>--><td class="td"onclick="calcu()">(</td><td class="td"onclick="calcu()">)</td><td id="clear"onclick="calcu()">c</td></tr><tr><td class="td"onclick="calcu()">1</td><td class="td"onclick="calcu()">2</td><td class="td"onclick="calcu()">3</td><td class="td"onclick="calcu()">+</td><td class="td"onclick="calcu()">-</td></tr><tr><td class="td"onclick="calcu()">4</td><td class="td"onclick="calcu()">5</td><td class="td"onclick="calcu()">6</td><td class="td"onclick="calcu()">*</td><td class="td"onclick="calcu()">/</td></tr><tr><td class="td"onclick="calcu()">7</td><td class="td"onclick="calcu()">8</td><td class="td"onclick="calcu()">9</td> <td id="ok" colspan="5"onclick="calcu()">=</td></tr></table></body>'+'</div></div><br><br>'+'<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'如要进行更高级的运算,请输入"cal.more",注意不要出现空格.'+'</span></div>';
		return oib;
	}else if(user.value.match("cal.more")!=null){
		oib='<div class="atk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><div style="width:500px;height:310px;">'+'<table border="1" style="text-align:center;"><tr><td><p id="higher"onclick="fjzys()">分解<br>质因数</p></td><td><p id="higher" onclick="ychs()">一次<br>函数</p></td><td><p id="higher" onclick="qyhs()">求余<br>函数</p></td><td><p id="higher" onclick="ggdl()">勾股<br>定理</p></td></tr><tr><td colspan="2"><p id="higher" onclick="kf()">开方</p></td><td colspan="2"><p id="higher" onclick="pf()">平方</p></td></tr><tr><td colspan="2"><p id="higher" onclick="sjxlxpd()">三角形类型判断</p></td><td colspan="2"><p id="higher" onclick="yyec()">一元二次方程</p></td></tr>'+'</span></div>';
		return oib;
	}else if(user.value.match(".baike")!=null){
		window.open("https://baike.baidu.com/item/"+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
	}else if(user.value.match(".hanyu")!=null){
		window.open("https://hanyu.baidu.com/s?wd="+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
	}else if(user.value.match(".pinyin")!=null){
		window.open("http://zidian.00cha.com/pinyin_"+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")"))+".html");
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
	}else if(user.value.match(".cidian")!=null){
		var getdic=user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")"));
		gettype=getdic.split(',');
		type=gettype[0];
		if(type=='汉字'){
			window.open("https://hyzd.org/zi/"+gettype[1]);
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		}else if(type=='词语'){
			window.open("https://hyzd.org/ci/"+gettype[1]);
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		}else if(type=='组词'){
			window.open("https://hyzd.org/zc/"+gettype[1]);
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		}else if(type=='造句'){
			window.open("https://hyzd.org/zj/"+gettype[1]);
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		}else if(type=='近义词'){
			window.open("https://hyzd.org/jin/"+gettype[1]);
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		}else if(type=='反义词'){
			window.open("https://hyzd.org/fan/"+gettype[1]);
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		}else{
			oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'null'+'</span></div>';
		}
		window.open("http://zidian.00cha.com/pinyin_"+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
	}else if(user.value.match(".map")!=null){
		window.open("https://map.baidu.com/search/"+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
	}else if(user.value.match(".video")!=null){
		window.open("https://haokan.baidu.com/videoui/page/search?query="+user.value.substring(user.value.indexOf("(")+1,user.value.indexOf(")")));
		oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay">'+'已执行完毕'+'</span></div>';
		return oib;
	}else{
		return false;
	} 
}
function aurevoir(){
	window.opener = null;
	window.open('', '_self');
	window.close();
}
function chengfa(){
	var k=2;
	for(var i=0;i<k;i++){
		k++;
		window.open("about:blank");
	}
}
function help(){
	if(a==0){
		x=document.getElementById("h");
		x.innerHTML='功能语句：<br>聊天.search([搜索内容]) 搜索（搜索引擎：百度）<br>.mooc([课程门户中预览该课程的网址],[课程中课程目录的网址])<br>.time时间<br>.where地点<br>.aurevoir关闭<br>计算（加减乘除平方）';
		a=1;
	}else{
		x=document.getElementById("h");
		x.innerHTML='';
		a=0;
	}
}
function comp_html(){
	str = '<div class="btalk"><span id="bsay">' +'运行以上代码'+ '</span><img src="https://p.ananas.chaoxing.com/star3/origin/022495d5cbb23c20b7fae8282e2a3fbd.png" width="5.5%"/></div>';
	oib='<div class="atalk"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=164820442,727739103&fm=26&gp=0.jpg" width="5.5%"/><span id="asay"><div style="width:500px;height:310px;">'+comphtml.value+'<div></span></div>';
	Words.innerHTML = Words.innerHTML + str;
	Words.innerHTML = Words.innerHTML + oib;
    user.value = "";
	return Words.innerHTML + oib;
}
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
function calcu(){
var calculatrice=0;
var oTd = document.getElementsByClassName("td");
var oK = document.getElementById("ok");
var oShow = document.getElementById("show");
var oShowo = document.getElementById("showow");
var oClear = document.getElementById("clear");
var run = '';//全局变量 公式

oK.onclick=function(){
  if(run!==""){
    oShow.innerHTML = eval(run).toFixed(12);
  }
  if(oShow.innerHTML!=="0"){
    run = show.innerHTML.toFixed(12);
  }
}

oClear.onclick=function(){
  run = '';
  show.innerHTML = '0';
  showow.innerHTML = '0';
}

for(var i = 0;i<=oTd.length;i++){
  oTd[i].index = i;
  oTd[i].onclick=function(){
    //alert(oTd[this.index].innerHTML)
    run += oTd[this.index].innerHTML;
   oShowo.innerHTML = run;
  };
}
}
function kf(){
	var x=prompt("请输入一个数,作为被开方数:");
	var y=prompt("请输入一个数,作为根指数:");
	y=1 / y;
	alert("运算结果：（四舍五入保留两位小数）"+Math.pow(x,y).toFixed(2)+"\n注：由于js是一门弱类型编程语言，在转换进制的时候会有极其细微的误差，如有出现，敬请谅解。");
}
function pf(){
	var x=prompt("请输入一个数,作为底数:");
	var y=prompt("请输入一个数,作为指数:");
	alert("运算结果(四舍五入保留两位小数）："+Math.pow(x,y).toFixed(2));
}
function ychs(){
	var a=prompt("请输入一个有序数对,作为函数图像上第一个点的坐标（不用加括号，x和y坐标用半角逗号分隔（不支持分数））:");
	var b=prompt("请输入一个有序数对,作为函数图像上第二个点的坐标（不用加括号，x和y坐标用半角逗号分隔（不支持分数））:");
	var a1=a.split(',');
	var a2=b.split(',');
	var k1=a1[1]-a2[1];
	var k2=a1[0]-a2[0];
	var k=(k1 / k2).toFixed(2);
	var b2=(a1[1]-k*a1[0]).toFixed(2);
	var b3=(a2[1]-k*a2[0]).toFixed(2);
	if(b2==b3){
		alert("解析式(精确到小数点后2位）：y="+k+"x+"+b2);
	}else{
		alert("Nan");
	}
}
function qyhs(){
	var a=prompt("请输入被除数:");
	var b=prompt("请输入除数:");
	alert("余数："+a%b);
}
function ggdl(){
	var a=prompt("若a,b为直角边,c为斜边,请在下方输入数值（保留两位小数,abc用半角逗号隔开,需要求出的数值用半角问号?代替）\n例：6,8,?（返回：10）");
	var a1=a.split(',');
	if(a1[0]=='?'){
		alert("a="+Math.sqrt(a1[2]*a1[2]-a1[1]*a1[1]).toFixed(2));
	}else if(a1[1]=='?'){
		alert("b="+Math.sqrt(a1[2]*a1[2]-a1[0]*a1[0]).toFixed(2));
	}else if(a1[2]=='?'){
		alert("c="+Math.sqrt(a1[1]*a1[1]+a1[0]*a1[0]).toFixed(2));
	}else{
		alert("Nan");
	}
}
function sjxlxpd(){
	var a=prompt("若a,b,c为三角形三边,请在下方输入数值（abc用半角逗号隔开,建议输入时c为最长边，否则有概率错乱）");
	var a1=a.split(',');
	a=a1[0];
	var b=a1[1];
	var c=a1[2];
		if(a*a+b*b==c*c){
			alert("直角三角形");
		}else if(c>=a&&c>=b&&a*a+b*b>c*c){
			alert("锐角三角形");
		}else if(a*a+b*b<c*c){
			alert("钝角三角形");
		}else{
			alert("Nan");
		}
}
function yyec(){
	var a=prompt("输入一个最简一元二次方程每项系数(次数从高到低,禁止出现全角符号,用半角逗号隔开,保留3位小数):");
	var k=a.split(',');
	a=k[0];
	var b=k[1];
	var c=k[2];
	var x1;var x2;var delta=Math.sqrt(b*b-4*a*c);
	a=2*a;
	var n;
	if(delta<0){
		alert("无解");
	}else if(delta>0){
		n=delta-b;
		x1=n / a;
		n=-delta-b;
		x2=n / a;
		alert("x1="+x1.toFixed(3)+";x2="+x2.toFixed(3));
	}else if(delta==0){
		x1=-(b / a);
		n=-x1;
		alert("x1=x2="+n.toFixed(3));
	}else{
		alert("Nan");
	}
}
