function Point(x, y) {
	this.x = x;
	this.y = y;
}

var p1 = new Point(100, 150);
var p2 = new Point(450, 50);

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var circ = [];
var companiesActive = [];
var timeElapsed = 0;
var seconds = 0;
var minutes = 0;
var updateFrequency = 30;
var startGroup = 0;

var pointsData = [{"x":1358,"y":2067},{"x":1378,"y":1966},{"x":1473,"y":1936},{"x":1481,"y":1927},{"x":1489,"y":1916},{"x":1492,"y":1904},{"x":1493,"y":1888},{"x":1492,"y":1871},{"x":1485,"y":1853},{"x":1476,"y":1835},{"x":1470,"y":1819},{"x":1474,"y":1809},{"x":1486,"y":1803},{"x":1495,"y":1790},{"x":1500,"y":1779},{"x":1498,"y":1729},{"x":1499,"y":1710},{"x":1505,"y":1693},{"x":1514,"y":1675},{"x":1519,"y":1656},{"x":1521,"y":1637},{"x":1520,"y":1617},{"x":1522,"y":1601},{"x":1529,"y":1588},{"x":1537,"y":1580},{"x":1546,"y":1577},{"x":1554,"y":1577},{"x":1561,"y":1583},{"x":1568,"y":1592},{"x":1598,"y":1643},{"x":1586,"y":1655},{"x":1573,"y":1668},{"x":1561,"y":1681},{"x":1555,"y":1691},{"x":1552,"y":1703},{"x":1551,"y":1715},{"x":1553,"y":1728},{"x":1556,"y":1748},{"x":1557,"y":1761},{"x":1556,"y":1776},{"x":1553,"y":1790},{"x":1491,"y":1808},{"x":1459,"y":1812},{"x":1426,"y":1814},{"x":1397,"y":1814},{"x":1380,"y":1809},{"x":1363,"y":1798},{"x":1343,"y":1788},{"x":1320,"y":1783},{"x":1302,"y":1782},{"x":1264,"y":1782},{"x":1246,"y":1786},{"x":1231,"y":1794},{"x":1218,"y":1804},{"x":1206,"y":1815},{"x":1197,"y":1828},{"x":1190,"y":1840},{"x":1155,"y":1799},{"x":1132,"y":1776},{"x":1090,"y":1733},{"x":1041,"y":1686},{"x":1040,"y":1675},{"x":943,"y":1666},{"x":877,"y":1580},{"x":841,"y":1609},{"x":816,"y":1635},{"x":778,"y":1678},{"x":758,"y":1700},{"x":740,"y":1719},{"x":732,"y":1724},{"x":723,"y":1729},{"x":667,"y":1678},{"x":627,"y":1723},{"x":609,"y":1710},{"x":601,"y":1723},{"x":580,"y":1711},{"x":560,"y":1709},{"x":421,"y":1301},{"x":428,"y":1271},{"x":420,"y":1241},{"x":412,"y":1232},{"x":407,"y":1227},{"x":409,"y":1221},{"x":428,"y":1230},{"x":441,"y":1240},{"x":451,"y":1251},{"x":457,"y":1263},{"x":462,"y":1275},{"x":466,"y":1290},{"x":471,"y":1306},{"x":477,"y":1322},{"x":486,"y":1339},{"x":496,"y":1357},{"x":508,"y":1371},{"x":514,"y":1363},{"x":525,"y":1351},{"x":577,"y":1309},{"x":591,"y":1289},{"x":609,"y":1271},{"x":632,"y":1253},{"x":617,"y":1106},{"x":658,"y":1100},{"x":691,"y":1098},{"x":718,"y":1100},{"x":790,"y":1083},{"x":796,"y":1087},{"x":826,"y":1063},{"x":817,"y":1030},{"x":872,"y":1015},{"x":892,"y":1006},{"x":908,"y":992},{"x":911,"y":982},{"x":912,"y":970},{"x":964,"y":968},{"x":974,"y":987},{"x":977,"y":999},{"x":975,"y":1018},{"x":1015,"y":1010},{"x":1018,"y":1002},{"x":1026,"y":994},{"x":1032,"y":973},{"x":1034,"y":945},{"x":1037,"y":899},{"x":1041,"y":852},{"x":1045,"y":822},{"x":1052,"y":791},{"x":1059,"y":765},{"x":1071,"y":730},{"x":1158,"y":779},{"x":1220,"y":778},{"x":1223,"y":779},{"x":1234,"y":780},{"x":1246,"y":788},{"x":1255,"y":794},{"x":1259,"y":794},{"x":1261,"y":833},{"x":1343,"y":872},{"x":1353,"y":853},{"x":1356,"y":851},{"x":1367,"y":835},{"x":1402,"y":912},{"x":1444,"y":893},{"x":1396,"y":781},{"x":1407,"y":772},{"x":1411,"y":765},{"x":1411,"y":755},{"x":1415,"y":749},{"x":1426,"y":745},{"x":1433,"y":748},{"x":1488,"y":747},{"x":1514,"y":743},{"x":1540,"y":746},{"x":1548,"y":725},{"x":1556,"y":717},{"x":1568,"y":714},{"x":1577,"y":717},{"x":1628,"y":686},{"x":1630,"y":673},{"x":1627,"y":661},{"x":1618,"y":649},{"x":1589,"y":635},{"x":1574,"y":617},{"x":1595,"y":560},{"x":1598,"y":540},{"x":1603,"y":497},{"x":1624,"y":433},{"x":1614,"y":422},{"x":1653,"y":380},{"x":1666,"y":373},{"x":1682,"y":362},{"x":1681,"y":354},{"x":1675,"y":347},{"x":1761,"y":254},{"x":1773,"y":248},{"x":1784,"y":248},{"x":1833,"y":267},{"x":1847,"y":247},{"x":1856,"y":237},{"x":1867,"y":238},{"x":1891,"y":252},{"x":1904,"y":263},{"x":1951,"y":400},{"x":1956,"y":413},{"x":1963,"y":424},{"x":2055,"y":545},{"x":2063,"y":559},{"x":2067,"y":574},{"x":2069,"y":587},{"x":2068,"y":611},{"x":2065,"y":633},{"x":2062,"y":641},{"x":2052,"y":650},{"x":2033,"y":657},{"x":2021,"y":655},{"x":2017,"y":648},{"x":2024,"y":640},{"x":2035,"y":636},{"x":2047,"y":635},{"x":2055,"y":642},{"x":2059,"y":651},{"x":2059,"y":660},{"x":2054,"y":663},{"x":1998,"y":677},{"x":2059,"y":902},{"x":2067,"y":924},{"x":2299,"y":1224},{"x":2295,"y":1227},{"x":2185,"y":1086},{"x":2097,"y":1157},{"x":2076,"y":1172},{"x":1911,"y":1223},{"x":1867,"y":1221},{"x":1858,"y":1259},{"x":1854,"y":1268},{"x":1847,"y":1276},{"x":1811,"y":1312},{"x":1807,"y":1320},{"x":1805,"y":1329},{"x":1801,"y":1341},{"x":1794,"y":1359},{"x":1787,"y":1373},{"x":1772,"y":1400},{"x":1718,"y":1480},{"x":1708,"y":1497},{"x":1700,"y":1511},{"x":1696,"y":1527},{"x":1693,"y":1546},{"x":1691,"y":1569},{"x":1690,"y":1593},{"x":1690,"y":1603},{"x":1703,"y":1624},{"x":1695,"y":1634},{"x":1683,"y":1718},{"x":1677,"y":1736},{"x":1671,"y":1753},{"x":1671,"y":1760},{"x":1665,"y":1764},{"x":1661,"y":1771},{"x":1627,"y":1760},{"x":1623,"y":1762},{"x":1603,"y":1813},{"x":1598,"y":1820},{"x":1590,"y":1827},{"x":1580,"y":1830},{"x":1569,"y":1829},{"x":1563,"y":1828},{"x":1563,"y":1844},{"x":1560,"y":1855},{"x":1554,"y":1871},{"x":1545,"y":1886},{"x":1529,"y":1899},{"x":1515,"y":1904},{"x":1505,"y":1906},{"x":1504,"y":1915},{"x":1501,"y":1921},{"x":1490,"y":1931},{"x":1481,"y":1935},{"x":1481,"y":1944},{"x":1452,"y":1963},{"x":1424,"y":1981},{"x":1409,"y":1994},{"x":1398,"y":2007},{"x":1385,"y":2025},{"x":1373,"y":2042},{"x":1368,"y":2051},{"x":1359,"y":2066}];
//var pointsData = [{"x":0, "y":0}, {"x":1035,"y":963}];
var xc = 1;//879*(1/2463);
var yc = 1;//818*(1/2290); 

