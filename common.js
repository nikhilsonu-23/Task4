var _a;
var isSideNavMinimized = false;
(_a = document.getElementById("minimize")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    if (isSideNavMinimized) {
        (_a = document.getElementById("vNav")) === null || _a === void 0 ? void 0 : _a.classList.add("w-300");
        document.querySelectorAll(".nav-items span").forEach(function (span) {
            span.classList.remove("hide-nav-items");
        });
        document.querySelectorAll(".navHeadings").forEach(function (element) {
            element.classList.remove("nav-headings-hidden");
        });
        document.querySelectorAll(".caret").forEach(function (caret) {
            caret.classList.remove("ds-none");
        });
        (_b = document.querySelector(".update")) === null || _b === void 0 ? void 0 : _b.classList.remove("ds-none");
        (_c = document.querySelector("#logoImg")) === null || _c === void 0 ? void 0 : _c.classList.remove("ds-none");
        (_d = document.querySelector(".after")) === null || _d === void 0 ? void 0 : _d.classList.add("side-red");
        (_e = document.getElementById("minimize")) === null || _e === void 0 ? void 0 : _e.classList.remove("rotate-180");
        (_f = document.querySelector(".section-85")) === null || _f === void 0 ? void 0 : _f.classList.replace("section-85", "section-300");
    }
    else {
        (_g = document.getElementById("vNav")) === null || _g === void 0 ? void 0 : _g.classList.remove("w-300");
        document.querySelectorAll(".nav-items span").forEach(function (span) {
            span.classList.add("hide-nav-items");
        });
        document.querySelectorAll(".navHeadings").forEach(function (element) {
            element.classList.add("nav-headings-hidden");
        });
        document.querySelectorAll(".caret").forEach(function (caret) {
            caret.classList.add("ds-none");
        });
        (_h = document.querySelector(".update")) === null || _h === void 0 ? void 0 : _h.classList.add("ds-none");
        (_j = document.querySelector("#logoImg")) === null || _j === void 0 ? void 0 : _j.classList.add("ds-none");
        (_k = document.querySelector(".after")) === null || _k === void 0 ? void 0 : _k.classList.remove("side-red");
        (_l = document.getElementById("minimize")) === null || _l === void 0 ? void 0 : _l.classList.add("rotate-180");
        (_m = document.querySelector(".section-300")) === null || _m === void 0 ? void 0 : _m.classList.replace("section-300", "section-85");
    }
    isSideNavMinimized = !isSideNavMinimized;
});
function delFromLocalStorage(name, value) {
    var dataSet = new Set(JSON.parse(localStorage.getItem(name) || "[]"));
    dataSet.delete(value);
    var dataArr = Array.from(dataSet);
    localStorage.setItem(name, JSON.stringify(dataArr));
}
// type employeeDataObjectType =  {[index: string]: string};
function getEmployeeData() {
    var employeeDetails = JSON.parse(localStorage.getItem("employeeData") || "{}");
    if (employeeDetails && employeeDetails.length > 0) {
        return employeeDetails;
    }
    return [];
}
