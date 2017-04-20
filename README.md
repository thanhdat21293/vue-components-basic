# Demo các cách khác nhau nối lên server để render

## Hướng dẫn chạy thử

Reload whole page mỗi lần lựa chọn select box
```bash
node reload_server
```

jQuery post AJAX mỗi lần lựa chọn select box
```bash
node jquery_server
```

Vue sử dụng Mixin. Cách này cô Linh viết chưa thấy ổn lắm
```bash
node vue_server
```

## Sử dụng Vue.js và Axios
1. Cài vue.js plugin trong WebStorm hoặc PyCharm
2. Tạo file *.vue trong thư mục views
3. Chú ý file layout.vue chưa link đến vue và axios script file

Vue kết với Axios demo căn bản. Chú ý code theo ví dụ này chạy không được vì axios không include được
https://egghead.io/lessons/vue-make-a-request-to-an-api-with-axios-in-vue
```bash
node basic_vue_axios
```

Vue + Axios để chọn loại đồ vật phù hơn
```bash
node vue_axios
```

## Code đã tối ưu

1. model/thing.js: code cũ quá rối rắm, xem code đã sửa model/things.js

2. view/jQuery_client.html: $.ajax thay bằng $.post

## Đội 1: Reload whole page
1. Nguyễn Thị Nhan: leader
2. Đào Mạnh Minh: vice leader
3. Phạm Hoàng Nguyên: coder
4. Nguyễn Xuân Quang: test director

## Đội 2: jQuery
1. Phan Tiến Tùng: leader
2. Phạm Trí Hiếu: vice leader
3. Lê Phương Tú: coder

## Đội 3: Vue.js
1. Mai Thành Thịnh: leader
2. Nguyễn Thành Đạt: vice leader
3. Ngô Thuỳ Linh: coder
