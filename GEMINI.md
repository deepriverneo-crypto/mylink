# Gemini Project Context: my-link

이 파일은 `my-link` 프로젝트의 구조와 개발 환경에 대한 지침을 제공합니다.

## 프로젝트 개요
`my-link`는 개인 프로필 또는 링크 모음 서비스를 목적으로 하는 프로젝트로 추정됩니다. 현재 루트 디렉토리 아래에 `my-profile`이라는 핵심 Next.js 애플리케이션이 포함되어 있습니다.

## 기술 스택 (my-profile)
- **Framework:** Next.js 16.2.3 (App Router 사용)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS v4 (with PostCSS)
- **Language:** TypeScript
- **Linting:** ESLint 9

## 주요 디렉토리 구조
- `/my-profile`: 실제 웹 애플리케이션 소스 코드가 포함된 메인 디렉토리
  - `/app`: Next.js App Router 기반의 페이지 및 레이아웃 (`page.tsx`, `layout.tsx`, `globals.css`)
  - `/public`: 이미지 및 정적 자산
  - `package.json`: 의존성 및 스크립트 정의
  - `tsconfig.json`: TypeScript 설정
  - `eslint.config.mjs`: ESLint 설정

## 실행 및 개발 명령
모든 명령은 `my-profile` 디렉토리 내에서 실행해야 합니다.

- **개발 서버 실행:** `npm run dev`
- **프로젝트 빌드:** `npm run build`
- **프로덕션 서버 시작:** `npm run start`
- **린트 체크:** `npm run lint`

## 개발 규칙 및 주의사항
1. **Next.js 버전 주의:** `AGENTS.md`에 명시된 바와 같이, 이 프로젝트에서 사용 중인 Next.js 버전은 기존과 다른 브레이킹 체인지(Breaking Changes)를 포함하고 있을 수 있습니다. 학습된 데이터와 다를 수 있으므로 API 사용 시 주의가 필요합니다.
2. **스타일링:** Tailwind CSS v4를 사용하고 있으며, 전역 스타일은 `my-profile/app/globals.css`에서 관리합니다.
3. **컴포넌트 구조:** React Server Components를 기본으로 하며, 클라이언트 사이드 로직이 필요한 경우에만 `"use client"` 지시어를 사용합니다.
4. **Instruction Context:** `CLAUDE.md` 및 `AGENTS.md` 파일의 지침을 우선적으로 준수하십시오.
