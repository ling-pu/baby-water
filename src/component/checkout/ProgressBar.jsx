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
        font-weight="600"
        fill="black"
        fontWeight="bold"
        pointerEvents="none"
      >
        {number}
      </text>
      </svg>
    );
  }
  

  const steps = [
    "結帳",
    "填寫收件資料",
    "訂單確認",
    "完成訂單",
  ];
  
  export default function ProgressBar() {
    return (
        // 進度區
      <div id="progress-indicator">
        {steps.map((step, idx) => (
            // 單個步驟區
          <div key={idx} className={`step${idx + 1}`}>
            {/* 上半視覺區 */}
            <div className="step-pic">
              {/* 左線：第一步用透明線 */}
              <StepLine
                className="left-line"
                color={idx === 0 ? "transparent" : "#B5B9BE"}
              />
              <StepCircle className="circle" number={idx + 1} />
              {/* 右線：最後一步用透明線 */}
              <StepLine
                className="right-line"
                color={idx === steps.length - 1 ? "transparent" : "#B5B9BE"}
              />
            </div>
            {/* 下半文字說明區 */}
            <div className="step-txt">
              <span>{step}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  