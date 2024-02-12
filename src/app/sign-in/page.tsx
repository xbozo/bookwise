export default function SignIn() {
  return (
    <div className="flex h-full">
      <section className="w-1/3 rounded-xl bg-gradient-to-tr from-ds-green-200 to-ds-purple-200 h-full relative flex items-center justify-center">
        <img alt="" src="/logo.svg" />

        <div className="rounded-xl bg-sign-in-bg opacity-15 absolute h-full w-full bg-cover bg-no-repeat" />
      </section>

      <section className="w-2/3 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-bold text-2xl leading-4">Boas vindas!</h1>
            <p className="text-ds-gray-300">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <div className="gap-3 flex flex-col">
            <button>
              <img src="/images/google-logo.svg" alt="Entrar com Google" />
            </button>

            <button>
              <img src="/images/github-logo.svg" alt="Entrar com GitHub" />
            </button>

            <button>
              <img src="/images/guest-logo.svg" alt="Acessar como visitante" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
