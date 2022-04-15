import { Request, Response, NextFunction } from "express";

const errorReceiver =
    (controller:any) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = await controller(req, res, next);
                res.status(200).json({msg:result})
            } catch (error) {
        next(error);
    }
};

export default errorReceiver;