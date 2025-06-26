// import type { Preset, SourceCodeTransformer } from "unocss";
// import process from "node:process";
// import { presetUni } from "@uni-helper/unocss-preset-uni";
// import {
//   defineConfig,
//   presetAttributify,
//   presetIcons,
//   transformerDirectives,
//   transformerVariantGroup,
// } from "unocss";
// import {
//   presetApplet,
//   presetRemRpx,
//   transformerAttributify,
// } from "unocss-applet";

// const presets: Preset[] = [];
// const transformers: SourceCodeTransformer[] = [];

// const isApplet = process.env?.UNI_PLATFORM?.startsWith("mp-") ?? false;
// if (isApplet) {
//   /**
//    * UnoCSS Applet
//    * @see https://github.com/unocss-applet/unocss-applet
//    */
//   presets.push(presetApplet());
//   presets.push(presetRemRpx()); // 如果需要使用 rem 转 rpx 单位，需要启用此插件
//   transformers.push(
//     transformerAttributify({
//       ignoreAttributes: ["block"],
//       deleteAttributes: false,
//     })
//   );
// } else {
//   presets.push(presetApplet());
//   presets.push(presetAttributify());
//   presets.push(presetRemRpx({ mode: "rpx2rem" }));
// }
// export default defineConfig({
//   envMode: "build",
//   theme: {
//     screens: {
//       sm: "640px",
//       // => @media (min-width: 640px) { ... }
//       md: "768px",
//       // => @media (min-width: 768px) { ... }
//       lg: "1024px",
//       // => @media (min-width: 1024px) { ... }
//       xl: "1280px",
//       // => @media (min-width: 1280px) { ... }
//       "2xl": "1536px",
//     },
//     preflightRoot: ["page,::before,::after"],
//   },
//   presets: [
//     presetIcons({
//       scale: 1.2,
//       warn: true,
//       extraProperties: {
//         display: "inline-block",
//         "vertical-align": "middle",
//       },
//     }),
//     ...presets,
//   ],
//   rules: [
//     // 动态规则 grid-area-label => grid-area: label;
//     [/^grid-area-(.+)$/, ([, label]: any) => ({ "grid-area": label })],
//     // 宽度规则
//     [
//       /^color-rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
//       ([, r, g, b]) => {
//         return {
//           color: `rgb(${r}, ${g}, ${b})`,
//         };
//       },
//     ],
//   ],
//   transformers: [transformerDirectives(), transformerVariantGroup()],
// });
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  rules: [["m-1", { margin: "1px" }]],
});
