const { z } = require("zod")

// creating an objec schema
const signUpSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not be mre than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(8, { message: "Email must be at least 8 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be atleast 6 characters" })
        .max(16, { message: "Password must not be more than 16 characters" })
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(8, { message: "Email must be at least 8 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be atleast 6 characters" })
        .max(16, { message: "Password must not be more than 16 characters" })
})

module.exports = { signUpSchema, loginSchema }