## 分页

- 点击 页码按钮 时 发送 `GET` 请求 (服务器渲染时) 携带参数 `page + 1`
- 服务器向数据库请求数据, 公式如下

- 当前页 (page)
- 数据总数 (count)
- 页面显示总数 (pageSize)
- 页码总数 (total)

- 公式:

  - 页码: `total = Math.ceil(count / pageSize)`
  - 每次请求数据库时所携带的数据 `limit = pageSize` `skip = (page - 1) * pageSize`

- 第一页/最后一页时 前进后退 按钮功能:
  - `当前页 +/- 1 === total / 0` 如果符合条件就隐藏 否则就显示

## mongodb

### 联级查询

- 定义时 使用 `ref` 等于 需要引用的表
- 查询时 使用 `populate` 参数为 定义时的 名称

### 格式化事件

- dateformat

## CSS

- div 多行显示 超出高度显示省略号 (不规范)
- ```css
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  ```
