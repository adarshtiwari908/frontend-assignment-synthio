import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Target } from "lucide-react";

const AgendaGoals: React.FC = () => {
  const agendaItems = [
    "1. Welcome and introductions",
    "2. Clinical impact & guideline adoption: interpreting 4-year iDFS signals and who qualifies",
    "3. Patient selection & risk stratification: <40 vs ≥40 benefits, nodal status, Oncotype context",
    "4. Future directions: expansion to stage I high-genomic-risk"
  ];

  const goals = [
    {
      title: "Clinical impact",
      description:
        "Align on how a 4-year iDFS HR ≈0.67 in younger patients should change practice and guideline adoption",
    },
    {
      title: "Patient selection",
      description:
        "Define which pre-menopausal stage II/III HR+/HER2- patients (especially <40 yrs; Δ iDFS ≈6.3%) merit 3 years of CDK4/6 therapy with ovarian suppression",
    },
  ];

  return (
    <div
      className="
        w-full flex flex-col sm:flex-row justify-center items-start
        gap-[24px]
        px-4 sm:px-6 md:px-8
        max-w-[1376px] mx-auto
        sm:h-auto lg:h-[232px]
      "
    >
      {/* Agenda Section */}
      <Card
        className="
          bg-white/80 backdrop-blur-sm border border-gray-200 
          rounded-[16px] shadow-sm 
          w-full sm:w-[508px] lg:w-[508px] 
          h-auto lg:h-[232px]
          flex-shrink-0
        "
      >
        <CardContent className="p-[16px] flex flex-col gap-[12px] h-full">
          <div className="flex items-center gap-2">
            <PenTool className="w-6 h-6 text-black" />
            <h2 className="text-lg font-medium text-gray-900">Agenda</h2>
          </div>

          {/* Agenda List */}
          <div className="flex-1 space-y-[4px]">
            {agendaItems.map((item, index) => {
              const [num, ...rest] = item.split(". ");
              return (
                <div
                  key={index}
                  className="flex items-start gap-[8px] text-sm text-gray-600 leading-relaxed"
                >
                  <span className="w-[18px] text-right text-gray-600 flex-shrink-0">
                    {num}.
                  </span>
                  <p className="flex-1">{rest.join(". ")}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Goals Section */}
      <Card
        className="
          bg-white/80 backdrop-blur-sm border border-gray-200 
          rounded-[16px] shadow-sm 
          w-full sm:w-[508px] lg:w-[508px] 
          h-auto lg:h-[232px]
          flex-shrink-0
        "
      >
        <CardContent
          className="
            p-[16px] flex flex-col gap-[12px]
            h-full overflow-y-auto
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
          "
        >
          <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-black" />
            <h2 className="text-lg font-medium text-gray-900">Goals</h2>
          </div>

          <div className="flex-1 space-y-[12px]">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1 h-1 bg-gray-800 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xs font-medium text-gray-900 uppercase tracking-wider mb-1">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgendaGoals;
