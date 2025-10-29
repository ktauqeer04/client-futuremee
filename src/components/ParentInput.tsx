import { useState } from "react";
import ContentInput from "./ContentInput";
import Inputs from "./Inputs";

export default function ParentInput() {
  const [contentInput, setContentInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [confirmEmailInput, setConfirmEmailInput] = useState<string>("");
  const [scheduledDate, setScheduledDate] = useState<string>("");

  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <ContentInput
          contentInput={contentInput}
          setContentInput={setContentInput}
        />
      </div>

      <div className="w-1/2">
        <Inputs
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          confirmEmailInput={confirmEmailInput}
          setConfirmEmailInput={setConfirmEmailInput}
          scheduledDate={scheduledDate}
          setScheduledDate={setScheduledDate}
        />
      </div>
    </div>
  );
}
