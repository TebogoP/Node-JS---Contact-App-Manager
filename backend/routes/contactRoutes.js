const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({"message":"Get all Contacts from contactRoutes "});
});

router.get("/:id", (req, res) => {
    res.status(200).json({"message": `Get a Contact id:  ${req.params.id} from contactRoutes `});
});
router.post("/", (req, res) => {
    res.status(201).json({"message":"Create a new Contact from contactRoutes "});
});

router.patch("/:id", (req, res) => {
    res.status(200).json({"message": `Update a Contact id:  ${req.params.id} from contactRoutes `});
});
router.delete("/:id", (req, res) => {
    res.status(200).json({"message": `Delete a Contact id:  ${req.params.id} from contactRoutes `});
});   
        
module.exports = router;