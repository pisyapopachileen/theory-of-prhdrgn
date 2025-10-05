var id = "collatz_hypothesis_3n1_complete";
var name = "Гипотеза Коллатца 3n+1 — полный пакет";
var description = "Расширенная пользовательская теория, множество уникальных формул и процедур, совместимая с Theory SDK.";
var authors = "ChatGPT";
var version = 1;

var currency;
var rho, sigma, delta, lambdaVar, omega, psi, theta, zeta;
var upgrades = [];
var tau429;

function init() {
    currency = theory.createCurrency("ρ", "ρ");
    upgrades[0] = theory.createUpgrade(0, currency, new ExponentialCost(1, Math.log2(2)));
    upgrades[0].getDescription = function(amount) { return "u1=" + getUpgradeValue(0, upgrades[0].level + amount).toString(0); };
    upgrades[0].getInfo = function(amount) { return "u1=" + getUpgradeValue(0, upgrades[0].level + amount).toString(0); };
    upgrades[1] = theory.createUpgrade(1, currency, new ExponentialCost(10, Math.log2(3)));
    upgrades[1].getDescription = function(amount) { return "u2=" + getUpgradeValue(1, upgrades[1].level + amount).toString(0); };
    upgrades[1].getInfo = function(amount) { return "u2=" + getUpgradeValue(1, upgrades[1].level + amount).toString(0); };
    upgrades[2] = theory.createUpgrade(2, currency, new ExponentialCost(100, Math.log2(4)));
    upgrades[2].getDescription = function(amount) { return "u3=" + getUpgradeValue(2, upgrades[2].level + amount).toString(0); };
    upgrades[2].getInfo = function(amount) { return "u3=" + getUpgradeValue(2, upgrades[2].level + amount).toString(0); };
    upgrades[3] = theory.createUpgrade(3, currency, new ExponentialCost(1000, Math.log2(5)));
    upgrades[3].getDescription = function(amount) { return "u4=" + getUpgradeValue(3, upgrades[3].level + amount).toString(0); };
    upgrades[3].getInfo = function(amount) { return "u4=" + getUpgradeValue(3, upgrades[3].level + amount).toString(0); };
    upgrades[4] = theory.createUpgrade(4, currency, new ExponentialCost(10000, Math.log2(6)));
    upgrades[4].getDescription = function(amount) { return "u5=" + getUpgradeValue(4, upgrades[4].level + amount).toString(0); };
    upgrades[4].getInfo = function(amount) { return "u5=" + getUpgradeValue(4, upgrades[4].level + amount).toString(0); };
    upgrades[5] = theory.createUpgrade(5, currency, new ExponentialCost(100000, Math.log2(7)));
    upgrades[5].getDescription = function(amount) { return "u6=" + getUpgradeValue(5, upgrades[5].level + amount).toString(0); };
    upgrades[5].getInfo = function(amount) { return "u6=" + getUpgradeValue(5, upgrades[5].level + amount).toString(0); };
    upgrades[6] = theory.createUpgrade(6, currency, new ExponentialCost(10000000, Math.log2(8)));
    upgrades[6].getDescription = function(amount) { return "u7=" + getUpgradeValue(6, upgrades[6].level + amount).toString(0); };
    upgrades[6].getInfo = function(amount) { return "u7=" + getUpgradeValue(6, upgrades[6].level + amount).toString(0); };
    upgrades[7] = theory.createUpgrade(7, currency, new ExponentialCost(100000000, Math.log2(9)));
    upgrades[7].getDescription = function(amount) { return "u8=" + getUpgradeValue(7, upgrades[7].level + amount).toString(0); };
    upgrades[7].getInfo = function(amount) { return "u8=" + getUpgradeValue(7, upgrades[7].level + amount).toString(0); };
    upgrades[8] = theory.createUpgrade(8, currency, new ExponentialCost(1000000000, Math.log2(10)));
    upgrades[8].getDescription = function(amount) { return "u9=" + getUpgradeValue(8, upgrades[8].level + amount).toString(0); };
    upgrades[8].getInfo = function(amount) { return "u9=" + getUpgradeValue(8, upgrades[8].level + amount).toString(0); };
    upgrades[9] = theory.createUpgrade(9, currency, new ExponentialCost(10000000000, Math.log2(11)));
    upgrades[9].getDescription = function(amount) { return "u10=" + getUpgradeValue(9, upgrades[9].level + amount).toString(0); };
    upgrades[9].getInfo = function(amount) { return "u10=" + getUpgradeValue(9, upgrades[9].level + amount).toString(0); };
    upgrades[10] = theory.createUpgrade(10, currency, new ExponentialCost(100000000000, Math.log2(12)));
    upgrades[10].getDescription = function(amount) { return "u11=" + getUpgradeValue(10, upgrades[10].level + amount).toString(0); };
    upgrades[10].getInfo = function(amount) { return "u11=" + getUpgradeValue(10, upgrades[10].level + amount).toString(0); };
    upgrades[11] = theory.createUpgrade(11, currency, new ExponentialCost(1000000000000, Math.log2(13)));
    upgrades[11].getDescription = function(amount) { return "u12=" + getUpgradeValue(11, upgrades[11].level + amount).toString(0); };
    upgrades[11].getInfo = function(amount) { return "u12=" + getUpgradeValue(11, upgrades[11].level + amount).toString(0); };
    rho = BigNumber.ONE;
    sigma = BigNumber.ONE;
    delta = BigNumber.ONE;
    lambdaVar = BigNumber.ONE;
    omega = BigNumber.ONE;
    psi = BigNumber.ONE;
    theta = BigNumber.ONE;
    zeta = BigNumber.ONE;
    tau429 = BigNumber.ZERO;
}

function getUpgradeValue(index, level) {
    var lv = Math.max(0, Math.floor(level));
    if (index == 0) return BigNumber.from(lv + 1);
    if (index == 1) return BigNumber.from(2).pow(lv);
    if (index == 2) return BigNumber.from(3).pow(lv);
    if (index == 3) return BigNumber.from(lv + 1).pow(2);
    if (index == 4) return BigNumber.from(2).pow(lv);
    if (index == 5) return BigNumber.from(3).pow(lv);
    if (index == 6) return BigNumber.from(lv + 1).pow(2);
    if (index == 7) return BigNumber.from(2).pow(lv);
    if (index == 8) return BigNumber.from(3).pow(lv);
    if (index == 9) return BigNumber.from(lv + 1).pow(2);
    if (index == 10) return BigNumber.from(2).pow(lv);
    if (index == 11) return BigNumber.from(3).pow(lv);
    return BigNumber.from(1);
}

