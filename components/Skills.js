import React from 'react';

const Skills = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">

        <section className="py-8 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl font-bold mb-9 text-center animate-slide-in-left">
              MY <span className="text-blue-400">S</span>TACKS
            </h2>
          </div>
        </section>

        {/* Mobile view */}
        <div className="sm:hidden">
          <div className="grid grid-cols-3 ">
            <div className="flex flex-col items-center mb-2">
              <img src="/javascript.png" alt="JavaScript" className="w-12 h-12 " />
              <span className="text-white">JavaScript</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/typescript.png" alt="TypeScript" className="w-12 h-12 " />
              <span className="text-white">TypeScript</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/nextjs.png" alt="Next.js" className="w-12 h-12 " />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/tailwindcss.png" alt="Tailwind CSS" className="w-12 h-12 " />
              <span className="text-white">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/css.png" alt="CSS" className="w-12 h-12" />
              <span className="text-white">CSS</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/html.png" alt="HTML" className="w-12 h-12 " />
              <span className="text-white">HTML</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/java.png" alt="Java" className="w-12 h-12 " />
              <span className="text-white">Java</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/csharp.png" alt="C#" className="w-12 h-12" />
              <span className="text-white">C#</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/cplusplus.png" alt="C++" className="w-12 h-12" />
              <span className="text-white">C++</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/php.png" alt="PHP" className="w-12 h-12" />
              <span className="text-white">PHP</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/react.png" alt="React" className="w-12 h-12" />
              <span className="text-white">React</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/git.png" alt="Git" className="w-12 h-12" />
              <span className="text-white">Git</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/github.png" alt="GitHub" className="w-12 h-12" />
              <span className="text-white">GitHub</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/jira.png" alt="Jira" className="w-12 h-12 " />
              <span className="text-white">Jira</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/trello.png" alt="Trello" className="w-12 h-12 " />
              <span className="text-white">Trello</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/firebase.png" alt="Firebase" className="w-12 h-12" />
              <span className="text-white">Firebase</span>
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/javascript.png" alt="JavaScript" className="w-12 h-12 mb-2" />
              <span className="text-white">JavaScript</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/typescript.png" alt="TypeScript" className="w-12 h-12 mb-2" />
              <span className="text-white">TypeScript</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/nextjs.png" alt="Next.js" className="w-12 h-12 mb-2" />
              <span className="text-white">Next.js</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/tailwindcss.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="text-white">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/css.png" alt="CSS" className="w-12 h-12 mb-2" />
              <span className="text-white">CSS</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/html.png" alt="HTML" className="w-12 h-12 mb-2" />
              <span className="text-white">HTML</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/java.png" alt="Java" className="w-12 h-12 mb-2" />
              <span className="text-white">Java</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/csharp.png" alt="C#" className="w-12 h-12 mb-2" />
              <span className="text-white">C#</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/cplusplus.png" alt="C++" className="w-12 h-12 mb-2" />
              <span className="text-white">C++</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/php.png" alt="PHP" className="w-12 h-12 mb-2" />
              <span className="text-white">PHP</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/react.png" alt="React" className="w-12 h-12 mb-2" />
              <span className="text-white">React</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/git.png" alt="Git" className="w-12 h-12 mb-2" />
              <span className="text-white">Git</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/github.png" alt="GitHub" className="w-12 h-12 mb-2" />
              <span className="text-white">GitHub</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/jira.png" alt="Jira" className="w-12 h-12 mb-2" />
              <span className="text-white">Jira</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/trello.png" alt="Trello" className="w-12 h-12 mb-2" />
              <span className="text-white">Trello</span>
            </div>
            <div className="flex flex-col items-center mr-8 mb-4">
              <img src="/firebase.png" alt="Firebase" className="w-12 h-12 mb-2" />
              <span className="text-white">Firebase</span>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-9">

        {/* Desktop view */}
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-center">
            {/* Add items here */}
            {/* ... */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
