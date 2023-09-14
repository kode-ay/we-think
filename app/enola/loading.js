export default function Loading() {
  return (
    <div>
      <div className="nav flex justify-between px-20 py-6">
        <div
          className="logo w-24 h-8 bg-slate-400 rounded-lg animate-pulse"
          style={{
            animationDuration: "1s",
          }}
        ></div>
        <ul className="flex items-center gap-3">
          <li
            className="w-16 h-6 bg-slate-400 rounded-lg animate-pulse"
            style={{
              animationDuration: "1s",
            }}
          ></li>
          <li
            className="w-16 h-6 bg-slate-400 rounded-lg animate-pulse"
            style={{
              animationDuration: "1s",
            }}
          ></li>
          <li
            className="w-16 h-6 bg-slate-400 rounded-lg animate-pulse"
            style={{
              animationDuration: "1s",
            }}
          ></li>
          <li
            className="w-16 h-6 bg-slate-400 rounded-lg animate-pulse"
            style={{
              animationDuration: "1s",
            }}
          ></li>
        </ul>
        <div
          className="btn w-24 h-8 bg-slate-400 rounded-lg animate-pulse"
          style={{
            animationDuration: "1s",
          }}
        ></div>
      </div>
      <div className="main gap-20 px-20 py-6 pt-32 flex justify-between items-start flex-wrap max-h-screen">
        <div className="text flex flex-col gap-9 items-start justify-between">
          <div className="head flex flex-col gap-2">
            <div
              className="w-96 h-14 bg-slate-400 rounded-lg animate-pulse"
              style={{
                animationDuration: "1s",
              }}
            ></div>
            <div
              className="w-52 h-14 bg-slate-400 rounded-lg animate-pulse"
              style={{
                animationDuration: "1s",
              }}
            ></div>
          </div>
          <div className="para flex flex-col gap-1">
            <div
              className="w-60 h-6 bg-slate-400 rounded-lg animate-pulse"
              style={{
                animationDuration: "1s",
              }}
            ></div>
            <div
              className="w-60 h-6 bg-slate-400 rounded-lg animate-pulse"
              style={{
                animationDuration: "1s",
              }}
            ></div>
            <div
              className="w-60 h-6 bg-slate-400 rounded-lg animate-pulse"
              style={{
                animationDuration: "1s",
              }}
            ></div>
          </div>
          <div
            className="btn w-24 h-8 bg-slate-400 rounded-lg animate-pulse"
            style={{
              animationDuration: "1s",
            }}
          ></div>
        </div>
        <div
          className="img w-72 h-96 flex-1 bg-slate-400 rounded-lg animate-pulse"
          style={{
            animationDuration: "1s",
          }}
        ></div>
      </div>
    </div>
  );
}