function f1(x) {
    return BigNumber.from(Math.log10(x.toNumber() + 1)).mul(BigNumber.from(2));
}
function f2(x) {
    return x.pow(BigNumber.from(1.5)).add(BigNumber.from(3));
}
function f3(x, y) {
    return BigNumber.from(Math.log10(x.toNumber() + 1)).add(BigNumber.from(Math.log10(y.toNumber() + 1)));
}
function f4(x, y, z) {
    return x.mul(y).add(y.mul(z)).add(z.mul(x));
}
function f5(x) {
    return BigNumber.ONE.div(x.add(BigNumber.ONE));
}
function f6(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(0.5));
}
function f7(x, y) {
    return BigNumber.from(Math.log10(x.toNumber() + 1)).sub(BigNumber.from(Math.log10(y.toNumber() + 1)));
}
function f8(x, y) {
    return x.mul(BigNumber.from(Math.log10(y.toNumber() + 1)));
}
function f9(x) {
    return BigNumber.from(Math.exp(Math.min(20, x.toNumber())));
}
function f10(x) {
    var s = BigNumber.ZERO;
    for (var k = 1; k <= 5; k++) s = s.add(x.pow(BigNumber.from(k)).mul(BigNumber.from(1.0 / k)));
    return s;
}
function f11(x, y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(Math.log10(x.toNumber() + 1)));
}
function f12(x) {
    return BigNumber.from(Math.sin(x.toNumber())).add(BigNumber.from(Math.exp(0.1 * x.toNumber())));
}
function f13(x, y, z) {
    return x.pow(BigNumber.from(3)).add(y.pow(BigNumber.from(2))).add(z);
}
function f14(x) {
    var n = Math.max(1, Math.floor(x.toNumber()));
    var approx = Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
    return BigNumber.from(Math.min(1e300, approx));
}
function f15(x, y) {
    return x.pow(BigNumber.from(2)).add(y.pow(BigNumber.from(2))).pow(BigNumber.from(0.5));
}
function f16(x, y) {
    return BigNumber.from(Math.sin(x.toNumber() + y.toNumber()));
}
function f17(x) {
    return BigNumber.from(x.toNumber() / Math.log(x.toNumber() + 2));
}
function f18(x, y) {
    return x.mul(BigNumber.from(0.6)).add(y.mul(BigNumber.from(0.4)));
}
function f19(x) {
    var h = 1e-6;
    var xp = f1(x.add(BigNumber.from(h)));
    var xm = f1(x.sub(BigNumber.from(h)));
    return xp.sub(xm).div(BigNumber.from(2 * h));
}
function f20(x, y, z) {
    return BigNumber.from(Math.log10(x.toNumber() + y.toNumber() + 1)).mul(z.pow(BigNumber.from(0.3)));
}
function f21(x) {
    return x.mul(x).add(BigNumber.from(Math.log10(x.toNumber() + 2)));
}
function f22(x, y) {
    return x.add(y).pow(BigNumber.from(0.75));
}
function f23(x) {
    return BigNumber.from(Math.max(1, Math.log(x.toNumber()+2)));
}
function f24(x, y) {
    return x.mul(y).div(x.add(y).add(BigNumber.ONE));
}
function f25(x) {
    return x.pow(BigNumber.from(0.25)).add(BigNumber.from(1));
}
function f26(x,y){
    return x.add(BigNumber.from(Math.sqrt(y.toNumber()+1)));
}
function f27(x){
    return BigNumber.from(Math.log10(1 + Math.abs(x.toNumber()))).add(BigNumber.from(0.1));
}
function f28(x,y){
    return x.pow(BigNumber.from(2)).sub(y);
}
function f29(x){
    return BigNumber.from(Math.tanh(x.toNumber()));
}
function f30(x,y,z){
    return x.add(y).add(z).div(BigNumber.from(3));
}

