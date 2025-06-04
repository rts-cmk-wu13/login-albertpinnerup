type FieldError = {
    errors: string[];
};

export type ContactErrors = {
    name?: FieldError;
    email?: FieldError;
    message?: FieldError;
};
