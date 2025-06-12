import { useNavigate } from "react-router-dom";

export const picks = [
  {
    id: "classic-tshirt-plain",
    imgSrc: "/images/tops/1/1.JPG",
    pics: [
      "/images/tops/1/1.JPG",
      "/images/tops/1/2.JPG",
      "/images/tops/1/3.JPG",
    ],
    styles: ["白色款", "黑色款", "棕色款"],
    sizes: ["S", "M"],
    title: "經典舒適T恤",
    price: "520",
    category: "Tops",
    endtime: "2025-06-30T23:59:59",
    description: "這件真的非常吸睛且又有氣質⋯和氣勢！\n三款顏色都柔和卻很有存在感🌙𓈒 𓂂𓏸\n\n▫️漸層拼色＋透膚感的網紗材質\n▫️剪裁是微貼身帶腰身的版型，但彈性很好，穿起來不勒\n▫️袖口還有指洞設計，小細節超加分！\n（ 米 × 焦糖棕、藍 × 橘、粉 × 灰 ）",
    sizeNote: `尺寸 SIZE（FREE SIZE）：
胸寬 44｜肩寬 35.5｜衣長 59｜袖長 71

注意！此商品為一般預購，約14-21天（不含假日）抵台。
—
＊照片皆有些微色差，請以實體商品為準`,
  },
  {
    id: "classic-tshirt-doodle",
    imgSrc: "/images/tops/2/1.jpg",
    pics: [
      "/images/tops/2/1.jpg",
      "/images/tops/2/2.jpg",
      "/images/tops/2/3.jpg",
      "/images/tops/2/4.jpg",
    ],
    styles: ["灰色款", "紅色款", "藍色款", "綠色款"],
    sizes: ["F"],
    title: "舒適塗鴉風T恤",
    price: "520",
    category: "Tops",
    endtime: "2025-06-30T23:59:59",
    description: "這件真的非常吸睛且又有氣質⋯和氣勢！\n三款顏色都柔和卻很有存在感🌙𓈒 𓂂𓏸\n\n▫️漸層拼色＋透膚感的網紗材質\n▫️剪裁是微貼身帶腰身的版型，但彈性很好，穿起來不勒\n▫️袖口還有指洞設計，小細節超加分！\n（ 米 × 焦糖棕、藍 × 橘、粉 × 灰 ）",
    sizeNote: `尺寸 SIZE（FREE SIZE）：
胸寬 44｜肩寬 35.5｜衣長 59｜袖長 71

注意！此商品為一般預購，約14-21天（不含假日）抵台。
—
＊照片皆有些微色差，請以實體商品為準`,
  },
  {
    id: "classic-shirt-gradiant",
    imgSrc: "/images/tops/3/1.jpg",
    pics: [
      "/images/tops/3/1.jpg",
      "/images/tops/3/2.jpg",
      "/images/tops/3/3.jpg",
    ],
    styles: ["米 × 焦糖棕", "藍 × 橘", "粉 × 灰"],
    sizes: ["F"],
    title: "絕美漸層上衣",
    price: "1190",
    category: "Tops",
    endtime: "2025-06-30T23:59:59",
    description: "這件真的非常吸睛且又有氣質⋯和氣勢！\n三款顏色都柔和卻很有存在感🌙𓈒 𓂂𓏸\n\n▫️漸層拼色＋透膚感的網紗材質\n▫️剪裁是微貼身帶腰身的版型，但彈性很好，穿起來不勒\n▫️袖口還有指洞設計，小細節超加分！\n（ 米 × 焦糖棕、藍 × 橘、粉 × 灰 ）",
    sizeNote: `尺寸 SIZE（FREE SIZE）：
胸寬 44｜肩寬 35.5｜衣長 59｜袖長 71

注意！此商品為一般預購，約14-21天（不含假日）抵台。
—
＊照片皆有些微色差，請以實體商品為準`,
  },
  {
    id: "classic-long-skirt",
    imgSrc: "/images/bottoms/1/1.jpg",
    pics: [
      "/images/bottoms/1/1.jpg",
      "/images/bottoms/1/2.jpg",
    ],
    styles: ["白色款", "黑色款",],
    sizes: ["F"],
    title: "超好看皺褶長裙",
    price: "690",
    category: "Bottoms",
    endtime: "2025-06-30T23:59:59",
    description: "這件真的非常吸睛且又有氣質⋯和氣勢！\n三款顏色都柔和卻很有存在感🌙𓈒 𓂂𓏸\n\n▫️漸層拼色＋透膚感的網紗材質\n▫️剪裁是微貼身帶腰身的版型，但彈性很好，穿起來不勒\n▫️袖口還有指洞設計，小細節超加分！\n（ 米 × 焦糖棕、藍 × 橘、粉 × 灰 ）",
    sizeNote: `尺寸 SIZE（FREE SIZE）：
胸寬 44｜肩寬 35.5｜衣長 59｜袖長 71

注意！此商品為一般預購，約14-21天（不含假日）抵台。
—
＊照片皆有些微色差，請以實體商品為準`,
  },
  {
    id: "classic-suit",
    imgSrc: "/images/bottoms/2/1.jpg",
    pics: [
      "/images/bottoms/2/1.jpg",
      "/images/bottoms/2/2.jpg",
    ],
    styles: ["黑色款", "藍色款",],
    sizes: ["F"],
    title: "經典單寧連身長褲",
    price: "990",
    category: "Bottoms",
    endtime: "2025-06-30T23:59:59",
    description: "這件真的非常吸睛且又有氣質⋯和氣勢！\n三款顏色都柔和卻很有存在感🌙𓈒 𓂂𓏸\n\n▫️漸層拼色＋透膚感的網紗材質\n▫️剪裁是微貼身帶腰身的版型，但彈性很好，穿起來不勒\n▫️袖口還有指洞設計，小細節超加分！\n（ 米 × 焦糖棕、藍 × 橘、粉 × 灰 ）",
    sizeNote: `尺寸 SIZE（FREE SIZE）：
胸寬 44｜肩寬 35.5｜衣長 59｜袖長 71

注意！此商品為一般預購，約14-21天（不含假日）抵台。
—
＊照片皆有些微色差，請以實體商品為準`,
  },
];


