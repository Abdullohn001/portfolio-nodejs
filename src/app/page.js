import Image from "next/image";

const projects = [
  {
    title: "7/3 dars",
    description: "Card",
    githubLink: "https://github.com/Abdullohn001/Calculate-card",
    vercelLink: "https://calculate-card.vercel.app/",
  },
  {
    title: "7/4 dars",
    description: "Login with redux",
    githubLink: "https://github.com/Abdullohn001/loginWithRedux",
    vercelLink: "https://login-with-redux-one.vercel.app/",
  },
  {
    title: "7/5 dars",
    description: "Frontend quiz app",
    githubLink: "https://github.com/Abdullohn001/quiz-app",
    vercelLink: "https://quiz-app-seven-tau.vercel.app/",
  },
  {
    title: "7/6 dars",
    description: "Store in Ant",
    githubLink: "https://github.com/Abdullohn001/Store-in-Redux",
    vercelLink: "https://store-in-redux.vercel.app/",
  },
  {
    title: "7/7 dars",
    description: "Store in Redux",
    githubLink: "https://github.com/Abdullohn001/Store-in-Redux",
    vercelLink: "https://store-in-redux.vercel.app/",
  },
  {
    title: "7/8 dars",
    description: "add Books",
    githubLink: "https://github.com/Abdullohn001/addbooks",
    vercelLink: "https://addbooks.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by &nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t  via-white from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl">Abdulloh</h1>{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="relative text-3xl text-white dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-gray-100 text-3d animate-pulse-3d">
          Abdulloh Abdunazarov
        </h1>
      </div>

      <div className="mb-32 gap-10 mt-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {projects &&
          projects.map((prod) => {
            return (
              <div
                key={prod.title}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {prod.title}{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                  <p className="text-xl">{prod.description}</p>
                </h2>

                <div className="flex gap-2 flex-col">
                  <a
                    href={prod.githubLink}
                    target="_blank"
                    className="cursor-pointer flex items-center m-0 max-w-[30ch] text-sm opacity-50 hover:opacity-100"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub Logo"
                      className="w-5 h-5 mr-2"
                    />
                    GitHub Link
                  </a>
                  <a
                    target="_blank"
                    href={prod.vercelLink}
                    className="cursor-pointer flex items-center m-0 max-w-[30ch] text-sm opacity-50 hover:opacity-100"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGxwl9CXMlTQ3ngKLiw6DgkOb6pQlcjUwDQ&s"
                      alt="Vercel Logo"
                      className="w-5 h-5 mr-2"
                    />
                    Vercel Link
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}
