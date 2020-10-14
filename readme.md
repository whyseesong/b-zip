### node version info
node version : 13.8.0
npm version : 6.14.4

### how to test
##### front-storybook
1. 디렉토리 이동
    ```bash
    $ cd b-zip-front
    ```
2. 패키지 설치
    ```bash
    $ npm i
    ```
3. 스토리북 실행
    ```bash
    $ npm run storybook
    ```
##### front-dev-server
1. 디렉토리 이동
    ```bash
    $ cd b-zip-front
    ```
2. 패키지 설치
    ```bash
    $ npm i
    ```
3. 환경변수 설정
    1. kakao map api key 발급
    2. 상위 디렉토리로 이동 (b-zip)
    3. .env파일 생성
    4. 해당 내용 추가 후 저장
        ```
        KAKAO_MAP_KEY=발급받은 카카오 키
        ```
4. 웹팩데브서버 실행
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
 