export const world = [
  {
    id: "summer-vest-beige",
    imgSrc: "/images/world/1/1.JPG",
    pics: [
      "/images/world/1/1.JPG",
      "/images/world/1/2.JPG",
      "/images/world/1/3.JPG",
    ],
    styles: ["米色款", "棕色款", "粉色款"],
    sizes: ["F"],
    title: "夏日必備小背心",
    price: "520",
    category: "Tops",
    endtime: "2025-06-30T23:59:59",
    description: "這件真的非常吸睛且又有氣質⋯和氣勢！\n三款顏色都柔和卻很有存在感🌙𓈒 𓂂𓏸\n\n▫️漸層拼色＋透膚感的網紗材質\n▫️剪裁是微貼身帶腰身的版型，但彈性很好，穿起來不勒\n▫️袖口還有指洞設計，小細節超加分！\n（ 米 × 焦糖棕、藍 × 橘、粉 × 灰 ）",
    sizeNote: `尺寸 SIZE（FREE SIZE）：
胸寬 44｜肩寬 35.5｜衣長 59｜袖長 71

注意！此商品為一般預購，約14-21天（不含假日）抵台。
—
＊照片皆有些微色差，請以實體商品為準`,
  },
  {
    id: "summer-vest-beige2",
    imgSrc: "/images/world/2/1.JPG",
    pics: [
      "/images/world/2/01.JPG",
      "/images/world/2/2.JPG",
      "/images/world/2/3.JPG",
    ],
    styles: ["芭蕾粉", "薄荷綠", "藍莓色"],
    sizes: ["F"],
    title: "澎澎南瓜細肩背心",
    price: "899",
    category: "Tops",
    endtime: "2025-06-10T23:59:59",
  },
  {
    id: "summer-vest-beige3",
    imgSrc: "/images/world/3/1.JPG",
    pics: [
      "/images/world/3/1.JPG",
      "/images/world/3/2.JPG",
      "/images/world/3/3.JPG",
    ],
    styles: ["白色款", "黑色款", "棕色款"],
    sizes: ["F"],
    title: "Lily Rose 系列泳裝",
    price: "1490",
    category: "Swimwear",
    endtime: "2025-06-10T23:59:59",
  },
  {
    id: "summer-vest-classic",
    imgSrc: "/images/vests/1/1.JPG",
    pics: [
      "/images/vests/1/1.JPG",
      "/images/vests/1/2.JPG",
      "/images/vests/1/3.JPG",
    ],
    styles: ["白色款", "棕色款", "紅色款"],
    sizes: ["F"],
    title: "細肩Bra T",
    price: "630",
    category: "Tops",
    endtime: "2025-06-10T23:59:59",
  },
];

