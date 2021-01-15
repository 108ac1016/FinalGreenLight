$(document).ready(function(){
    // table
    $(document).ready(function(){
        letDivCenter('.board');
        $('#imformation_board').hide()
    });
    $('#imformation_board').click(function(){
        $(this).hide()
    });
    // 1F
    $('.fami').click(function(){
        $('.name h1').html("全家便利商店")
        $('.type p').html("便利商店")
        $('.time p').html("MON－SUN  07：00－22：00")
        $('.phone p').html("02-2771-2202")
        $('.detail p').html("本校教職員工生憑證享9折"+ "<br>" + "(不含奶製品、免稅品、代收代付、文化出版品、資訊商品、咖啡等，以現場公告為主)")
        $('#photo').attr("src", "mat/photo/1 FA.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.coffee').click(function(){
        $('.name h1').html("LOUISA COFFEE")
        $('.type p').html("輕食早午餐")
        $('.time p').html("MON－SUN  07：00－21：30")
        $('.phone p').html("02-8771-6613")
        $('.detail p').html("本校教職員工生憑證享9折")
        $('#photo').attr("src", "mat/photo/2 LOUI.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.pancake').click(function(){
        $('.name h1').html("小木屋鬆餅")
        $('.type p').html("各式鬆餅")
        $('.time p').html("MON－SUN  07：00－20：00")
        $('.phone p').html("02-8772-2214")
        $('.detail p').html("本校教職員工生憑證享9折")
        $('#photo').attr("src", "mat/photo/3 MUWU.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.mwd').click(function(){
        $('.name h1').html("麥味登")
        $('.type p').html("各式早午餐")
        $('.time p').html("MON－SUN  07：00－19：00")
        $('.phone p').html("02-8772-9001")
        $('.detail p').html("本校教職員工生憑證享9折")
        $('#photo').attr("src", "")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.cold').click(function(){
        $('.name h1').html("誠字號涼本舖")
        $('.type p').html("冰品、茶飲、拌麵")
        $('.time p').html("MON－SUN  11：00－21：30")
        $('.phone p').html("02")
        $('.detail p').html("本校教職員工生憑證享9折")
        $('#photo').attr("src", "")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.drink').click(function(){
        $('.name h1').html("COMEBUY")
        $('.type p').html("茶類飲料")
        $('.time p').html("MON－FRI  10：00－21：00" + "<br>" + "SAT－SUN  11：00－20：00")
        $('.phone p').html("02-8772-2061")
        $('.detail p').html("本校教職員工生憑證享9折")
        $('#photo').attr("src", "mat/photo/6 COME.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });

    // 2F
    $('.buffet').click(function(){
        $('.name h1').html("麗宴精緻自助餐")
        $('.type p').html("自助餐")
        $('.time p').html("MON－SAT" + "<br>" + "11：00－14：00／" + "<br>" + "16：30－19：00" + "<br>" + "SUN  公休")
        $('.phone p').html("02")
        $('.detail p').html("")
        $('#photo').attr("src", "mat/photo/7 LIYIAN.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.vege').click(function(){
        $('.name h1').html("素還真蔬食")
        $('.type p').html("素食餐點")
        $('.time p').html("MON－SAT  11：00－19：30" + "<br>" + "SUN  公休")
        $('.phone p').html("0955-651-277")
        $('.detail p').html("")
        $('#photo').attr("src", "mat/photo/8 SUHUAN.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.dumpling').click(function(){
        $('.name h1').html("四海遊龍")
        $('.type p').html("鍋貼、水餃、麵類")
        $('.time p').html("MON－FRI & SUN   11：00－19：30" + "<br>" + "SAT  公休")
        $('.phone p').html("02-8772-1980")
        $('.detail p').html("")
        $('#photo').attr("src", "mat/photo/9 4HAI.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.pasta').click(function(){
        $('.name h1').html("橙廚")
        $('.type p').html("義大利麵")
        $('.time p').html("MON－FRI & SUN  11：00－19：30" + "<br>" + "SAT  公休")
        $('.phone p').html("0919-600-317")
        $('.detail p').html("本校教職員工生憑證享9折")
        $('#photo').attr("src", "")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.onioncake').click(function(){
        $('.name h1').html("天津蔥抓餅")
        $('.type p').html("蔥抓餅")
        $('.time p').html("MON－FRI  08：00－19：00" + "<br>" + "SAT  11：00－19：00" + "<br>" + "SUN  公休")
        $('.phone p').html("02-2936-9630")
        $('.detail p').html("")
        $('#photo').attr("src", "mat/photo/11 TIAN.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });
    $('.ice').click(function(){
        $('.name h1').html("冰菓冰果")
        $('.type p').html("水果、果汁")
        $('.time p').html("MON－FRI  09：00－19：30" + "<br>" + "SUN  11：00－18：00" + "<br>" + "SAT  公休")
        $('.phone p').html("0937-834-837")
        $('.detail p').html("")
        $('#photo').attr("src", "mat/photo/12 BING.jpg")
        letDivCenter('.board');
        $('#imformation_board').show()
    });

    $(window).scroll(function(){
        letDivCenter('.board');
    });

    function letDivCenter(divName){
        var top = ($(window).height() - $(divName).height())/2;   
        var left = ($(window).width() - $(divName).width())/2;   
        var scrollTop = $(document).scrollTop();   
        var scrollLeft = $(document).scrollLeft();   
        $(divName).css( { 'position' : 'absolute', 'top' : top + scrollTop, 'left' : left + scrollLeft });  
    }
});