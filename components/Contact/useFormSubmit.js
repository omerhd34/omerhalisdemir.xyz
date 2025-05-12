import { useCallback } from "react";
import emailjs from "@emailjs/browser";

export default function useFormSubmit({
  formData,
  setIsSubmitting,
  setSubmitStatus,
  resetForm,
  clearStatus,
}) {
  return useCallback(
    (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      emailjs
        .send(
          "service_63m95wk", // your EmailJS service ID
          "template_mq605oh", // your template ID
          templateParams,
          "uhxSnflDYchCSCnVr" // your public key
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setSubmitStatus("success");
          resetForm();
          clearStatus();
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setIsSubmitting(false);
          setSubmitStatus("error");
          clearStatus();
        });
    },
    [formData, setIsSubmitting, setSubmitStatus, resetForm, clearStatus]
  );
}
