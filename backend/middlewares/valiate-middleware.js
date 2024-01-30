const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        console.log(parseBody);
        next();
    } catch (err) {
        console.error(err);
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails,
        };
        console.log(error);
        next(err);
    }
};


module.exports = validate