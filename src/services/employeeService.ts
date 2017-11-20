//admin.ts (nested inside of index.ts)
import * as express from "express";
import {Employee} from "../objects/employee";

export const employeeRouter = ((): express.Router => {
    let router: express.Router = express.Router();

    router.get("/", (req, res) => {
        let employees: Employee[] = [new Employee(10, "Omri", "Ziv"), new Employee(11, "Yaffa", "Ziv"), new Employee(12, "Jonathan", "Ziv")];
        res.json(employees);
    });

    router.get("/:id", (req, res) => {
        let employee: Employee = new Employee(req.params.id, "Jonathan", "Ziv");
        res.json(employee);
    });


    return router;
})();
