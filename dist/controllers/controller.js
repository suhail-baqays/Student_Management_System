"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_student = exports.edit_student = exports.delete_student = exports.create_student = exports.index = void 0;
const DB_structure_js_1 = __importDefault(require("../models/DB_structure.js"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield DB_structure_js_1.default.find({});
        res.render("Manage_std", { StudentList: students });
    }
    catch (err) {
        console.error("Error fetching students:", err);
        res.status(500).send("Server Error");
    }
});
exports.index = index;
const create_student = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const new_Student = new DB_structure_js_1.default(req.body);
        yield new_Student.save();
        res.redirect('/');
    }
    catch (err) {
        console.error("Error incerting student:", err);
        res.status(500).send("Server Error");
    }
});
exports.create_student = create_student;
const delete_student = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield DB_structure_js_1.default.deleteOne({ _id: req.params.id });
        res.redirect('/');
    }
    catch (err) {
        console.error("Error deleting student:", err);
        res.status(500).send("Server Error");
    }
});
exports.delete_student = delete_student;
const edit_student = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield DB_structure_js_1.default.find({});
        const id = req.params.id;
        res.render("update_std.ejs", { StudentList: students, edited_ID_std: id });
    }
    catch (err) {
        console.error("Error cannot update student:", err);
        res.status(500).send("Server Error");
    }
});
exports.edit_student = edit_student;
const update_student = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield DB_structure_js_1.default.updateOne({ _id: req.params.id }, { $set: req.body });
        res.redirect('/');
    }
    catch (err) {
        console.error("Error cannot update student:", err);
        res.status(500).send("Server Error");
    }
});
exports.update_student = update_student;
