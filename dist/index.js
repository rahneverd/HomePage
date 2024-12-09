"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static(__dirname + '/public'));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((0, cors_1.default)({ credentials: true }));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
app.use('/', (0, router_1.default)());
//# sourceMappingURL=index.js.map