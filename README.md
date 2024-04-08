# mustit-ux

## Node Version

```
12.16.2
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### SASS Compiles for development

```
npm run sass
```

### SASS Compiles and minifies for production

```
npm run sass:prod
```

### Deploy Process

- default branch: **main**
- jenkins: https://jenkins-prod.mustit.xyz/view/mustit-service/job/mustit-ux

### Directory Structure

- **src**
  - assets: 정적 리소스 관리 (http://ux.mustit.io/ 내부에서만 사용할 시 사용)
  - views: 각 라우트별 최초 호출 될 페이지 단위 컴포넌트
  - components: 각 페이지 내 사용 될 컴포넌트 (페이지 별 폴더 정의 및 분리)
  - router: 라우트 정의
  - styles: SASS(SCSS) 소스 관리
  - layouts: 공통 레이아웃 정의 (**ex.** header, footer,...)
- **public**
  - output/css: SCSS Compile Source (**ex.** http://ux.mustit.io/output/css/service_mobile.css)

### Use & Deploy Guide of Style Resource

**in development**

style-resource-loader 기반 자동 build (vue.config.js)

```js
options({
  patterns: [
    path.resolve(__dirname, './src/styles/service_mobile.scss')
    // ...file추가 필요 시, 배열에 추가.
  ]
})
```

버전 업데이트 체크 후 퍼블리싱 시작 (package.json)

```js
{
  "name": "mustit-ux",
  "version": "1.0.0", // 버전 업데이트 체크
  "private": true,
  "scripts": {
  ...
}
```

**deploy development**

- 프로젝트 완료 후 dev <- feature branch merge
- jenkins build: https://jenkins-prod.mustit.xyz/view/mustit-service/job/mustit-ux
- build시 매개 변수 dev 선택
- S3업로드 상태 확인 - https://mustit-ux.s3.ap-northeast-2.amazonaws.com/ux/service/development/mobile/${version}/service_mobile.css
- 개발 전달 (jira comment 통해 버전 공유)
- **(TECH)** 버전 업데이트 후 개발 시작

**deploy production**

- QA 완료 후 main <- feature branch merge
- jenkins build: https://jenkins-prod.mustit.xyz/view/mustit-service/job/mustit-ux
- build시 매개 변수 main 선택
- S3업로드 상태 확인 - https://mustit-ux.s3.ap-northeast-2.amazonaws.com/ux/service/production/mobile/${version}/service_mobile.css
- 개발 전달 (jira comment 통해 버전 공유)
- **(TECH)** 버전 업데이트 최종 확인 후 배포

**local test**

```sh
npm run sass
```

- /public/output/css/ 확인

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
Vue.js Guide https://v2.vuejs.org/
