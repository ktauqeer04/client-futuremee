export interface InputProps {

    emailInput: string;
    setEmailInput: (email: string) => void;

    confirmEmailInput: string;
    setConfirmEmailInput: (email: string) => void;

    scheduledDate: string;
    setScheduledDate: (date: string) => void;

    contentInput: string;
    setContentInput: (contentInput : string) => void;

}

export interface ContentInputProps {

    contentInput: string;
    setContentInput: (contentInput : string) => void;

}

export interface FormData {
  email: string;
  confirmEmail: string;
  scheduledDate: string;
  content: string;
}