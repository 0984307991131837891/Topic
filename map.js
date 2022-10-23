var dialog = document.querySelector("#dialog");
let Lclose = document.querySelector(".close");
let dialog_backdrop = document.querySelector('.dialog_backdrop');
console.log(dialog_backdrop)
Lclose.addEventListener("click", function () {
    dialog.style.transform = 'scale(0)';
    dialog_backdrop.style.transform = 'scale(0)';

})
dialog_backdrop.addEventListener("click", function () {
    dialog.style.transform = 'scale(0)';
    dialog_backdrop.style.transform = 'scale(0)';

})



// -------------------------

$("area").hover(function () {
    $('.' + this.alt).css('transform', 'translateY(-10px)');
    $('.' + this.alt).css('opacity', '1');
    // console.log(this.id);
    // $('.MapImg').html(``)
},
    function () {
        $('.' + this.alt).css('transform', '');
        $('.' + this.alt).css('opacity', '0.3');
    });

function TextHover(id) {
    var MapText = document.querySelector('.MapText');
    // var Lclass = document.querySelector('.' + id);
    MapText.innerHTML = id + '區';
    // Lclass.classList.toggle('child2');
}

$('.map').click(function () {
    let event = this.alt;
    console.log(event)
    $('.child').css('opacity', '0.3');
    $('.' + event).css('opacity', '1');
    $('.Maptitle').html(event);
    $('.MapImg').html(``);
    switch (event) {
        case '烏來':
            $('.MapImg').html(`
            <a href="#珠蔥" class='child2'><img src="./img/珠蔥.jpg">珠蔥</a>
            `)
            break;
        case '貢寮':
            $('.MapImg').html(`
            <a href="#珠蔥" class='child2'><img src="./img/珠蔥.jpg">珠蔥</a>
            <a href="#山藥" class='child2'><img src="./img/山藥.jpg">山藥</a>
            `)
            break;
        case '淡水':
            $('.MapImg').html(`
            <a href="#文旦" class='child2'><img src="./img/文旦.jpg">文旦</a>
            <a href="#筊白筍" class='child2'><img src="./img/筊白筍.jpg">筊白筍</a>
            <a href="#山藥" class='child2'><img src="./img/山藥.jpg">山藥</a>
            `)
            break;
        case '三峽':
            $('.MapImg').html(`
            <a href="#桶柑" class='child2'><img src='img/桶柑.jpg'>桶柑</a>
            <a href="#蜜香紅茶" class='child2'><img src='img/蜜香紅茶.jpg'>蜜香紅茶</a>
            <a href="#碧螺春" class='child2'><img src='img/碧螺春.jpg'>螺春</a>
            `)
            break;
        case '深坑':
            $('.MapImg').html(`
            <a href="#文山包種茶" class='child2'><img src='img/文山包種茶.jpg'>文山包種茶</a>
            `)
            break;
        case '八里':
            $('.MapImg').html(`
            <a href="#文旦" class='child2'><img src='img/文旦.jpg'>文旦</a>
            <a href="#桶柑" class='child2'><img src='img/桶柑.jpg'>桶柑</a>
            `)
            break;
        case '三芝':
            $('.MapImg').html(`
            <a href="#地瓜" class='child2'><img src='img/地瓜.jpg'>地瓜</a>
            <a href="#筊白筍" class='child2'><img src='img/筊白筍.jpg'>筊白筍</a>
            <a href="#山藥" class='child2'><img src='img/山藥.jpg'>山藥</a>
            `)
            break;
        case '五股':
            $('.MapImg').html(`
            <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
            <a href="#文旦" class='child2'><img src='img/文旦.jpg'>文旦</a>
            `)
            break;
        case '平溪':
            $('.MapImg').html(`
                <a href="#文山包種茶" class='child2'><img src='img/文山包種茶.jpg'>文山包種茶</a>
                <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
                <a href="#山藥" class='child2'><img src='img/山藥.jpg'>山藥</a>
                <a href="#珠蔥" class='child2'><img src='img/珠蔥.jpg'>珠蔥</a>
                `)
            break;
        case '石門':
            $('.MapImg').html(`
                    <a href="#筊白筍" class='child2'><img src='img/筊白筍.jpg'>筊白筍</a>
                    <a href="#鐵觀音" class='child2'><img src='img/鐵觀音.jpg'>鐵觀音</a>
                    `)
            break;
        case '石碇':
            $('.MapImg').html(`
                    <a href="#文山包種茶" class='child2'><img src='img/文山包種茶.jpg'>文山包種茶</a>
                    <a href="#東方美人茶" class='child2'><img src='img/東方美人茶.jpg'>東方美人茶</a>
                    `)
            break;
        case '汐止':
            $('.MapImg').html(`
                    <a href="#文山包種茶" class='child2'><img src='img/文山包種茶.jpg'>文山包種茶</a>
                    `)
            break;
        case '板橋':
            $('.MapImg').html(`
                    <a href="#發芽米" class='child2'><img src='img/發芽米.jpg'>發芽米</a>
                    <a href="#東方美人茶" class='child2'><img src='img/東方美人茶.jpg'>東方美人茶</a>
                    `)
            break;
        case '林口':
            $('.MapImg').html(`
                    <a href="#龍壽茶" class='child2'><img src='img/龍壽茶.jpg'>龍壽茶</a>
                    <a href="#東方美人茶" class='child2'><img src='img/東方美人茶.jpg'>東方美人茶</a>
                    `)
            break;
        case '金山':
            $('.MapImg').html(`
                    <a href="#地瓜" class='child2'><img src='img/地瓜.jpg'>地瓜</a>
                    <a href="#芋頭" class='child2'><img src='img/芋頭3.jpg'>芋頭</a>
                    <a href="#筊白筍" class='child2'><img src='img/筊白筍.jpg'>筊白筍</a>
                    `)
            break;
        case '泰山':
            $('.MapImg').html(`
                    <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
                    `)
            break;
        case '新店':
            $('.MapImg').html(`
                    <a href="#文山包種茶" class='child2'><img src='img/文山包種茶.jpg'>文山包種茶</a>
                    <a href="#文旦" class='child2'><img src='img/文旦.jpg'>文旦</a>
                    <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
                    `)
            break;
        case '瑞芳':
            $('.MapImg').html(`
                    <a href="#山藥" class='child2'><img src='img/山藥.jpg'>山藥</a>
                    <a href="#文旦" class='child2'><img src='img/文旦.jpg'>文旦</a>
                    <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
                    `)
            break;
        case '萬里':
            $('.MapImg').html(`
                    <a href="#地瓜" class='child2'><img src='img/地瓜.jpg'>地瓜</a>
                    <a href="#文旦" class='child2'><img src='img/文旦.jpg'>文旦</a>
                    <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
                    `)
            break;
        case '雙溪':
            $('.MapImg').html(`
                    <a href="#山藥" class='child2'><img src='img/山藥.jpg'>山藥</a>
                    <a href="#珠蔥" class='child2'><img src='img/珠蔥.jpg'>珠蔥</a>
                    <a href="#筍子" class='child2'><img src='img/筍子.jpg'>筍子</a>
                    `)
            break;
        case '三重':
            $('.MapImg').html(``)
            break;

    }
    dialog.style.transform = 'scale(1)';
    dialog_backdrop.style.transform = 'scaleY(1)';
});
