import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  id: string;
};

type TextFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { multiline?: false };

type TextAreaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true };

type FieldProps = TextFieldProps | TextAreaFieldProps;

export default function FormField(props: FieldProps) {
  const { label, id, multiline, ...rest } = props;

  const sharedClassName =
    "w-full rounded-[6px] border border-black bg-white px-4 py-2 font-body text-[16px] text-black outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue)]";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-body text-[20px] text-black">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={8}
          className={sharedClassName}
          {...(rest as Omit<TextAreaFieldProps, "label" | "id" | "multiline">)}
        />
      ) : (
        <input
          id={id}
          type="text"
          className={sharedClassName}
          {...(rest as Omit<TextFieldProps, "label" | "id" | "multiline">)}
        />
      )}
    </div>
  );
}
