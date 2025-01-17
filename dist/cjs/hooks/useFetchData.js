"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchData = void 0;
const react_1 = require("react");
function useFetchData(url) {
    const [data, setData] = (0, react_1.useState)();
    const [isDone, setIsDone] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
            setData(data);
            setIsDone(true);
        });
    }, [url]);
    return { data, isDone };
}
exports.useFetchData = useFetchData;
//# sourceMappingURL=useFetchData.js.map