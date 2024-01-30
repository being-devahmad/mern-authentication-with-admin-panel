const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        require.body = parseBody
        console.log(parseBody);
    } catch (err) {
        const status = 422
        const message = "Fill te input prperly"
        const extraDetails = err.errors[0].message
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error);
        // res.status(400).send({ msg: message })
        next(err);
    }
}

module.exports = validate