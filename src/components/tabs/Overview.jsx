import React from "react";
import { useSelector } from "react-redux";
import StyleBox from "../StyleBox";
import RainbowBar from "../RainbowBar";
import Info from "../Info";

const Overview = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
  return (
    <StyleBox>
      <h2 className="text-2xl font-semibold">{strings.overview.performance}</h2>
      <div
        className="grid grid-cols-3 gap-7 items-center py-7"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        <div className="flex flex-col justify-center w-max">
          <p className="text-xs">Today's Low</p>
          <h2 className="text-sm font-semibold">46930.22</h2>
        </div>
        <RainbowBar min={46930.22} max={49343.83} />
        <div className="flex flex-col justify-end text-right">
          <p className="text-xs">Today's High</p>
          <h2 className="text-sm font-semibold">49343.83</h2>
        </div>
        <div className="flex flex-col justify-center w-max">
          <p className="text-xs">T52W Low</p>
          <h2 className="text-sm font-semibold">16930.22</h2>
        </div>
        <RainbowBar min={16930.22} max={49743.83} />
        <div className="flex flex-col justify-end text-right">
          <p className="text-xs">52W High</p>
          <h2 className="text-sm font-semibold">49743.83</h2>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-row items-center space-x-2">
          <h2 className="text-xl font-semibold text-slate-900">
            {strings.tabs.fundamentals}
          </h2>
          <Info />
        </div>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: "90px",
            paddingBottom: "20px",
          }}
        >
          {strings.fundamentals.table.map(
            ({ key, text, amount, rate, limit, title, date }) => {
              return (
                <div key={key} className="pt-1">
                  {text ? (
                    <div
                      className="flex flex-row justify-between py-3 pr-3"
                      style={{ fontSize: "13px" }}
                    >
                      <p className=" text-slate-500 font-medium">{text}</p>
                      <p className="font-medium">{amount}</p>
                    </div>
                  ) : (
                    <div className="flex flex-row justify-between py-1 pr-3">
                      <p className="text-xs text-slate-500 font-medium">
                        {title}
                      </p>
                      <div className="space-y-1">
                        <div className="flex flex-row items-center justify-end space-x-1">
                          <p className="text-xs font-medium">{`$${limit}`}</p>
                          <p
                            className="text-xs font-medium"
                            style={{ color: rate >= 0 ? "#11d556" : "#fb4141" }}
                          >{`${rate}%`}</p>
                        </div>
                        <p className="text-xs">{date}</p>
                      </div>
                    </div>
                  )}
                  <hr className="mt-1 border-t border-slate-300" />
                </div>
              );
            }
          )}
        </div>
      </div>
    </StyleBox>
  );
};

export default Overview;
