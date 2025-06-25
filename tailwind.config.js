/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./blog-detail.html",
    "./blog.html",
    "./contact.html",
    "./project-detail.html",
    "./projects.html",
    "./js/*.js" // 如果JavaScript文件中也使用了Tailwind类，需要添加此行
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}