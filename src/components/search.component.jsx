import React from "react";

export const SearchComponent = ({ className }) => {
  return (
    <div
      className={`w-3/5 mx-auto bg-slate-200 rounded-lg border border-slate-400 ${className}  lg:w-1/2 xl:w-5/12`}
    >
      <form action="" className="flex">
        <input
          type="text"
          className="my-6 h-10 m-auto w-5/6 rounded p-2 font-mono"
          placeholder="Search item..."
        />
      </form>
    </div>
  );
};
