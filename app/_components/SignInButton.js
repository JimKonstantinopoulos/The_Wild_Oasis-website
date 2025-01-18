import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    //Authentication needs to happen on the server side so instead of jsut adding onClick here a server action must be executed, that's why the form got created
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
