## 專案啟動(擇一)
1. npm run dev
2. Debug模式 在vscode按F5


## 學習途徑
1. restful API
2. mongodb, mongoose
3. node.js(express框架)
easy example
- https://expressjs.com/en/starter/hello-world.html
route
- https://expressjs.com/en/guide/routing.html
middleware
- https://expressjs.com/en/guide/writing-middleware.html
- https://expressjs.com/en/guide/using-middleware.html
errorHandler
- https://expressjs.com/en/guide/error-handling.html

4. JWT: https://www.npmjs.com/package/jsonwebtoken
5. swagger auto gen (https://www.npmjs.com/package/swagger-autogen)

## 專案架構
程式入口(擇一) 
1. swagger.js(server run起來會有swagger)
2. server.js(server run起來無swagger)

routes: API路由

controllers: 專門處理req, res

services: 專門處理API邏輯

models: 專門處理DB相關動作

middleware: 中間件(包含auth做jwt token驗證, errorHandler做API錯誤處理)

## API
swagger文件: run起來，瀏覽器拜訪http://127.0.0.1:3000/doc
### Auth
1.註冊 /v1/signUp
2.登入 /v1/login

### Book
這些API需要附上在登入後得到的JWT TOKEN在headers 
1.查詢書籍 query帶title做關鍵字查詢(可帶可不帶) GET /v1/book?title=學習Node.js
2.用id查詢書籍 GET /v1/book/:Id
3.新增書籍 POST /v1/book
3.更新某id書籍 PUT /v1/book/:Id
4.刪除某id書籍 DELETE /v1/book/:Id
