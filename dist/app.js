"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const method_override_1 = __importDefault(require("method-override"));
const path_1 = __importDefault(require("path"));
const router_js_1 = __importDefault(require("./routes/router.js"));
const app = (0, express_1.default)();
app.use((0, method_override_1.default)("_method", { methods: ["POST", "GET"] }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "./views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "./views")));
const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/Student_Management_System";
mongoose_1.default.connect(dbUrl)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));
app.use("/", router_js_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
