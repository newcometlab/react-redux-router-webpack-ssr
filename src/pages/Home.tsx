import React from "react";
import { Link } from "react-router-dom";
function HelloPage() {
  return (
    <div className="flex item-center justify-center text-center">
      <div>
        <h1>
          - React v18 <br />
          - TypeScript <br />
          - Redux <br />
          - React Router <br />
          - Webpack <br />
          - Server Side Rendering(SSR) <br />
          - Tailwind CSS <br />
        </h1>
        <button className="mt-8">
          <Link
            to="/counter"
            className="py-3 px-5 rounded-xl font-mono font-3xl text-lime-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl"
          >
            To Counter Page
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HelloPage;
