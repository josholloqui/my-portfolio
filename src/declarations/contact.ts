export interface StatusData {
  submitted: boolean,
  submitting: boolean,
  info: {
    error: boolean,
    msg: string
  }
}

export interface InputInterface {
  email: string,
  message: string
}
