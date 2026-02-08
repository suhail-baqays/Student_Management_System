"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema;
schema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    }
});
const Student = (0, mongoose_1.model)("Student", schema);
exports.default = Student;
