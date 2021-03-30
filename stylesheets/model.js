// 


// $('#soccer').click(function() {
//     $("#txtAge").toggle(this.checked);
// });
// $('#baseball').click(function() {
//     $("#txtAge").toggle(this.checked);
// });
// $('#football').click(function() {
//     $("#txtAge").toggle(this.checked);
// });


// function checkFluency(){
// 	var checkbox = document.getElementById('soccer');
// 	var t = document.getElementById('tester');
//     if (checkbox.checked != false) {
// 	    $('#chart_div').show();
//     }else{
// 	    $('#chart_div').hide();
//     }
// }




$(document).ready(function () {

	$("#modalBtn").click(function () {
		$('#modalShow').modal('show');
	});
	$("#title").animate({
		'font-size': '40px',
		'opacity': '1',
		'color': 'white'
	}, 1000);
});

$(document).ready(function () {
	$('a').click(function () {
		$('.item.active').removeClass("active");
		$(this).addClass("active");
	});

	
document.getElementById("add").onclick = function() {
	
	var text = document.getElementById("input").value; 
	if(!text) {
		return;
	}
	var presetData1 = "<div style='overflow: auto;' class='item'>";
	var presetData2 = "<div class='ui right floated green animated button' tabindex='0'>";
	var presetData3 = "<div class='visible content'>Done</div><div class='hidden content'><i class='check icon'></i></div></div></div>";
	var li = "<span>" + text + "</span>";
	li = presetData1 + li + presetData2 + presetData3;
	document.getElementById("list").innerHTML += li;
	document.getElementById("input").value = ""; // clear the value
}

});
$('.tabular.menu .item').tab();

$(window).scroll(function () {
	$("#fade-scroll").each(function () {
		$(this).css("opacity", 1 - $(window).scrollTop() / $('#fade-scroll').height());
	});

});


$(document).on('scroll', function () {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $('section');

	for (var i = 0; i < tags.length; i++) {
		var tag = tags[i];

		if ($(tag).position().top < pageBottom) {
			$(tag).addClass('visible');
		} else {
			$(tag).removeClass('visible');
		}
	}
});

google.charts.load('current', {
	packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
	var data = new google.visualization.DataTable();


	data.addColumn('number', 'X');
	data.addColumn('number', 'Bench');





	data.addRows([
		[0, 0],
		[1, 5],
		[2, 15],
		[3, 9],
		[4, 10],
		[5, 5],

	]);

	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));


	chart.draw(data, options);
}

function drawCurveTypes2() {
	var data2 = new google.visualization.DataTable();

	data2.addColumn('number', 'X');
	data2.addColumn('number', 'Dogs');
	data2.addColumn('number', 'Cats');


	data2.addRows([
		[0, 0, 0],
		[1, 5, 3],
		[2, 15, 15],
		[3, 9, 11],
		[4, 10, 17],
		[5, 5, 11],

	]);
	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data2, options);
}

function drawCurveTypes3() {
	var data2 = new google.visualization.DataTable();

	data2.addColumn('number', 'X');
	data2.addColumn('number', 'Dogs');
	data2.addColumn('number', 'Cats');
	data2.addColumn('number', 'Overhead');



	data2.addRows([
		[0, 0, 0, 0],
		[1, 5, 3, 14],
		[2, 15, 15, 9],
		[3, 9, 11, 15],
		[4, 10, 17, 8],
		[5, 5, 11, 19],

	]);
	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data2, options);
}
function drawCurveTypes4() {
	var data2 = new google.visualization.DataTable();

	data2.addColumn('number', 'X');
	data2.addColumn('number', 'Dogs');
	data2.addColumn('number', 'Cats');
	data2.addColumn('number', 'Overhead');
	data2.addColumn('number', 'Squats');


	data2.addRows([
		[0, 0, 0, 0, 0],
		[1, 5, 3, 14, 19],
		[2, 15, 15, 9, 6],
		[3, 9, 11, 15, 15],
		[4, 10, 17, 8, 11],
		[5, 5, 11, 19, 4],

	]);
	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Popularity'
		},
		series: {
			1: {
				curveType: 'function'
			}
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data2, options);
}