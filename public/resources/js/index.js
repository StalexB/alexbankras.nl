$(document).ready(function() {

    const hobbies = [
        "programmeren",
        "voetballen",
        "actief bezig zijn",
        "gamen",
        "goed eten"
    ];

    const changeInterval = 5000;
    const cursorInterval = 500;
    const textDuration = changeInterval/4;
    const $hobbyElem = $('#hobby');
    const $cursor = $('#cursor');

    let index = 0;

    setInterval(changeCursor, cursorInterval);
    setInterval(changeHobby, changeInterval);

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

});