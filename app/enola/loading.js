export default function Loading() {
  return (
    <div>
      <div className="nav flex justify-between px-20 py-6">
        <div className="logo w-24 h-8 bg-slate-400 rounded-lg"></div>
        <ul className="flex items-center gap-3">
          <li className="w-16 h-6 bg-slate-400 rounded-lg"></li>
          <li className="w-16 h-6 bg-slate-400 rounded-lg"></li>
          <li className="w-16 h-6 bg-slate-400 rounded-lg"></li>
          <li className="w-16 h-6 bg-slate-400 rounded-lg"></li>
        </ul>
        <div className="btn w-24 h-8 bg-slate-400 rounded-lg"></div>
      </div>
      <div className="main">
        <div className="text">
          <div className="head"></div>
          <div className="para"></div>
          <div className="btn"></div>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
}