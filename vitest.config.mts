import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    // 1. 편리한 테스트 작성을 위한 전역 설정 (it, expect 등 import 생략 가능)
    globals: true,
    // 2. RTL의 확장 매처(toBeInTheDocument 등)를 자동으로 불러오는 설정
    setupFiles: "./vitest.setup.ts",
    // Playwright 테스트 파일은 Vitest가 읽지 않도록 제외
    exclude: [...configDefaults.exclude, "tests/**"],
  },
});
