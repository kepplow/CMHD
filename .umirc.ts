import { defineConfig } from '@umijs/max';
import { routes } from './src/constants';
import UnoCSS from 'unocss/webpack'
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: false,
  routes,
  npmClient: 'npm',
  analyze: {
    analyzerMode: 'static',
  },
  codeSplitting: {
    jsStrategy: 'depPerChunk',
  },
  ignoreMomentLocale: true,
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ['src/**/*.tsx']
  },
});

