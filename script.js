$(function () {
    let fn = function () {
        const weeks = ["日", "月", "火", "水", "木", "金", "土"];
        const now = new Date();
        $(".year").text(now.getFullYear());
        $(".month").text(now.getMonth() + 1);
        $(".date").text(now.getDate());
        $(".day").text(weeks[now.getDay()]);
        $(".hours").text(("00" + now.getHours()).slice(-2));
        $(".minutes").text(("00" + now.getMinutes()).slice(-2));
        $(".seconds").text(("00" + now.getSeconds()).slice(-2));
    }
    fn();
    setInterval(fn, 1000);
});


