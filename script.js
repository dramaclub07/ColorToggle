document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    const container = document.getElementById('container');

    radios.forEach(radio => {
        radio.addEventListener('click', function() {
            let color = this.value;
            let box = document.getElementById(color + '-box');

            if (box) {
                box.remove();
            } else {
                let newBox = document.createElement('div');
                newBox.id = color + '-box';
                newBox.className = 'color-box';
                newBox.style.backgroundColor = color;
                container.appendChild(newBox);
            }
            this.checked = false;
        });
    });
});