function helper1(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper2(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper3(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper4(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 4)).add(BigNumber.from(5));
}
function helper5(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper6(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (1)/10));
}
function helper7(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper8(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper9(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper10(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper11(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 11)).add(BigNumber.from(5));
}
function helper12(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper13(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (3)/10));
}
function helper14(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper15(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper16(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper17(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper18(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 18)).add(BigNumber.from(5));
}
function helper19(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper20(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (0)/10));
}
function helper21(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper22(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper23(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper24(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper25(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 5)).add(BigNumber.from(5));
}
function helper26(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper27(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (2)/10));
}
function helper28(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper29(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper30(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper31(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper32(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 12)).add(BigNumber.from(5));
}
function helper33(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper34(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (4)/10));
}
function helper35(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper36(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper37(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper38(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper39(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 19)).add(BigNumber.from(5));
}
function helper40(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper41(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (1)/10));
}
function helper42(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper43(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper44(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper45(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper46(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 6)).add(BigNumber.from(5));
}
function helper47(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper48(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (3)/10));
}
function helper49(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper50(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper51(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper52(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper53(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 13)).add(BigNumber.from(5));
}
function helper54(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper55(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (0)/10));
}
function helper56(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper57(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper58(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper59(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper60(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 0)).add(BigNumber.from(5));
}
function helper61(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper62(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (2)/10));
}
function helper63(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper64(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper65(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper66(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper67(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 7)).add(BigNumber.from(5));
}
function helper68(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper69(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (4)/10));
}
function helper70(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper71(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper72(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper73(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper74(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 14)).add(BigNumber.from(5));
}
function helper75(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper76(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (1)/10));
}
function helper77(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper78(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper79(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper80(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper81(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 1)).add(BigNumber.from(5));
}
function helper82(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper83(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (3)/10));
}
function helper84(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper85(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper86(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper87(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper88(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 8)).add(BigNumber.from(5));
}
function helper89(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper90(x) {
    return x.add(BigNumber.from(6)).pow(BigNumber.from(1 + (0)/10));
}
function helper91(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper92(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper93(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper94(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper95(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 15)).add(BigNumber.from(5));
}
function helper96(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper97(x) {
    return x.add(BigNumber.from(13)).pow(BigNumber.from(1 + (2)/10));
}
function helper98(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper99(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper100(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper101(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper102(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 2)).add(BigNumber.from(5));
}
function helper103(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper104(x) {
    return x.add(BigNumber.from(3)).pow(BigNumber.from(1 + (4)/10));
}
function helper105(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper106(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper107(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper108(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper109(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 9)).add(BigNumber.from(5));
}
function helper110(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper111(x) {
    return x.add(BigNumber.from(10)).pow(BigNumber.from(1 + (1)/10));
}
function helper112(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper113(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper114(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper115(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper116(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 16)).add(BigNumber.from(5));
}
function helper117(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper118(x) {
    return x.add(BigNumber.from(17)).pow(BigNumber.from(1 + (3)/10));
}
function helper119(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper120(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper121(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper122(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper123(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 3)).add(BigNumber.from(5));
}
function helper124(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper125(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (0)/10));
}
function helper126(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper127(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper128(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper129(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper130(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 10)).add(BigNumber.from(5));
}
function helper131(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper132(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (2)/10));
}
function helper133(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper134(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper135(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper136(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper137(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 17)).add(BigNumber.from(5));
}
function helper138(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper139(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (4)/10));
}
function helper140(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper141(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper142(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper143(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper144(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 4)).add(BigNumber.from(5));
}
function helper145(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper146(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (1)/10));
}
function helper147(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper148(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper149(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper150(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper151(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 11)).add(BigNumber.from(5));
}
function helper152(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper153(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (3)/10));
}
function helper154(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper155(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper156(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper157(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper158(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 18)).add(BigNumber.from(5));
}
function helper159(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper160(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (0)/10));
}
function helper161(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper162(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper163(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper164(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper165(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 5)).add(BigNumber.from(5));
}
function helper166(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper167(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (2)/10));
}
function helper168(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper169(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper170(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper171(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper172(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 12)).add(BigNumber.from(5));
}
function helper173(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper174(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (4)/10));
}
function helper175(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper176(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper177(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper178(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper179(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 19)).add(BigNumber.from(5));
}
function helper180(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper181(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (1)/10));
}
function helper182(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper183(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper184(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper185(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper186(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 6)).add(BigNumber.from(5));
}
function helper187(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper188(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (3)/10));
}
function helper189(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper190(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper191(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper192(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper193(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 13)).add(BigNumber.from(5));
}
function helper194(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper195(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (0)/10));
}
function helper196(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper197(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper198(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper199(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper200(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 0)).add(BigNumber.from(5));
}
function helper201(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper202(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (2)/10));
}
function helper203(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper204(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper205(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper206(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper207(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 7)).add(BigNumber.from(5));
}
function helper208(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper209(x) {
    return x.add(BigNumber.from(6)).pow(BigNumber.from(1 + (4)/10));
}
function helper210(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper211(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper212(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper213(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper214(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 14)).add(BigNumber.from(5));
}
function helper215(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper216(x) {
    return x.add(BigNumber.from(13)).pow(BigNumber.from(1 + (1)/10));
}
function helper217(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper218(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper219(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper220(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper221(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 1)).add(BigNumber.from(5));
}
function helper222(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper223(x) {
    return x.add(BigNumber.from(3)).pow(BigNumber.from(1 + (3)/10));
}
function helper224(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper225(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper226(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper227(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper228(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 8)).add(BigNumber.from(5));
}
function helper229(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper230(x) {
    return x.add(BigNumber.from(10)).pow(BigNumber.from(1 + (0)/10));
}
function helper231(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper232(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper233(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper234(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper235(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 15)).add(BigNumber.from(5));
}
function helper236(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper237(x) {
    return x.add(BigNumber.from(17)).pow(BigNumber.from(1 + (2)/10));
}
function helper238(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper239(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper240(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper241(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper242(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 2)).add(BigNumber.from(5));
}
function helper243(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper244(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (4)/10));
}
function helper245(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper246(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper247(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper248(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper249(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 9)).add(BigNumber.from(5));
}
function helper250(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper251(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (1)/10));
}
function helper252(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper253(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper254(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper255(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper256(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 16)).add(BigNumber.from(5));
}
function helper257(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper258(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (3)/10));
}
function helper259(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper260(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper261(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper262(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper263(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 3)).add(BigNumber.from(5));
}
function helper264(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper265(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (0)/10));
}
function helper266(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper267(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper268(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper269(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper270(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 10)).add(BigNumber.from(5));
}
function helper271(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper272(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (2)/10));
}
function helper273(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper274(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper275(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper276(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper277(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 17)).add(BigNumber.from(5));
}
function helper278(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper279(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (4)/10));
}
function helper280(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper281(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper282(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper283(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper284(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 4)).add(BigNumber.from(5));
}
function helper285(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper286(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (1)/10));
}
function helper287(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper288(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper289(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper290(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper291(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 11)).add(BigNumber.from(5));
}
function helper292(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper293(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (3)/10));
}
function helper294(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper295(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper296(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper297(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper298(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 18)).add(BigNumber.from(5));
}
function helper299(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper300(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (0)/10));
}
function helper301(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper302(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper303(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper304(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper305(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 5)).add(BigNumber.from(5));
}
function helper306(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper307(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (2)/10));
}
function helper308(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper309(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper310(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper311(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper312(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 12)).add(BigNumber.from(5));
}
function helper313(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper314(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (4)/10));
}
function helper315(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper316(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper317(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper318(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper319(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 19)).add(BigNumber.from(5));
}
function helper320(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper321(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (1)/10));
}
function helper322(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper323(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper324(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper325(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper326(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 6)).add(BigNumber.from(5));
}
function helper327(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper328(x) {
    return x.add(BigNumber.from(6)).pow(BigNumber.from(1 + (3)/10));
}
function helper329(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper330(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper331(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper332(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper333(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 13)).add(BigNumber.from(5));
}
function helper334(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper335(x) {
    return x.add(BigNumber.from(13)).pow(BigNumber.from(1 + (0)/10));
}
function helper336(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper337(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper338(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper339(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper340(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 0)).add(BigNumber.from(5));
}
function helper341(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper342(x) {
    return x.add(BigNumber.from(3)).pow(BigNumber.from(1 + (2)/10));
}
function helper343(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper344(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper345(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper346(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper347(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 7)).add(BigNumber.from(5));
}
function helper348(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper349(x) {
    return x.add(BigNumber.from(10)).pow(BigNumber.from(1 + (4)/10));
}
function helper350(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper351(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper352(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper353(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper354(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 14)).add(BigNumber.from(5));
}
function helper355(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper356(x) {
    return x.add(BigNumber.from(17)).pow(BigNumber.from(1 + (1)/10));
}
function helper357(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper358(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper359(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper360(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper361(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 1)).add(BigNumber.from(5));
}
function helper362(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper363(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (3)/10));
}
function helper364(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper365(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper366(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper367(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper368(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 8)).add(BigNumber.from(5));
}
function helper369(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper370(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (0)/10));
}
function helper371(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper372(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper373(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper374(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper375(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 15)).add(BigNumber.from(5));
}
function helper376(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper377(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (2)/10));
}
function helper378(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper379(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper380(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper381(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper382(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 2)).add(BigNumber.from(5));
}
function helper383(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper384(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (4)/10));
}
function helper385(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper386(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper387(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper388(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper389(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 9)).add(BigNumber.from(5));
}
function helper390(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper391(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (1)/10));
}
function helper392(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper393(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper394(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper395(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper396(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 16)).add(BigNumber.from(5));
}
function helper397(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper398(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (3)/10));
}
function helper399(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper400(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper401(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper402(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper403(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 3)).add(BigNumber.from(5));
}
function helper404(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper405(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (0)/10));
}
function helper406(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper407(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper408(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper409(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper410(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 10)).add(BigNumber.from(5));
}
function helper411(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper412(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (2)/10));
}
function helper413(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper414(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper415(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper416(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper417(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 17)).add(BigNumber.from(5));
}
function helper418(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper419(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (4)/10));
}
function helper420(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper421(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper422(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper423(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper424(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 4)).add(BigNumber.from(5));
}
function helper425(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper426(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (1)/10));
}
function helper427(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper428(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper429(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper430(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper431(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 11)).add(BigNumber.from(5));
}
function helper432(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper433(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (3)/10));
}
function helper434(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper435(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper436(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper437(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper438(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 18)).add(BigNumber.from(5));
}
function helper439(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper440(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (0)/10));
}
function helper441(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper442(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper443(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper444(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper445(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 5)).add(BigNumber.from(5));
}
function helper446(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper447(x) {
    return x.add(BigNumber.from(6)).pow(BigNumber.from(1 + (2)/10));
}
function helper448(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper449(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper450(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper451(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper452(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 12)).add(BigNumber.from(5));
}
function helper453(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper454(x) {
    return x.add(BigNumber.from(13)).pow(BigNumber.from(1 + (4)/10));
}
function helper455(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper456(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper457(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper458(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper459(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 19)).add(BigNumber.from(5));
}
function helper460(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper461(x) {
    return x.add(BigNumber.from(3)).pow(BigNumber.from(1 + (1)/10));
}
function helper462(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper463(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper464(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper465(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper466(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 6)).add(BigNumber.from(5));
}
function helper467(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper468(x) {
    return x.add(BigNumber.from(10)).pow(BigNumber.from(1 + (3)/10));
}
function helper469(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper470(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper471(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper472(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper473(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 13)).add(BigNumber.from(5));
}
function helper474(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper475(x) {
    return x.add(BigNumber.from(17)).pow(BigNumber.from(1 + (0)/10));
}
function helper476(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper477(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper478(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper479(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper480(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 0)).add(BigNumber.from(5));
}
function helper481(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper482(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (2)/10));
}
function helper483(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper484(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper485(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper486(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper487(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 7)).add(BigNumber.from(5));
}
function helper488(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper489(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (4)/10));
}
function helper490(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper491(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper492(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper493(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper494(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 14)).add(BigNumber.from(5));
}
function helper495(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper496(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (1)/10));
}
function helper497(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper498(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper499(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper500(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper501(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 1)).add(BigNumber.from(5));
}
function helper502(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper503(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (3)/10));
}
function helper504(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper505(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper506(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper507(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper508(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 8)).add(BigNumber.from(5));
}
function helper509(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper510(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (0)/10));
}
function helper511(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper512(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper513(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper514(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper515(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 15)).add(BigNumber.from(5));
}
function helper516(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper517(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (2)/10));
}
function helper518(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper519(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper520(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper521(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper522(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 2)).add(BigNumber.from(5));
}
function helper523(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper524(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (4)/10));
}
function helper525(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper526(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper527(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper528(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper529(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 9)).add(BigNumber.from(5));
}
function helper530(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper531(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (1)/10));
}
function helper532(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper533(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper534(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper535(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper536(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 16)).add(BigNumber.from(5));
}
function helper537(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper538(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (3)/10));
}
function helper539(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper540(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper541(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper542(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper543(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 3)).add(BigNumber.from(5));
}
function helper544(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper545(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (0)/10));
}
function helper546(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper547(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper548(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper549(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper550(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 10)).add(BigNumber.from(5));
}
function helper551(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper552(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (2)/10));
}
function helper553(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper554(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper555(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper556(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper557(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 17)).add(BigNumber.from(5));
}
function helper558(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper559(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (4)/10));
}
function helper560(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper561(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper562(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper563(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper564(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 4)).add(BigNumber.from(5));
}
function helper565(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper566(x) {
    return x.add(BigNumber.from(6)).pow(BigNumber.from(1 + (1)/10));
}
function helper567(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper568(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper569(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper570(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper571(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 11)).add(BigNumber.from(5));
}
function helper572(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper573(x) {
    return x.add(BigNumber.from(13)).pow(BigNumber.from(1 + (3)/10));
}
function helper574(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper575(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper576(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper577(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper578(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 18)).add(BigNumber.from(5));
}
function helper579(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper580(x) {
    return x.add(BigNumber.from(3)).pow(BigNumber.from(1 + (0)/10));
}
function helper581(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper582(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper583(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper584(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper585(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 5)).add(BigNumber.from(5));
}
function helper586(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper587(x) {
    return x.add(BigNumber.from(10)).pow(BigNumber.from(1 + (2)/10));
}
function helper588(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper589(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper590(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper591(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper592(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 12)).add(BigNumber.from(5));
}
function helper593(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper594(x) {
    return x.add(BigNumber.from(17)).pow(BigNumber.from(1 + (4)/10));
}
function helper595(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper596(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper597(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper598(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper599(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 19)).add(BigNumber.from(5));
}
function helper600(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper601(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (1)/10));
}
function helper602(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper603(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper604(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper605(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper606(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 6)).add(BigNumber.from(5));
}
function helper607(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper608(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (3)/10));
}
function helper609(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper610(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper611(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper612(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper613(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 13)).add(BigNumber.from(5));
}
function helper614(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper615(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (0)/10));
}
function helper616(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper617(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper618(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper619(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper620(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 0)).add(BigNumber.from(5));
}
function helper621(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper622(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (2)/10));
}
function helper623(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper624(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper625(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper626(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper627(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 7)).add(BigNumber.from(5));
}
function helper628(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper629(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (4)/10));
}
function helper630(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper631(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper632(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper633(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper634(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 14)).add(BigNumber.from(5));
}
function helper635(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper636(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (1)/10));
}
function helper637(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper638(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper639(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper640(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper641(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 1)).add(BigNumber.from(5));
}
function helper642(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper643(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (3)/10));
}
function helper644(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper645(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper646(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper647(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper648(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 8)).add(BigNumber.from(5));
}
function helper649(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper650(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (0)/10));
}
function helper651(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper652(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper653(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper654(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper655(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 15)).add(BigNumber.from(5));
}
function helper656(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper657(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (2)/10));
}
function helper658(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper659(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper660(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper661(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper662(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 2)).add(BigNumber.from(5));
}
function helper663(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper664(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (4)/10));
}
function helper665(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper666(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper667(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper668(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper669(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 9)).add(BigNumber.from(5));
}
function helper670(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper671(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (1)/10));
}
function helper672(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper673(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper674(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper675(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper676(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 16)).add(BigNumber.from(5));
}
function helper677(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper678(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (3)/10));
}
function helper679(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper680(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper681(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper682(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper683(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 3)).add(BigNumber.from(5));
}
function helper684(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper685(x) {
    return x.add(BigNumber.from(6)).pow(BigNumber.from(1 + (0)/10));
}
function helper686(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper687(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper688(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper689(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper690(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 10)).add(BigNumber.from(5));
}
function helper691(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper692(x) {
    return x.add(BigNumber.from(13)).pow(BigNumber.from(1 + (2)/10));
}
function helper693(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper694(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper695(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper696(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper697(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 17)).add(BigNumber.from(5));
}
function helper698(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper699(x) {
    return x.add(BigNumber.from(3)).pow(BigNumber.from(1 + (4)/10));
}
function helper700(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper701(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(3)));
}
function helper702(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper703(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper704(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 4)).add(BigNumber.from(5));
}
function helper705(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper706(x) {
    return x.add(BigNumber.from(10)).pow(BigNumber.from(1 + (1)/10));
}
function helper707(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper708(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(1)));
}
function helper709(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}
function helper710(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper711(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 11)).add(BigNumber.from(5));
}
function helper712(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper713(x) {
    return x.add(BigNumber.from(17)).pow(BigNumber.from(1 + (3)/10));
}
function helper714(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper715(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(2)));
}
function helper716(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+1)).mul(x.pow(BigNumber.from(0.3)));
}
function helper717(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper718(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 18)).add(BigNumber.from(5));
}
function helper719(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper720(x) {
    return x.add(BigNumber.from(7)).pow(BigNumber.from(1 + (0)/10));
}
function helper721(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper722(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(3)));
}
function helper723(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+8)).mul(x.pow(BigNumber.from(0.3)));
}
function helper724(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(10)));
}
function helper725(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 5)).add(BigNumber.from(5));
}
function helper726(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper727(x) {
    return x.add(BigNumber.from(14)).pow(BigNumber.from(1 + (2)/10));
}
function helper728(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper729(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(1)));
}
function helper730(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+2)).mul(x.pow(BigNumber.from(0.3)));
}
function helper731(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(6)));
}
function helper732(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 12)).add(BigNumber.from(5));
}
function helper733(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper734(x) {
    return x.add(BigNumber.from(4)).pow(BigNumber.from(1 + (4)/10));
}
function helper735(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 5;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper736(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(2)));
}
function helper737(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+9)).mul(x.pow(BigNumber.from(0.3)));
}
function helper738(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(2)));
}
function helper739(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 19)).add(BigNumber.from(5));
}
function helper740(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(3));
}
function helper741(x) {
    return x.add(BigNumber.from(11)).pow(BigNumber.from(1 + (1)/10));
}
function helper742(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 2;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper743(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(3)));
}
function helper744(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+3)).mul(x.pow(BigNumber.from(0.3)));
}
function helper745(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(9)));
}
function helper746(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 6)).add(BigNumber.from(5));
}
function helper747(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(1));
}
function helper748(x) {
    return x.add(BigNumber.from(1)).pow(BigNumber.from(1 + (3)/10));
}
function helper749(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 9;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper750(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(1)));
}
function helper751(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+10)).mul(x.pow(BigNumber.from(0.3)));
}
function helper752(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(5)));
}
function helper753(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 13)).add(BigNumber.from(5));
}
function helper754(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(8));
}
function helper755(x) {
    return x.add(BigNumber.from(8)).pow(BigNumber.from(1 + (0)/10));
}
function helper756(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 6;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper757(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(2)));
}
function helper758(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+4)).mul(x.pow(BigNumber.from(0.3)));
}
function helper759(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(1)));
}
function helper760(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 0)).add(BigNumber.from(5));
}
function helper761(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(6));
}
function helper762(x) {
    return x.add(BigNumber.from(15)).pow(BigNumber.from(1 + (2)/10));
}
function helper763(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 3;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper764(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(3)));
}
function helper765(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+11)).mul(x.pow(BigNumber.from(0.3)));
}
function helper766(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(8)));
}
function helper767(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 7)).add(BigNumber.from(5));
}
function helper768(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(4));
}
function helper769(x) {
    return x.add(BigNumber.from(5)).pow(BigNumber.from(1 + (4)/10));
}
function helper770(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 0;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper771(x,y) {
    return x.mul(BigNumber.from(2)).add(y.mul(BigNumber.from(1)));
}
function helper772(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+5)).mul(x.pow(BigNumber.from(0.3)));
}
function helper773(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(4)));
}
function helper774(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 14)).add(BigNumber.from(5));
}
function helper775(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(2));
}
function helper776(x) {
    return x.add(BigNumber.from(12)).pow(BigNumber.from(1 + (1)/10));
}
function helper777(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 7;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper778(x,y) {
    return x.mul(BigNumber.from(4)).add(y.mul(BigNumber.from(2)));
}
function helper779(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+12)).mul(x.pow(BigNumber.from(0.3)));
}
function helper780(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(11)));
}
function helper781(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 1)).add(BigNumber.from(5));
}
function helper782(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(9));
}
function helper783(x) {
    return x.add(BigNumber.from(2)).pow(BigNumber.from(1 + (3)/10));
}
function helper784(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 4;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper785(x,y) {
    return x.mul(BigNumber.from(1)).add(y.mul(BigNumber.from(3)));
}
function helper786(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+6)).mul(x.pow(BigNumber.from(0.3)));
}
function helper787(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(7)));
}
function helper788(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 8)).add(BigNumber.from(5));
}
function helper789(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(7));
}
function helper790(x) {
    return x.add(BigNumber.from(9)).pow(BigNumber.from(1 + (0)/10));
}
function helper791(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 1;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper792(x,y) {
    return x.mul(BigNumber.from(3)).add(y.mul(BigNumber.from(1)));
}
function helper793(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+0)).mul(x.pow(BigNumber.from(0.3)));
}
function helper794(x,y,z) {
    return x.mul(y).add(z.mul(BigNumber.from(3)));
}
function helper795(x) {
    return BigNumber.from(Math.sin(x.toNumber() + 15)).add(BigNumber.from(5));
}
function helper796(x,y) {
    return x.div(y.add(BigNumber.ONE)).add(BigNumber.from(5));
}
function helper797(x) {
    return x.add(BigNumber.from(16)).pow(BigNumber.from(1 + (2)/10));
}
function helper798(x) {
    var n = Math.max(1, Math.floor(x.toNumber())) + 8;
    var s = BigNumber.ZERO;
    for (var i = 1; i <= 6; i++) {
        s = s.add(x.pow(BigNumber.from(i)).mul(BigNumber.from(1.0/30)));
    }
    return s.add(BigNumber.from(n));
}
function helper799(x,y) {
    return x.mul(BigNumber.from(5)).add(y.mul(BigNumber.from(2)));
}
function helper800(x) {
    return BigNumber.from(Math.log10(x.toNumber()+1+7)).mul(x.pow(BigNumber.from(0.3)));
}

function heavyComputationCycle(seed) {
    var acc = BigNumber.ZERO;
    var s = BigNumber.from((seed % 100) + 1);
    for (var i = 1; i <= 60; i++) {
        acc = acc.add(helper14(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper27(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper40(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper53(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper66(s, BigNumber.from(i)).mul(BigNumber.from(0.16666666666666666)));
        acc = acc.add(helper79(s).mul(BigNumber.from(0.7)));
        acc = acc.add(helper92(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper105(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper118(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper131(s, BigNumber.from(i)).mul(BigNumber.from(0.09090909090909091)));
        acc = acc.add(helper144(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper157(s).mul(BigNumber.from(0.6)));
        acc = acc.add(helper170(s).mul(BigNumber.from(0.7)));
        acc = acc.add(helper183(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper196(s, BigNumber.from(i)).mul(BigNumber.from(0.0625)));
        acc = acc.add(helper209(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper222(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper235(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper248(s).mul(BigNumber.from(0.6)));
        acc = acc.add(helper261(s, BigNumber.from(i)).mul(BigNumber.from(0.047619047619047616)));
        acc = acc.add(helper274(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper287(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper300(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper313(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper326(s, BigNumber.from(i)).mul(BigNumber.from(0.038461538461538464)));
        acc = acc.add(helper339(s).mul(BigNumber.from(0.6)));
        acc = acc.add(helper352(s).mul(BigNumber.from(0.7)));
        acc = acc.add(helper365(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper378(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper391(s, BigNumber.from(i)).mul(BigNumber.from(0.03225806451612903)));
        acc = acc.add(helper404(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper417(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper430(s).mul(BigNumber.from(0.6)));
        acc = acc.add(helper443(s).mul(BigNumber.from(0.7)));
        acc = acc.add(helper456(s, BigNumber.from(i)).mul(BigNumber.from(0.027777777777777776)));
        acc = acc.add(helper469(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper482(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper495(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper508(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper521(s, BigNumber.from(i)).mul(BigNumber.from(0.024390243902439025)));
        acc = acc.add(helper534(s).mul(BigNumber.from(0.7)));
        acc = acc.add(helper547(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper560(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper573(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper586(s, BigNumber.from(i)).mul(BigNumber.from(0.021739130434782608)));
        acc = acc.add(helper599(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper612(s).mul(BigNumber.from(0.6)));
        acc = acc.add(helper625(s).mul(BigNumber.from(0.7)));
        acc = acc.add(helper638(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper651(s, BigNumber.from(i)).mul(BigNumber.from(0.0196078431372549)));
        acc = acc.add(helper664(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper677(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper690(s).mul(BigNumber.from(0.5)));
        acc = acc.add(helper703(s).mul(BigNumber.from(0.6)));
        acc = acc.add(helper716(s, BigNumber.from(i)).mul(BigNumber.from(0.017857142857142856)));
        acc = acc.add(helper729(s).mul(BigNumber.from(0.1)));
        acc = acc.add(helper742(s).mul(BigNumber.from(0.2)));
        acc = acc.add(helper755(s).mul(BigNumber.from(0.30000000000000004)));
        acc = acc.add(helper768(s).mul(BigNumber.from(0.4)));
        acc = acc.add(helper781(s, BigNumber.from(i)).mul(BigNumber.from(0.01639344262295082)));
        s = s.add(BigNumber.from(1));
    }
    return acc;
}

function g1(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g2(x) {
    return f9(x).add(BigNumber.from(3));
}
function g3(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g4(x) {
    return f10(x).mul(BigNumber.from(5)).add(f2(x));
}
function g5(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g6(x) {
    return f9(x).add(BigNumber.from(7));
}
function g7(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g8(x) {
    return f10(x).mul(BigNumber.from(9)).add(f2(x));
}
function g9(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g10(x) {
    return f9(x).add(BigNumber.from(4));
}
function g11(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g12(x) {
    return f10(x).mul(BigNumber.from(2)).add(f2(x));
}
function g13(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g14(x) {
    return f9(x).add(BigNumber.from(1));
}
function g15(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g16(x) {
    return f10(x).mul(BigNumber.from(6)).add(f2(x));
}
function g17(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g18(x) {
    return f9(x).add(BigNumber.from(5));
}
function g19(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g20(x) {
    return f10(x).mul(BigNumber.from(10)).add(f2(x));
}
function g21(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g22(x) {
    return f9(x).add(BigNumber.from(2));
}
function g23(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g24(x) {
    return f10(x).mul(BigNumber.from(3)).add(f2(x));
}
function g25(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g26(x) {
    return f9(x).add(BigNumber.from(6));
}
function g27(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g28(x) {
    return f10(x).mul(BigNumber.from(7)).add(f2(x));
}
function g29(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g30(x) {
    return f9(x).add(BigNumber.from(3));
}
function g31(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g32(x) {
    return f10(x).mul(BigNumber.from(11)).add(f2(x));
}
function g33(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g34(x) {
    return f9(x).add(BigNumber.from(7));
}
function g35(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g36(x) {
    return f10(x).mul(BigNumber.from(4)).add(f2(x));
}
function g37(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g38(x) {
    return f9(x).add(BigNumber.from(4));
}
function g39(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g40(x) {
    return f10(x).mul(BigNumber.from(8)).add(f2(x));
}
function g41(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g42(x) {
    return f9(x).add(BigNumber.from(1));
}
function g43(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g44(x) {
    return f10(x).mul(BigNumber.from(1)).add(f2(x));
}
function g45(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g46(x) {
    return f9(x).add(BigNumber.from(5));
}
function g47(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g48(x) {
    return f10(x).mul(BigNumber.from(5)).add(f2(x));
}
function g49(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g50(x) {
    return f9(x).add(BigNumber.from(2));
}
function g51(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g52(x) {
    return f10(x).mul(BigNumber.from(9)).add(f2(x));
}
function g53(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g54(x) {
    return f9(x).add(BigNumber.from(6));
}
function g55(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g56(x) {
    return f10(x).mul(BigNumber.from(2)).add(f2(x));
}
function g57(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g58(x) {
    return f9(x).add(BigNumber.from(3));
}
function g59(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g60(x) {
    return f10(x).mul(BigNumber.from(6)).add(f2(x));
}
function g61(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g62(x) {
    return f9(x).add(BigNumber.from(7));
}
function g63(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g64(x) {
    return f10(x).mul(BigNumber.from(10)).add(f2(x));
}
function g65(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g66(x) {
    return f9(x).add(BigNumber.from(4));
}
function g67(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g68(x) {
    return f10(x).mul(BigNumber.from(3)).add(f2(x));
}
function g69(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g70(x) {
    return f9(x).add(BigNumber.from(1));
}
function g71(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g72(x) {
    return f10(x).mul(BigNumber.from(7)).add(f2(x));
}
function g73(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g74(x) {
    return f9(x).add(BigNumber.from(5));
}
function g75(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g76(x) {
    return f10(x).mul(BigNumber.from(11)).add(f2(x));
}
function g77(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g78(x) {
    return f9(x).add(BigNumber.from(2));
}
function g79(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g80(x) {
    return f10(x).mul(BigNumber.from(4)).add(f2(x));
}
function g81(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g82(x) {
    return f9(x).add(BigNumber.from(6));
}
function g83(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g84(x) {
    return f10(x).mul(BigNumber.from(8)).add(f2(x));
}
function g85(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g86(x) {
    return f9(x).add(BigNumber.from(3));
}
function g87(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g88(x) {
    return f10(x).mul(BigNumber.from(1)).add(f2(x));
}
function g89(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g90(x) {
    return f9(x).add(BigNumber.from(7));
}
function g91(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g92(x) {
    return f10(x).mul(BigNumber.from(5)).add(f2(x));
}
function g93(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g94(x) {
    return f9(x).add(BigNumber.from(4));
}
function g95(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g96(x) {
    return f10(x).mul(BigNumber.from(9)).add(f2(x));
}
function g97(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g98(x) {
    return f9(x).add(BigNumber.from(1));
}
function g99(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g100(x) {
    return f10(x).mul(BigNumber.from(2)).add(f2(x));
}
function g101(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g102(x) {
    return f9(x).add(BigNumber.from(5));
}
function g103(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g104(x) {
    return f10(x).mul(BigNumber.from(6)).add(f2(x));
}
function g105(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g106(x) {
    return f9(x).add(BigNumber.from(2));
}
function g107(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g108(x) {
    return f10(x).mul(BigNumber.from(10)).add(f2(x));
}
function g109(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g110(x) {
    return f9(x).add(BigNumber.from(6));
}
function g111(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g112(x) {
    return f10(x).mul(BigNumber.from(3)).add(f2(x));
}
function g113(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g114(x) {
    return f9(x).add(BigNumber.from(3));
}
function g115(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g116(x) {
    return f10(x).mul(BigNumber.from(7)).add(f2(x));
}
function g117(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g118(x) {
    return f9(x).add(BigNumber.from(7));
}
function g119(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g120(x) {
    return f10(x).mul(BigNumber.from(11)).add(f2(x));
}
function g121(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g122(x) {
    return f9(x).add(BigNumber.from(4));
}
function g123(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g124(x) {
    return f10(x).mul(BigNumber.from(4)).add(f2(x));
}
function g125(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g126(x) {
    return f9(x).add(BigNumber.from(1));
}
function g127(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g128(x) {
    return f10(x).mul(BigNumber.from(8)).add(f2(x));
}
function g129(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g130(x) {
    return f9(x).add(BigNumber.from(5));
}
function g131(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g132(x) {
    return f10(x).mul(BigNumber.from(1)).add(f2(x));
}
function g133(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g134(x) {
    return f9(x).add(BigNumber.from(2));
}
function g135(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g136(x) {
    return f10(x).mul(BigNumber.from(5)).add(f2(x));
}
function g137(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g138(x) {
    return f9(x).add(BigNumber.from(6));
}
function g139(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g140(x) {
    return f10(x).mul(BigNumber.from(9)).add(f2(x));
}
function g141(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g142(x) {
    return f9(x).add(BigNumber.from(3));
}
function g143(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g144(x) {
    return f10(x).mul(BigNumber.from(2)).add(f2(x));
}
function g145(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g146(x) {
    return f9(x).add(BigNumber.from(7));
}
function g147(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g148(x) {
    return f10(x).mul(BigNumber.from(6)).add(f2(x));
}
function g149(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g150(x) {
    return f9(x).add(BigNumber.from(4));
}
function g151(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g152(x) {
    return f10(x).mul(BigNumber.from(10)).add(f2(x));
}
function g153(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g154(x) {
    return f9(x).add(BigNumber.from(1));
}
function g155(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g156(x) {
    return f10(x).mul(BigNumber.from(3)).add(f2(x));
}
function g157(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g158(x) {
    return f9(x).add(BigNumber.from(5));
}
function g159(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g160(x) {
    return f10(x).mul(BigNumber.from(7)).add(f2(x));
}
function g161(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g162(x) {
    return f9(x).add(BigNumber.from(2));
}
function g163(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g164(x) {
    return f10(x).mul(BigNumber.from(11)).add(f2(x));
}
function g165(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g166(x) {
    return f9(x).add(BigNumber.from(6));
}
function g167(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g168(x) {
    return f10(x).mul(BigNumber.from(4)).add(f2(x));
}
function g169(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g170(x) {
    return f9(x).add(BigNumber.from(3));
}
function g171(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g172(x) {
    return f10(x).mul(BigNumber.from(8)).add(f2(x));
}
function g173(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g174(x) {
    return f9(x).add(BigNumber.from(7));
}
function g175(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g176(x) {
    return f10(x).mul(BigNumber.from(1)).add(f2(x));
}
function g177(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g178(x) {
    return f9(x).add(BigNumber.from(4));
}
function g179(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g180(x) {
    return f10(x).mul(BigNumber.from(5)).add(f2(x));
}
function g181(x,y) {
    return f4(x,y,BigNumber.from(2)).add(f21(x));
}
function g182(x) {
    return f9(x).add(BigNumber.from(1));
}
function g183(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g184(x) {
    return f10(x).mul(BigNumber.from(9)).add(f2(x));
}
function g185(x,y) {
    return f4(x,y,BigNumber.from(1)).add(f21(x));
}
function g186(x) {
    return f9(x).add(BigNumber.from(5));
}
function g187(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g188(x) {
    return f10(x).mul(BigNumber.from(2)).add(f2(x));
}
function g189(x,y) {
    return f4(x,y,BigNumber.from(5)).add(f21(x));
}
function g190(x) {
    return f9(x).add(BigNumber.from(2));
}
function g191(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(3)).add(f15(x,y));
}
function g192(x) {
    return f10(x).mul(BigNumber.from(6)).add(f2(x));
}
function g193(x,y) {
    return f4(x,y,BigNumber.from(4)).add(f21(x));
}
function g194(x) {
    return f9(x).add(BigNumber.from(6));
}
function g195(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(1)).add(f15(x,y));
}
function g196(x) {
    return f10(x).mul(BigNumber.from(10)).add(f2(x));
}
function g197(x,y) {
    return f4(x,y,BigNumber.from(3)).add(f21(x));
}
function g198(x) {
    return f9(x).add(BigNumber.from(3));
}
function g199(x,y,z) {
    return f20(x,y,z).mul(BigNumber.from(2)).add(f15(x,y));
}
function g200(x) {
    return f10(x).mul(BigNumber.from(3)).add(f2(x));
}

function update(dt) {
    var incA = f1(rho).mul(BigNumber.from(0.5 * dt));
    var incB = f4(sigma, delta, lambdaVar).mul(BigNumber.from(0.2 * dt));
    var incC = f2(omega).mul(BigNumber.from(0.05 * dt));
    var incD = f11(psi, theta).mul(BigNumber.from(0.15 * dt));
    var incE = f5(zeta).mul(BigNumber.from(0.3 * dt));
    rho = rho.add(incA).add(incC);
    sigma = sigma.add(incB).add(incD);
    delta = delta.add(incE);
    lambdaVar = lambdaVar.add(f6(lambdaVar).mul(BigNumber.from(0.01 * dt)));
    omega = omega.add(f7(omega, rho).mul(BigNumber.from(0.02 * dt)));
    psi = psi.add(f12(psi).mul(BigNumber.from(0.005 * dt)));
    theta = theta.add(f17(delta).mul(BigNumber.from(0.004 * dt)));
    zeta = zeta.add(f18(omega, psi).mul(BigNumber.from(0.003 * dt)));
    var heavy = heavyComputationCycle(Math.floor(rho.toNumber()) + Math.floor(sigma.toNumber()));
    rho = rho.add(heavy.mul(BigNumber.from(1e-6)));
    sigma = sigma.add(heavy.mul(BigNumber.from(5e-7)));
    sigma = sigma.add(g1(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g2(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g3(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g4(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g5(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g6(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g7(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g8(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g9(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g10(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g11(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g12(rho).mul(BigNumber.from(3e-07)));
    sigma = sigma.add(g13(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g14(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g15(rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g16(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g17(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g18(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g19(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g20(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g21(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g22(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g23(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g24(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g25(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g26(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g27(rho).mul(BigNumber.from(3e-07)));
    sigma = sigma.add(g28(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g29(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g30(rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g31(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g32(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g33(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g34(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g35(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g36(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g37(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g38(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g39(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g40(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g41(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g42(rho).mul(BigNumber.from(3e-07)));
    sigma = sigma.add(g43(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g44(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g45(rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g46(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g47(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g48(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g49(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g50(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g51(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g52(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g53(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g54(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g55(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g56(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g57(rho).mul(BigNumber.from(3e-07)));
    sigma = sigma.add(g58(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g59(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g60(rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g61(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g62(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g63(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g64(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g65(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g66(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g67(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g68(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g69(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g70(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g71(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g72(rho).mul(BigNumber.from(3e-07)));
    sigma = sigma.add(g73(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g74(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g75(rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g76(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g77(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g78(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g79(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g80(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g81(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g82(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g83(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g84(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g85(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g86(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g87(rho).mul(BigNumber.from(3e-07)));
    sigma = sigma.add(g88(sigma, rho).mul(BigNumber.from(5e-08)));
    sigma = sigma.add(g89(sigma, rho).mul(BigNumber.from(1e-07)));
    rho = rho.add(g90(rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g91(sigma, rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g92(sigma, rho).mul(BigNumber.from(5e-08)));
    rho = rho.add(g93(rho).mul(BigNumber.from(4e-07)));
    sigma = sigma.add(g94(sigma, rho).mul(BigNumber.from(1.5e-07)));
    sigma = sigma.add(g95(sigma, rho).mul(BigNumber.from(2e-07)));
    rho = rho.add(g96(rho).mul(BigNumber.from(2e-07)));
    sigma = sigma.add(g97(sigma, rho).mul(BigNumber.from(1e-07)));
    sigma = sigma.add(g98(sigma, rho).mul(BigNumber.from(1.5e-07)));
    rho = rho.add(g99(rho).mul(BigNumber.from(5e-07)));
    sigma = sigma.add(g100(sigma, rho).mul(BigNumber.from(5e-08)));
    var candidate = rho.pow(BigNumber.from(50));
    if (candidate.gt(tau429)) tau429 = candidate;
    var cap = BigNumber.from(1e200);
    if (rho.gt(cap)) rho = cap;
    if (sigma.gt(cap)) sigma = cap;
    if (delta.gt(cap)) delta = cap;
    if (lambdaVar.gt(cap)) lambdaVar = cap;
    if (omega.gt(cap)) omega = cap;
}

function tick(elapsedTime, multiplier) { update(elapsedTime * multiplier); }

function getPrimaryEquation() { return "ρ̇ = mix(f1..f30, helpers, heavyComputation)"; }
function getSecondaryEquation() { return "τ₄₂₉ = max(ρ^50)"; }
function getPublicationMultiplier(tau) { return tau.pow(BigNumber.from(0.15)); }
function getPublicationMultiplierFormula() { return "(max(ρ^50))^{0.15}"; }

function exportState() {
    var parts = [rho.toString(), sigma.toString(), delta.toString(), lambdaVar.toString(), omega.toString(), psi.toString(), theta.toString(), zeta.toString(), tau429.toString()];
    return parts.join("|");
}

function importState(s) {
    var parts = s.split("|");
    if (parts.length > 0) rho = BigNumber.from(parts[0]);
    if (parts.length > 1) sigma = BigNumber.from(parts[1]);
    if (parts.length > 2) delta = BigNumber.from(parts[2]);
    if (parts.length > 3) lambdaVar = BigNumber.from(parts[3]);
    if (parts.length > 4) omega = BigNumber.from(parts[4]);
    if (parts.length > 5) psi = BigNumber.from(parts[5]);
    if (parts.length > 6) theta = BigNumber.from(parts[6]);
    if (parts.length > 7) zeta = BigNumber.from(parts[7]);
    if (parts.length > 8) tau429 = BigNumber.from(parts[8]);
}

function getInternalState() { return exportState(); }
function setInternalState(s) { importState(s); }

function get2DGraphValue() { return rho.toNumber(); }
function get3DGraphPoint() { return new Vector3(rho.log10().toNumber(), sigma.log10().toNumber(), delta.log10().toNumber()); }

function getTheoryName() { return name; }
function getDescription() { return description; }
function getAuthors() { return authors; }
function getVersion() { return version; }

