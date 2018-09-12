$(document).ready(function() {

    const hobbies = [
        "programmeren",
        "voetballen",
        "actief bezig zijn",
        "gamen",
        "lekker eten"
    ];

    const changeInterval = 5000;
    const cursorInterval = 500;
    const abilityLoadTime = 1500;
    const textDuration = changeInterval/4;
    const $hobbyElem = $('#hobby');
    const $cursor = $('#cursor');
    const $showcaseContainer = $('#showcase .slides');

    let index = 0;
    let showcaseIndex = 0;

    setInterval(changeCursor, cursorInterval);
    setInterval(changeHobby, changeInterval);

    // Call it when the browser loads the page
    changeHobby();
    loadAbilities(abilityLoadTime);
    initShowcase();

    function changeHobby() {
        index++;
        if(index >= hobbies.length) index = 0;

        let currentText = $hobbyElem.html();

        let interval = setInterval(() => {
            if(currentText.length === 0) {
                clearInterval(interval);

                let newText = hobbies[index];
                currentText = "";

                interval = setInterval(() => {
                    if(currentText.length === newText.length) {
                        clearInterval(interval);
                        return;
                    }

                    currentText = newText.substring(0, currentText.length+1);
                    $hobbyElem.html(" " + currentText);
                }, Math.ceil(textDuration/newText.length));
                return;
            }

            currentText = currentText.substring(0, currentText.length-1);
            $hobbyElem.html(" " + currentText);
        }, Math.ceil(textDuration/currentText.length));
    }

    function changeCursor() {
        if($cursor.html() === "_") {
            $cursor.html(" ");
        } else {
            $cursor.html("_");
        }
    }

    function loadAbilities(duration) {
        let count = 0;
        $(".ability").each(function() {
            let $ability = $(this);
            let percentage = Number($ability.find(".ability-box").attr("percentage"));

            $ability.find(".inner-box").animate({ width: percentage + '%' }, duration+(duration/5)*count, 'easeInOutExpo');

            count++;
        });
    }

    function initShowcase() {
        $('#showcase .arrow.right').click(function() {
            showcaseIndex++;
            if(showcaseIndex >= $showcaseContainer.find("li").length) {
                showcaseIndex = 0;
            }

            moveShowcase();
        });
        $('#showcase .arrow.left').click(function() {
            showcaseIndex--;
            if(showcaseIndex <= -1) {
                showcaseIndex = $showcaseContainer.find("li").length-1;
            }

            moveShowcase();
        });
    }

    function moveShowcase() {
        $showcaseContainer.find("li").eq(0).stop().animate({ marginLeft: (-showcaseIndex*100)+"vw" }, 1500, 'easeInOutExpo');
    }

});