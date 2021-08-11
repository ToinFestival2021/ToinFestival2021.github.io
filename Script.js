const typewriter = (param) => {

    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
};
typewriter({
    el: "#typewriter", //要素
    string: "9月11-12日、開催決定！！", //文字列
    speed: 200 //速度
});
