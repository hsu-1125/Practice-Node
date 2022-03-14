export default class PracticeError extends Error {
    constructor(message) {
        if (message instanceof Object) {
            super(JSON.stringify(message, null, 4))
        } else {
            super(message)
        }
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor)
    }
}

export class NotLoginError extends PracticeError {
    httpStatus = 200;
    constructor(message = 'Not login yet.') {
        super(message)
    }
}

export class TokenExpiredError extends PracticeError {
    httpStatus = 200;
    constructor(message = 'The token is expired.') {
        super(message)
    }
}

export class UserNotExistError extends PracticeError {
    httpStatus = 200;
    constructor(message = 'Email or password wrong.') {
        super(message)
    }
}


