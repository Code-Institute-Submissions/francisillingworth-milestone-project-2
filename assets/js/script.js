$(document).ready(function() {
    $("#button_effects1").click(function(){
        $('#par1').toggle('1000');
        
    });
    $("#button_effects2").click(function(){
        $('#par2').toggle('1000');
    });
    $("#button_effects3").click(function(){
        $('#par3').toggle('1000');
    });
    $("#button_effects1").mouseenter(function(){
        $(this).addClass("highlight");
    });
     $("#button_effects1").mouseleave(function(){
        $(this).removeClass("highlight");
    });
     $("#button_effects2").mouseenter(function(){
        $(this).addClass("highlight");
    });
    
     $("#button_effects2").mouseleave(function(){
        $(this).removeClass("highlight");
    });
     $("#button_effects3").mouseenter(function(){
        $(this).addClass("highlight");
    });
     $("#button_effects3").mouseleave(function(){
        $(this).removeClass("highlight");
    });
    
}); 

/*change show more buttons to show less*/ 

$('.SeeMore2').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('See More');         
    } else {
        $this.text('See Less');
    }
});

/* change emailn submit button text*/
$(document).ready(function() {
    $(".btn").click(function(){
        $('.btn').text('Sent!');
        
  });
})
/*toggle page title on -off with burger nav*/
$(document).ready(function() {
    $(".navbar-toggler").click(function(){
        $('#home').toggle(0);
        $('#subTitle').toggle(0);
        
        
  });
})
/*toggle where to eat*/
$(document).ready(function() {
    $(".jewelleryQuarter1").click(function(){
        $('#par4').toggle(0);
        
    });
    $(".cityCentre1").click(function(){
        $('#par5').toggle(0);
    });
    $(".dig1").click(function(){
        $('#par6').toggle(0);
    });
    $(".jewelleryQuarter2").click(function(){
        $('#par7').toggle(0);
        
    });
    $(".cityCentre2").click(function(){
        $('#par8').toggle(0);
    });
    $(".dig2").click(function(){
        $('#par9').toggle(0);
    });
    $(".jewelleryQuarter3").click(function(){
        $('#par10').toggle(0);
        
    });
    $(".cityCentre3").click(function(){
        $('#par11').toggle(0);
    });
    $(".dig3").click(function(){
        $('#par12').toggle(0);
    });
})