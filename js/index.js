window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
	window.setTimeout(t, 1e3 / 60)
}, window.onresize = function() {
	c.width = cw = c.offsetWidth, c.height = ch = c.offsetHeight, ctx.fillStyle = "rgba(21,21,21,1)", ctx.fillRect(0, 0, cw, ch)
};
var cf = document.createElement("canvas"),
	c = document.getElementById("startrack");
c.width = cf.width = cw = c.offsetWidth, c.height = cf.height = ch = c.offsetHeight;
var longside = Math.max(cw, ch);
cf.width = 2.6 * longside, cf.height = 2.6 * longside;
var ctx = c.getContext("2d"),
	cftx = cf.getContext("2d"),
	centerX = cw,
	centerY = 0,
	stars = [],
	drawTimes = 0;

function rand(t, a) {
	var e = a - t,
		n = Math.random();
	return t + Math.round(n * e)
}

function createStar() {
	stars.push({
		x: rand(-cf.width, cf.width),
		y: rand(-cf.height, cf.height),
		size: 1,
		color: randomColor()
	})
}

function randomColor() {
	return "rgba(" + rand(120, 255) + "," + rand(120, 255) + "," + rand(120, 255) + "," + rand(30, 100) / 100 + ")"
}

function drawStar() {
	for (var t = stars.length; t--;) {
		var a = stars[t];
		cftx.beginPath(), cftx.arc(a.x, a.y, a.size, 0, 2 * Math.PI, !0), cftx.fillStyle = a.color, cftx.closePath(), cftx.fill()
	}
}

function drawfromCache() {
	ctx.drawImage(cf, -cf.width / 2, -cf.height / 2)
}

function loop() {
	drawfromCache(), ++drawTimes > 150 && drawTimes % 8 == 0 && (ctx.fillStyle = "rgba(0,0,0,.04)", ctx.fillRect(-3 * longside, -3 * longside, 6 * longside, 6 * longside)), rotateCanvas(.025)
}

function rotateCanvas(t) {
	ctx.rotate(t * Math.PI / 180)
}
ctx.fillStyle = "rgba(21,21,21,1)", ctx.fillRect(0, 0, cw, ch), ctx.lineCap = "round";
for (var count = 2e4; count--;) createStar();
drawStar();
var x = centerX,
	y = centerY;

function fireAnimate() {
	requestAnimFrame(fireAnimate), loop()
}

function changeStar() {
	loop = function() {
		drawfromCache(), ++drawTimes > 150 && drawTimes % 8 == 0 && (ctx.fillStyle = "rgba(0,0,0,.04)", ctx.fillRect(-3 * longside, -3 * longside, 6 * longside, 6 * longside)), rotateCanvas(random(1, 100))
	}
}

function getMsg() {
	var t = ["当你重新踏上旅途之后，一定要记得旅途本身的意义。<br>提瓦特的飞鸟、诗和城邦，女皇、愚人和怪物……都是你旅途的一部分。<br>终点并不意味着一切，在抵达终点之前，用你的眼睛，多多观察这个世界吧……", "最初的鸟儿是不会飞翔的<br>飞翔是它们勇敢跃入峡谷的奖励。", "风带来故事的种子<br>时间使其发芽。", "正是因为无法更改，无可违逆，只能接受<br>命运才会被称之为命运", "欲买桂花同载酒...<br>只可惜故人，何日再见呢?", "总会有地上的生灵<br>敢于直面雷霆的威光", "只有不失去你的崇高，整个世界都会向你敞开", "若你困于无风之地，我将为你奏响高天之歌", "我虽无意逐鹿，却知苍生苦楚<br>只愿荡涤四方，护得浮世一隅", "曲高未必人不识，自有知音和清词", "浮世千百年来风景依旧<br>人之在世却如白露与泡影", "在黎明到来之前<br>必须有人稍微照亮黑暗", "我会一直前行<br>直到黎明到来", "常道恢弘，鸣神永恒", "在旅途的终点再见吧<br>去见证一切事物的沉淀"],
		a = random(0, t.length - 1);
	$("#slogan")
		.html(t[a])
}

function random(t, a) {
	var e = a - t,
		n = Math.random();
	return t + Math.round(n * e)
}
ctx.translate(x, y), fireAnimate(), $(function() {
	getMsg()
}), window.onscroll = function() {
	$(window)
		.scrollTop() > .6 * $(window)
		.height() ? $(".background")
		.addClass("fixed") : $(".background")
		.removeClass("fixed")
}, $(function() {
	$(".chatbox .line[data-meta-conf=init]")
		.css("display", "block"), $("[data-meta-flag]")
		.on("click", function() {
			var t = $(this)
				.attr("data-meta-flag"),
				a = $(this)
				.parent(".line.question");
			if (a.hasClass("disable")) $(this)
				.removeClass("error")
				.addClass("error");
			else {
				! function(t) {
					switch (t) {
						case "the-end":
						case "nekotora-magic":
							$(".chatbox")
								.slideUp();
							break;
						case "do-another-style":
							$("body")
								.html('\n          <div class="container">\n            <h1>浣犲ソ鎴戞槸鍝炶弴/Nekotora.</h1>\n            <h4>瀹屼簡銆�</h4>\n          </div>\n        ')
					}
				}(t), a.addClass("disable"), $(this)
					.addClass("selected"), $(".chatbox .loading")
					.css("display", "block"), $(`[data-meta-content=${t}]>*`)
					.css("display", "none"), $(`[data-meta-content=${t}]`)
					.css("display", "block");
				var e = 0;
				$(`[data-meta-content=${t}]>*`)
					.each(function() {
						var t = random(1e3, 2e3);
						e += t, $(".chatbox .loading")
							.css("display", "block"), setTimeout(() => {
								$(this)
									.fadeIn()
							}, e)
					}), setTimeout(() => {
						$(".chatbox .loading")
							.css("display", "none")
					}, e)
			}
		})
});