var img = document.getElementById('vismap');
img.onload = function(){
	ctx.canvas.width = img.clientWidth;
	ctx.canvas.height = img.clientHeight + 30;
	xc = img.clientWidth/2463;
	yc = img.clientHeight/2290;
	//console.log(xc);
	//console.log(yc);
	
	for(var i = 0; i < pointsData.length;i++) {
		pointsData[i].x = xc*pointsData[i].x;
		pointsData[i].y = yc*pointsData[i].y + 30;
		//console.log(pointsData[i].x);
	}
	run();
};

function run() {
	var points = [];
	var totDist = 0;
	var fiKm = 0;
	var tenKm = 0;
	var fifKm = 0;
	var twKm = 0;
	
	for (var i = 0; i < pointsData.length - 1; i++) {
		var xs = 0;
		var ys = 0;
	
		xs = Math.pow(pointsData[i + 1].x - pointsData[i].x, 2);
		ys = Math.pow(pointsData[i + 1].y - pointsData[i].y, 2);
		totDist += Math.sqrt(xs + ys);
		//console.log(totDist);
		//2463*2290
		//879*818
		fiKm = 5 * totDist / 21; // i == 50 || 51 || 52
		tenKm = 10 * totDist / 21; // i == 
		fifKm = 15 * totDist / 21;
		twKm = 20 * totDist / 21;
		/*
		console.log(fiKm + "he");
		console.log(tenKm + "ha");
		console.log(fifKm + "ho");
		console.log(twKm + "hi");
		
		
		 * 845.0010473983547he
			1690.0020947967093ha
			2535.003142195064ho
			3380.0041895934187hi
			
			71fem
			127tio
			191femton
			239tjugo
		 
		
		if(totDist > 840 && totDist < 855){
			console.log(i + "fem");
			
		} else if(totDist > 1680 && totDist < 1710){
			console.log(i + "tio");
			
		} else if(totDist > 2530 && totDist < 2540){
			console.log(i + "femton");
			
		} else if(totDist > 3375 && totDist < 3390){
			console.log(i + "tjugo");
			
		}*/
	}
		
	for (var i = 0; i < pointsData.length; i++) {
		points.push(new Point(pointsData[i].x, pointsData[i].y));
	}
	
	base_image = new Image();
			//base_image.src = 'MapNoPath.png';
		  	//base_image.onload = function(){
		  		
	var myTeams = {
		'teams':[{'name':'Volvo','points':5},
		{'name':'Chalmers','points':45},
		{'name':'IxD','points':30},
		{'name':'Saab','points':15}
		]
	};
	
	var myTeams2 = ['Volvo','Chalmers','IxD','Saab']; 		
		  		
	$('#add-team').click(function() {
		var team = $('#search-team').val();
		 $('#search-team').val('');
		 for(var i = 0; i < myTeams.teams.length;i++) {
		 	if(team == myTeams.teams[i].name) {
		 		$('#listOfTeams').append('<li><h2>'+team+'</h2><div>'+myTeams.teams[i].points+' points</div></li>');
		 		
		 		deactivateTeam(myTeams2.indexOf(team)+1);
		 	} 
		 }
		/*if(team == 'Volvo Car') {
			$('#listOfTeams').append('<li><h2>'+team+'</h2></li>');
			deactivateTeam(1);
		
		} else if(team == 'IxD') {
			$('#listOfTeams').append('<li><h2>'+team+'</h2></li>');
			deactivateTeam(2);
		} 
		else if(team == '2' || team == '3' || team == '4') {
			deactivateTeam(team);
		}*/
		 
	});
	
	$('#add-all-teams').click(function() {
		for (var i = 0; i < 9; i++) {
			companiesActive[i] = true;
		}
	});
	
	$('#remove-all-teams').click(function() {
		$('#listOfTeams').empty();
		for (var i = 0; i < 9; i++) {
			companiesActive[i] = false;
		}
	});
	
	$.getJSON( "js/random1000.json", function( data ) {
			/*ctx.beginPath();
			ctx.moveTo(p1.x,p1.y);
			ctx.lineTo(p2.x,p2.y);
			ctx.stroke();*/
			//ctx.canvas.width = document.getElementById('vismap').clientWidth;
			//ctx.canvas.height = document.getElementById('vismap').clientHeight;
			
			var t = 0;
			
			for (var i = 0; i < data.ble.length; i++) {
				circ[i] = new Circle(data.ble[i].time/2);
			}
			
			for (var i = 0; i < 9; i++) {
				companiesActive[i] = false;
			}
			//console.log(circ.length);
			
			
			setInterval(function() {
			redraw();
			var skip = [];
						
			for (var i = 0; i < circ.length; i++) {
				if(data.ble[i].startgroup <= startGroup)
					if(!include(skip, i)){
						var radius = 8;
						for(var j = 0; j < circ.length; j++){
							if(j != i){
							    // Jämföra points istället för position?
								if(Math.abs(circ[i].position.x - circ[j].position.x) < 20 //Testar med 1, blir mer "svansigt".
									&& Math.abs(circ[i].position.y - circ[j].position.y) < 20){
									skip.push(j);
									if (radius <= 30) {
										radius = radius + 0.2;
									} else {break;}
								}
							}
						}
						circ[i].move(1);
						if(companiesActive[data.ble[i].company]) {
							drawObject(circ[i], data.ble[i].company, radius);
						}
					}
				} skip.splice(0, skip.length);
		}, updateFrequency);
		
	});	
	
	function Circle(endTime) {
		this.endTime = endTime;
		var start, next;
		var pointIndex = 1;
		var ds = 0;
	
		this.time = 0;
		start = points[0];
		next = points[1];
		this.position = new Point(start.x, start.y);
	
		this.x = function() {
			return this.position.x;
		};
	
		this.y = function() {
			return this.position.y;
		};
	
		var xs = Math.pow(next.x - start.x, 2);
		var ys = Math.pow(next.y - start.y, 2);
		ds = Math.sqrt(xs + ys);
	
		this.move = function(time) {
			this.time += time;
	
			if (this.time >= endTime * (ds / totDist)) {
				this.time = 0;
	
				if (points.length > 0) {
	
					start = next;
	
					if (pointIndex < points.length - 1) {
						next = points[pointIndex++];
					} else {
						pointIndex = 0;
						next = points[pointIndex];
					}
				}
				var xs = Math.pow(next.x - start.x, 2);
				var ys = Math.pow(next.y - start.y, 2);
				ds = Math.sqrt(xs + ys);
			}
			var delta = this.time / (endTime * (ds / totDist));
			this.position.x = start.x + delta * (next.x - start.x);
			this.position.y = start.y + delta * (next.y - start.y);
		};
	}
	
	base_image = new Image();
			//base_image.src = 'MapNoPath.png';
		  	//base_image.onload = function(){
		    
	function include(list, elm) {
		for(var i = 0; i < list.length; i++) {
			if (list[i] == elm){
				list.splice(i, 1);
				return true;
	       	} else {
	       		return false;
	       	}
	   	} return false;
	}
	
	function redraw() {
		/*ctx.fillStyle = "#ffffff";
		if(base_image){
			ctx.drawImage(base_image, 0, 0);
		}*/
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.font="50px Helvetica";
		
		timeElapsed = timeElapsed + updateFrequency;
		if (timeElapsed > startGroup*10000)
			startGroup++;
		seconds = seconds + updateFrequency /1000;
		if (seconds >= 60) {
			minutes++;
			seconds = seconds - 60;
		}
		
		//ctx.fillText(minutes + "." + seconds.toFixed(2),10,80);
	}
	
	function drawObject(obj, col, rad) {
		
		/*
		if(col == 0){
			ctx.fillStyle = "#3498db5";
		} else if (col == 1){
			ctx.fillStyle = "#2ecc71";
		} else if (col == 2){
			ctx.fillStyle = "#9b59b6";
		} else if (col == 3){
			ctx.fillStyle = "#f1c40f";
		} else if (col == 4){
			ctx.fillStyle = "#e67e22";
		} else if (col == 5){
			ctx.fillStyle = "#e74c3c";
		} else if (col == 6){
			ctx.fillStyle = "#2c3e50";
		} else if (col == 7){
			ctx.fillStyle = "#17a88c";
		} else if (col == 8){
			ctx.fillStyle = "#27ae60";							
		} else {
			ctx.fillStyle = "#2980b9";
		}
		  */
		ctx.fillStyle = "#3498db";
		//ctx.fillStyle = "#ff0000";
		ctx.beginPath();
		ctx.arc(obj.x(), obj.y(), rad, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
	
	$('.team-button').click(function() {
		if($(this).html() == 'Volvo Cars') {
			deactivateTeam(3);
		} else if($(this).html() == 'Chalmers UNI') {
			deactivateTeam(1);
		} else if($(this).html() == 'Gothenburg UNI') {
			deactivateTeam(2);
		}
	});
	
	function deactivateTeam(c) {
		console.log('deactivate');
		if (companiesActive[c] == false) {
	  		companiesActive[c] = true;
	  		} else {companiesActive[c] = false;}
	}
	
	function myFunction(company) {
		console.log('hej');
	  	if (companiesActive[company] == false) {
	  		companiesActive[company] = true;
	  	} else {companiesActive[company] = false;}
	  	
	}
}
