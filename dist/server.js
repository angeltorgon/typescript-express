"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.log(`Port is running on port ${app_1.default.get('port')}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map