### node version info
node version : 13.8.0
npm version : 6.14.4

### how to test
##### front
패키지 설치
```bash
$ npm i
```
스토리북 실행
```bash
$ npm run storybook
```
웹팩데브서버 실행
```bash
$ npm run start:dev
```
##### server
추가예정

---
###### note
* lodash는 다음에 테스트파일 작성 후 바꾸는식으로 해보면 좋을듯?

* webpack.config dev prod로 쪼갤때 할 것:
 - devtool: 'inline-source-map' (source tree mapping)
 - uglify, terser 비교해서 고르기
 - asset resolve setting (dist)
 