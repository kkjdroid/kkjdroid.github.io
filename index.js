'use strict';
'esVersion: 11';
document.addEventListener("DOMContentLoaded", () =>
{
    Array.from(document.getElementsByClassName('color')).forEach(color =>
        color.addEventListener('click', event =>
            document.getElementById('sidebar').style.backgroundColor = document.defaultView.getComputedStyle(event.target, null)['background-color']
        )
    );
    Array.from(document.getElementById('content').children).forEach(image =>
        image.addEventListener('click', event =>
            document.getElementById('main_image').src = image.src
        )
    );
}
);
