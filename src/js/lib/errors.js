export class InvalidIdentifierError extends Error {
    constructor(extend = "", _message = "The provided identifier is not valid.") {
        const message = `${_message} ${extend}`
        super(message)
        this.name = "InvalidIdentifierError"
    }
}