"use strict";
const express = require("express");
const employee_1 = require("../objects/employee");
exports.employeeRouter = (() => {
    let router = express.Router();
    router.get("/", (req, res) => {
        let employees = [new employee_1.Employee(10, "Omri", "Ziv"), new employee_1.Employee(11, "Yaffa", "Ziv"), new employee_1.Employee(12, "Jonathan", "Ziv")];
        res.json(employees);
    });
    router.get("/:id", (req, res) => {
        let employee = new employee_1.Employee(req.params.id, "Jonathan", "Ziv");
        res.json(employee);
    });
    return router;
})();
