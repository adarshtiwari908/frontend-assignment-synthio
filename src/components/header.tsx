import * as React from "react";
import logoUrl from "../assets/logo.svg";
import iconSquares from "../assets/icon-squares-four.svg";
import iconWand from "../assets/icon-magic-wand.svg";
import iconNotebook from "../assets/icon-notebook.svg";
import iconChat from "../assets/icon-chat-circle.svg";

// Component
const DesktopHeader: React.FC = () => {
  return (
    <header
      className="w-full sticky top-0 z-20 backdrop-blur-[6px]"
      style={{
        background: "transparent",
      }}
    >
      <div className="mx-auto w-full max-w-[1376px] h-[76px] flex items-center justify-between px-4 sm:px-6 lg:px-8 py-[12px]">
        {/* Left: Logo */}
        <div className="flex items-center gap-[4.35px] h-[22.57px]">
          <img
            src={logoUrl}
            alt="Synthio Labs"
            className="w-[22.97px] h-[22.57px]"
          />
          <div className="h-[14.67px] flex items-center">
            <span className="text-[14px] leading-[18.21px] font-bold text-white">
              Synthio Labs
            </span>
          </div>
        </div>

        {/* Center: Segmented control */}
        <div className="hidden md:block">
          <div
            className="h-[52px] flex items-center gap-2 p-2 rounded-full border border-white/20 shadow-[inset_0_0_12px_rgba(214,220,231,0.24)] backdrop-blur-[20px]"
            style={{ background: "rgba(248,248,248,0.5)" }}
          >
            <button className="flex items-center gap-2 rounded-full px-4 py-4 h-full shadow-[0_4px_24px_rgba(0,0,0,0.05)] bg-white">
              <img src={iconSquares} alt="Dashboard" className="w-4 h-4" />
              <span
                className="text-[14px] leading-[20px] font-medium"
                style={{ color: "#013BDB" }}
              >
                Dashboard
              </span>
            </button>
            <button className="flex items-center gap-2 rounded-full px-4 py-1 h-full">
              <img src={iconWand} alt="Insights" className="w-4 h-4" />
              <span
                className="text-[14px] leading-[20px]"
                style={{ color: "#53596C" }}
              >
                Insights
              </span>
            </button>
            <button className="flex items-center gap-2 rounded-full px-4 py-1 h-full">
              <img src={iconNotebook} alt="Transcript" className="w-4 h-4" />
              <span
                className="text-[14px] leading-[20px]"
                style={{ color: "#53596C" }}
              >
                Transcript
              </span>
            </button>
            <button className="flex items-center gap-2 rounded-full px-4 py-1 h-full">
              <img src={iconChat} alt="Chat" className="w-4 h-4" />
              <span
                className="text-[14px] leading-[20px]"
                style={{ color: "#53596C" }}
              >
                Chat
              </span>
            </button>
          </div>
        </div>
        <div className="w-[142.08px] h-[32px]" />
      </div>

      <div className="md:hidden px-4 pb-3">
        <div
          className="flex items-center gap-2 overflow-x-auto no-scrollbar h-[48px] p-1 rounded-full border border-white/20 backdrop-blur-[12px]"
          style={{ background: "rgba(248,248,248,0.5)" }}
        >
          <button className="flex items-center gap-2 rounded-full px-4 h-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.05)] bg-white">
            <img src={iconSquares} alt="Dashboard" className="w-4 h-4" />
            <span
              className="text-[14px] leading-[20px] font-medium"
              style={{ color: "#013BDB" }}
            >
              Dashboard
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-full px-3 h-[40px]">
            <img src={iconWand} alt="Insights" className="w-4 h-4" />
            <span
              className="text-[14px] leading-[20px]"
              style={{ color: "#53596C" }}
            >
              Insights
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-full px-3 h-[40px]">
            <img src={iconNotebook} alt="Transcript" className="w-4 h-4" />
            <span
              className="text-[14px] leading-[20px]"
              style={{ color: "#53596C" }}
            >
              Transcript
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-full px-3 h-[40px]">
            <img src={iconChat} alt="Chat" className="w-4 h-4" />
            <span
              className="text-[14px] leading-[20px]"
              style={{ color: "#53596C" }}
            >
              Chat
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
