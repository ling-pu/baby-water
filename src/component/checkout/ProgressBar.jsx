// 線段
export function StepLine({ color = "#B5B9BE", className }) {
  return (
    <svg
      className={className}
      width="50"
      height="3"
      viewBox="0 0 49 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1.21484"
        x2="49"
        y2="1.21484"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="6 6"
      />
    </svg>
  );
}

// 圓形
export function StepCircle({ fill = "white", className, number }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 41"
      fill="none"
    >
      <circle cx="20" cy="20.2148" r="20" fill={fill} />

      {/* 數字 */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="white"
        pointerEvents="none"
      >
        {number}
      </text>
    </svg>
  );
}

const steps = ["結帳", "填寫收件資料", "完成訂單", "匯款通知"];

export default function ProgressBar({ currentStep = 1 }) {
  // 顏色定義
  const finishedColor = "#7C91AF"; // 代表已完成
  const activeColor = "#f99ebf"; // 代表當前
  const defaultColor = "#B5B9BE"; // 灰色，未到的步驟

  return (
    <div id="progress-indicator" style={{ display: "flex", alignItems: "center" }}>
      {steps.map((step, idx) => {
        const stepNumber = idx + 1;
        // 判斷線與圓顏色
        const isFinished = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        // 左線：第一步不顯示
        const leftLineColor =
          idx === 0
            ? "transparent"
            : isFinished || isActive
              ? finishedColor
              : defaultColor;

        // 右線：最後一步不顯示
        const rightLineColor =
          idx === steps.length - 1
            ? "transparent"
            : stepNumber < currentStep
              ? finishedColor
              : defaultColor;

        // 圓圈顏色：當前用 activeColor，已完成用 finishedColor，未到用 defaultColor
        const circleFill = isActive
          ? activeColor
          : isFinished
            ? finishedColor
            : "white";

        return (
          <div
            key={idx}
            className={`step${stepNumber}`}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div className="step-pic" style={{ display: "flex", alignItems: "center" }}>
              <StepLine className="left-line" color={leftLineColor} />
              <StepCircle className="circle" fill={circleFill} number={stepNumber} />
              <StepLine className="right-line" color={rightLineColor} />
            </div>
            <div className="step-txt">
              <span
                style={{
                  color: isActive
                    ? activeColor
                    : isFinished
                      ? finishedColor
                      : defaultColor,
                  fontWeight: isActive ? "700" : "400",
                }}
              >
                {step}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
