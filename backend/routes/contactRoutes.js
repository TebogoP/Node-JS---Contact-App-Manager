const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({"message":"Get all Contacts from contactRoutes "});
});

module.exports = router;