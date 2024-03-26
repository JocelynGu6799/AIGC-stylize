/*
 * @Author: JocelynGu6799 2787912196@qq.com
 * @Date: 2024-03-22 15:21:08
 * @LastEditors: gjy1025 2787912196@qq.com
 * @LastEditTime: 2024-03-24 18:11:21
 * @FilePath: \AIGC-vue3-ts\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
import { VantResolver } from '@vant/auto-import-resolver';
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue','vue-router'],
      // resolvers: [ElementPlusResolver(),VantResolver()]
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src'],
     // 组件的有效文件扩展名。
      extensions: ["vue"],
      // 搜索子目录
      deep: true,
      // ui库解析器，也可以自定义
      // resolvers: [VantResolver()],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
      // resolvers: [ElementPlusResolver(),VantResolver()],
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
