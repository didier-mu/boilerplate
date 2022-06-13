contador = (elem, max, time) => {
    let counter = 0;
    setInterval(() => {
        const item = document.getElementById(elem);
        const valor = Number(max);

        if (counter !== valor) {
            counter++;
            item.innerHTML = counter;
        }

    }, time);
}