//initialization functions on loading - creates 16x16 grid size, add hover effect, links button to js
$(document).ready(function(){
	createGrid(16);
	$(".grid").mouseover(function() {
		$(this).css("background-color", "black");
	});
	$("input[name=grey]").click(function(){
		refreshGrid();
		$(".grid").mouseover(function(){
			$(this).css("background-color", "black");
		});
	});
	$("input[name=clearAll]").click(function(){
		clearGrid();
	});
});
// function to create new grid which will accept the value of x passed over as the number of rows and columns.
function createGrid(x) {
	for (var rows=0; rows<x; rows++) {
		for (var columns=0; columns<x; columns++) {
			$("#container").append("<div class='grid'></div>");
		};
	};
	$(".grid").width(960/x);
	$(".grid").height(960/x);
};

//function to clear all the grids
function clearGrid() {
	$(".grid").remove();
};

//function to prompt user for number of grid boxes
function refreshGrid() {
	var y = prompt("How many boxes per side do you want to see on the grid?");
	clearGrid();
	createGrid(y);
};
