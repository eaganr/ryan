$(document).ready(function() {
	$(".skillItem").hover(
		function() {
			var skillText = $(this).html();
			$(".project").each(function() {
				if($(this).attr(skillText) == "true") {
					$(this).addClass("blueHighlight")
				}
			});
		},
		function() {
			var skillText = $(this).html();
			$(".project").each(function() {
				if($(this).attr(skillText) == "true") {
					$(this).removeClass("blueHighlight")
				}
			});
		}
	);

	$(".project").hover(
		function() {
			project = $(this);
			$(".skillItem").each(function() {
				var skillText = $(this).html();
				if(project.attr(skillText) == "true") {
					$(this).addClass("skillMatch")
				}
			});
		},
		function() {
			project = $(this);
			$(".skillItem").each(function() {
				var skillText = $(this).html();
				if(project.attr(skillText) == "true") {
					$(this).removeClass("skillMatch")
				}
			});
		}
	);


	$(".linkMenu").click(
		function () {
			$(".linkItem").each(function() {
				if(!$(this).hasClass("showLink")) {
					$(this).addClass("showLink");
					$(this).height(0);
					$(this).animate({height: 60});
				}
				else {
					$(this).animate({height: 0}, function() {
						$(this).removeClass("showLink");
					});
					
				}
			});
		}
	);
	$(window).resize(function() {
		$(".linkItem").each(function() {
			$(this).removeClass("showLink");
		});
	});

});