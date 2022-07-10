import { NextApiHandler } from "next";

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export function createEndpoint<Resource>(
    methods: Partial<Record<Method, NextApiHandler<Resource>>>
): NextApiHandler {
    const supportedMethods = Object.keys(methods);

    return async (req, res) => {
        const handler = methods[(req.method || "GET") as Method];

        if (!handler) {
            return res.status(405).json({
                message: `You must ${supportedMethods.join(
                    ", "
                )} to this endpoint!`,
            });
        }

        try {
            await handler(req, res);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({
                    message: process.env.NODE_ENV
                        ? err.message
                        : "Something went wrong.",
                });
            }
        }
    };
}
