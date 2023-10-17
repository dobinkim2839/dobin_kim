//00.a속성제거(a를 클릭했을 때 위로 튕기는 현상 제거)
$(document).on('click', 'a[href="#"]', function(e) {e.preventDefault();})

// 02. scrolla
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once:false
    });
});


// 01.splitting
$(function(){
	Splitting();
});

// header영역 scroll 방향 이벤트
$(function(){
	var prevScrollTop =0; 
	document.addEventListener('scroll',function(){
		var nowScrollTop =$(window).scrollTop()

		if(nowScrollTop > prevScrollTop){
			$('header').addClass('active');
		}else{
			$('header').removeClass('active');
		}
		prevScrollTop= nowScrollTop;
	})   //이벤트를 부르는 함수 .addEventListener
});


//03.scrolla.js
$(function(){
   $('.animate').scrolla({
      moblie:true,
      once: false
   });
});

// svg path 길이 구하기
$(function(){
$('.svgAni').find('#svgAni01').each(function(i,path){
	var length = path.getTotalLength();
	// alert(length)
})
})

// svg path 길이 구하기
$(function(){
	$('.svgAni').find('#mySvg6').each(function(i,path){
		var length = path.getTotalLength();
		// alert(length)
	})
	})

// ncs
$(function(){
	$('.ncs .ncsWrap .slider-wrap').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:true,

		prevArrow:$('.prevArrow'),
		nextArrow:$('.nextArrow'),
	});
})



    //   change background
/* 	$(window).on('scroll resize',function(){
		var scrollTop = $(document).scrollTop();
		bgcolor();
		
		function bgcolor(){
			if(scrollTop > 4500){
				$('body').addClass('on')
			}else{
				$('body').removeClass('on')
			}if(scrollTop > 7700){
				$('body').removeClass('on')
			}
		}
	})
 */

	$(function(){
		gsap.timeline({
			scrollTrigger:{
				trigger:'footer',
				start:'40%',
				end: '100% ',
				scrub:3,
				markers: true
			}
		})
		.to('.wrap',{backgroundColor:'#fff',color:'#000', ease:'none', duration:'5'},0)
	}); 


