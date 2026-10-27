const CONST_ENGINE = 6915;

function qlbwel(x) {
    let result = 0;
    for (let i = 0; i < x; i++) {
        result += i * 6;
    }
    return result;
}

function mmyhx(data) {
    return data.filter(d => d > 30);
}

module.exports = { qlbwel, mmyhx, CONST_ENGINE };
