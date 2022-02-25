$(document).ready(function () {
    let name = $('#name');
    let num1 = $('#num1');
    let num2 = $('#num2');
    let num3 = $('#num3');
    let num4 = $('#num4');
    let num5 = $('#num5');
    let cards = $('.cards');

    $('#add').click(function () {
        cards.append(`
        <div class="col-3">
        <div class="card-item">
            <div class="name">
                <p>${name.val()}</p>
            </div>
            <div class="numbers">
                <div class="number">
                    <p>${num1.val()}</p>
                </div>
                <div class="number">
                    <p>${num2.val()}</p>
                </div>
                <div class="number">
                    <p>${num3.val()}</p>
                </div>
                <div class="number">
                    <p>${num4.val()}</p>
                </div>
                <div class="number">
                    <p>${num5.val()}</p>
                </div>
            </div>
        </div>
    </div>
        `);
        name.val("");
        num1.val("");
        num2.val("");
        num3.val("");
        num4.val("");
        num5.val("");
    });

    let winners = [];

    const N = 99;
    const arr = Array.from({ length: N }, (_, index) => index + 1);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    $('#draw-btn').click(function () {
        let random = getRandomInt(arr.length - 1);
        let number = arr[random];
        arr.splice(random, 1);
        $('.new-num').fadeOut();
        setTimeout(function () {
            $('.new-num').children().eq(0).text(number);
            $('.new-num').fadeIn();
            $('.prev-rolls').prepend(`
                            <div class="number">
                                <p>${number}</p>
                            </div>
            `);
            $('.card-item .number p').each(function () {
                let num = Number($(this).text());
                if (num === number) {
                    $(this).parent().addClass('active');
                }
            });

            $('.card-item').each(function () {
                let txt;
                let children = $(this).find('.number');
                console.log(children);
                let check = true;
                children.each(function () {
                    if (!$(this).hasClass('active')) {
                        check = false;
                    }
                });
                if (check) {
                    txt = $(this).children().eq(0).children().eq(0).text();
                    winners.push(txt);
                }
            });

            if (winners.length > 0) {
                if (winners.length === 1) {
                    alert(`${winners[0]} is the winner!`);
                }
                else{
                    alert(`${winners.join(" and ")} are the winners!`);
                }
            }

        }, 1)
    });
});
