const express = require("express");
const app = express();
const winston = require("winston");

// Logger configuration
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Log to console when not in production
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

// Calculator functions
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return n1 / n2;
};

// API endpoints
app.get("/:operation", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        const operation = req.params.operation;

        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid number input");
            throw new Error("Invalid number input");
        }

        let result;
        switch (operation) {
            case "add":
                result = add(n1, n2);
                break;
            case "subtract":
                result = subtract(n1, n2);
                break;
            case "multiply":
                result = multiply(n1, n2);
                break;
            case "divide":
                result = divide(n1, n2);
                break;
            default:
                throw new Error("Invalid operation");
        }

        logger.info(`Operation: ${operation}, n1: ${n1}, n2: ${n2}, result: ${result}`);
        res.status(200).json({ statusCode: 200, data: result });

    } catch (error) {
        logger.error(error.message);
        res.status(500).json({ statusCode: 500, message: error.message });
    }
});

// Start server
const port = 3050;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    logger.info(`Server started on port ${port}`);
});
