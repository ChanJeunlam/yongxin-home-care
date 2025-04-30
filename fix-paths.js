const fs = require("fs-extra")
const path = require("path")
const glob = require("glob")

// 仓库名称
const repoName = "yongxin-home-care"

// 输出目录
const outDir = path.join(__dirname, "out")

// 修复 HTML 文件中的路径
const htmlFiles = glob.sync(`${outDir}/**/*.html`)
htmlFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8")

  // 修复 _next 路径
  content = content.replace(/\/_next\//g, `/${repoName}/_next/`)

  // 修复根路径引用 (但不修改已经包含仓库名的路径)
  content = content.replace(/href="\//g, `href="/${repoName}/`)
  content = content.replace(/src="\//g, `src="/${repoName}/`)

  // 修复 JSON 数据中的路径
  content = content.replace(/"\/images\//g, `"/${repoName}/images/`)
  content = content.replace(/"\/assets\//g, `"/${repoName}/assets/`)

  // 避免重复修复已经修复的路径
  content = content.replace(new RegExp(`/${repoName}/${repoName}/`, "g"), `/${repoName}/`)

  fs.writeFileSync(file, content, "utf8")
  console.log(`Fixed paths in ${file}`)
})

// 修复 CSS 文件中的路径
const cssFiles = glob.sync(`${outDir}/_next/**/*.css`)
cssFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8")

  // 修复 url() 引用
  content = content.replace(/url\(\//g, `url(/${repoName}/`)

  // 避免重复修复已经修复的路径
  content = content.replace(new RegExp(`/${repoName}/${repoName}/`, "g"), `/${repoName}/`)

  fs.writeFileSync(file, content, "utf8")
  console.log(`Fixed paths in ${file}`)
})

// 修复 JS 文件中的路径
const jsFiles = glob.sync(`${outDir}/_next/**/*.js`)
jsFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8")

  // 修复路径引用 (谨慎修改，避免修改代码逻辑)
  content = content.replace(/"\/images\//g, `"/${repoName}/images/`)
  content = content.replace(/"\/assets\//g, `"/${repoName}/assets/`)

  // 避免重复修复已经修复的路径
  content = content.replace(new RegExp(`/${repoName}/${repoName}/`, "g"), `/${repoName}/`)

  fs.writeFileSync(file, content, "utf8")
  console.log(`Fixed paths in ${file}`)
})

console.log("All paths have been fixed for GitHub Pages deployment!")
