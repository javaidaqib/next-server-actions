import { experimental_useFormStatus as useFormStatus } from "react-dom";

type AddUserButtonProps = {
  label: string;
};

const AddUserButton = ({ label }: AddUserButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="border shadow-sm py-3 px-5 font-bold rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed bg-sky-500 text-white hover:shadow-md hover:bg-sky-600 transition"
      type="submit"
    >
      {label}
    </button>
  );
};

export default AddUserButton;
