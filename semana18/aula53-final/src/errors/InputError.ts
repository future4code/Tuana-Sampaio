import { CustomError } from "./CustomError";

export class InputError extends CustomError {
    constructor() {
        super("Invalid input", 406)
    }
}