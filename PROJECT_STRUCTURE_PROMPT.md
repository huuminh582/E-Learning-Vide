# Hướng Dẫn Tạo Dự Án Theo Cấu Trúc

## 📌 Thông Tin Dự Án
- **Framework**: Next.js 14.2.13 (App Router)
- **Ngôn Ngữ**: TypeScript
- **State Management**: Redux Toolkit + Redux Thunk
- **UI Library**: Ant Design v5 + Tailwind CSS
- **Styling**: SCSS/SASS + Styled Components
- **HTTP Client**: Axios
- **Form Validation**: Formik + Yup
- **Translation**: Custom i18n (en.ts, vi.ts)

---

## 🗂️ CẤU TRÚC THƯ MỤC CHI TIẾT

### **1. Thư Mục Root - Cấu Hình Dự Án**
```
/
├── package.json          # Dependencies: react, next, redux, antd, axios, tailwind...
├── tsconfig.json         # TypeScript config với path aliases (@components, @apis, @store, v.v.)
├── next.config.js        # Next.js config: env vars, image domains, transpile packages antd
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS (dùng cho Tailwind)
├── next.sitemap.config.js # Sitemap generation config
├── Dockerfile            # Docker image cho production (đã có trong project)
└── version.yaml          # Versioning file
```

---

### **2. Thư Mục `src/app/` - Next.js App Router**
Đây là nơi định tuyến (routing) và render trang.

```
src/app/
├── layout.tsx           # Root Layout - Wrapper cho toàn bộ ứng dụng
│   ├── Khai báo metadata: title, icons, viewport
│   ├── Import: AntdRegistry (Ant Design CSS-in-JS)
│   ├── Import: Providers (Redux Store + Theme + Alert)
│   └── Render: <AntdRegistry><Providers>{children}</Providers></AntdRegistry>
│
├── page.tsx             # Trang chủ (Route: /)
│   ├── Import: MainLayout từ @layouts/
│   ├── Khai báo metadata
│   └── Render: <PageLayout><ContenChu></PageLayout>
│
├── robots.ts            # SEO - Robots.txt configuration
│
└── cources/             # Thư mục route con (Route: /courses)
    └── page.tsx         # Trang danh sách khóa học
        ├── Import: MainLayout
        ├── Render: <PageLayout><CouseList></PageLayout>
        └── Có thể mở rộng: /courses/[id]/page.tsx cho chi tiết
```

**Nguyên tắc:** Mỗi folder có `page.tsx` là một route. Folder `[id]` là dynamic route.

---

### **3. Thư Mục `src/components/` - React Components**
Chứa tất cả components tái sử dụng.

```
src/components/
│
├── AntdRegistry.tsx     # Ant Design CSS-in-JS provider
│   └── Sử dụng: @ant-design/cssinjs để server-side render CSS
│
├── Providers.tsx        # Client component - Kết hợp tất cả providers
│   ├── AntdRegistry: Ant Design theme config
│   ├── Redux Provider: store từ @store/
│   ├── ConfigProvider (Ant Design): Custom theme (màu sắc, kích thước, v.v.)
│   ├── ModalController: Quản lý modal state
│   └── Alert (react-s-alert): Notification system
│
├── condition/           # Components điều kiện
│   ├── If.tsx          # Component If-then-else logic
│   ├── index.tsx       # Export
│   └── WrapComponent.tsx # Wrapper component
│
└── shared/             # UI components dùng chung
    ├── index.tsx       # Export components
    ├── buttons/
    │   └── BaseButton.tsx # Nút bấm tái sử dụng
    ├── icons/          # Icon SVG components
    │   ├── ArrowLeftCircle.tsx
    │   ├── ArrowRightCircle.tsx
    │   ├── IconFacebook.tsx
    │   ├── IconTiktok.tsx
    │   ├── IconYoutube.tsx
    │   ├── LoadingIcon.tsx
    │   ├── TrashCycle.tsx
    │   └── index.ts    # Export tất cả icons
    ├── images/         # Image components
    │   ├── AppImage.tsx      # Hình ảnh chính
    │   ├── BlurImage.tsx     # Blur placeholder
    │   └── index.tsx
    ├── input/          # Input form components
    │   ├── InputText.tsx
    │   └── index.ts
    └── modal/          # Modal/Drawer components
        ├── DrawerBottom.tsx
        ├── ModalController.tsx
        └── index.ts
```

**Quy tắc naming:** PascalCase cho components, camelCase cho hàm utilities.

---

### **4. Thư Mục `src/layouts/` - Layout Structures**
Layout chung cho các trang.

```
src/layouts/
├── MainLayout.tsx       # Layout chính (Header + Content + Footer)
│   ├── Flex container: min-h-screen, bg-slate-50
│   ├── Render: <MainHeader />
│   ├── Render: <main>{children}</main>
│   └── Render: <MainFooter />
│
├── MainHeader.tsx       # Header component
│   ├── Logo, Navigation menu
│   ├── Có thể sử dụng: Layout, Menu từ Ant Design
│   └── Styling: Tailwind classes
│
└── MainFooter.tsx       # Footer component
    ├── Copyright info
    ├── Social links
    └── Footer menu
```

---

### **5. Thư Mục `src/store/` - Redux State Management**

```
src/store/
│
├── index.ts            # Redux Store configuration
│   ├── configureStore từ @reduxjs/toolkit
│   ├── Root reducer
│   ├── Middleware: redux-thunk, redux-logger
│   └── Export: store, AppDispatch, AppThunk types
│
├── reducer.ts          # Root reducer - Kết hợp tất cả slices
│   └── combineReducers({
│       locate: locateReducer,
│       alert: alertReducer,
│       modal: modalReducer,
│       // Thêm slices mới ở đây
│   })
│
├── actions.ts          # Global actions (tùy chọn)
│
├── alert/              # Alert/Notification state
│   ├── alert.slice.ts  # Redux Toolkit slice definition
│   │   ├── state: { type, message, duration }
│   │   ├── reducers: showAlert, hideAlert
│   │   └── export: alertReducer, actions
│   └── alert.action.ts # Async thunks / thêm logic phức tạp
│
├── location/           # Location/Navigation state
│   ├── location.slice.ts
│   │   ├── state: { current, history }
│   │   ├── reducers: updateLocation
│   │   └── export: locateReducer, actions
│   └── location.action.ts
│
└── modal/              # Modal state
    ├── modal.slice.ts
    │   ├── state: { isOpen, type, data }
    │   ├── reducers: openModal, closeModal
    │   └── export: modalReducer, actions
    └── modal.action.ts
```

**Cách dùng Redux:**
1. Define slice trong `[feature].slice.ts`
2. Export reducer vào `reducer.ts`
3. Components dùng `useSelector` để lấy state
4. Components dùng `useDispatch` để kích hoạt actions

---

### **6. Thư Mục `src/apis/` - API Calls & Configuration**

```
src/apis/
│
├── index.ts            # Export tất cả APIs
│   └── export { default as exampleApi } from './example'
│
├── example.ts          # Ví dụ API calls
│   ├── Sử dụng: axios instance từ constant/axios-config
│   ├── Hàm: fetchUsers, createUser, deleteUser, v.v.
│   └── Return: Promise với response type từ @type/response
│
└── constant/           # Các constant cho API
    ├── index.ts        # Export
    ├── path.ts         # API endpoints
    │   └── export const API_PATHS = { user: '/users', posts: '/posts' }
    ├── axios-config/   # Axios instance & interceptors
    │   ├── index.ts
    │   └── Cấu hình: baseURL, headers, timeout, interceptors
    ├── axios-server/   # Server-side axios (nếu cần)
    │   └── index.ts
    └── version/        # API version management
        └── index.ts
```

**Quy tắc:**
- Tất cả API calls dùng axios instance từ `constant/axios-config`
- Endpoints định nghĩa trong `constant/path.ts`
- Response types định nghĩa trong `src/types/response.ts`

---

### **7. Thư Mục `src/hooks/` - Custom React Hooks**

```
src/hooks/
├── index.ts           # Export hooks
│   └── export { useDebounce, useIsMobile }
├── useDebounce.ts     # Debounce logic
│   └── Hook để delay việc gọi function (dùng cho search input)
└── useIsMobile.ts     # Mobile/Responsive detection
    └── Hook để detect responsive breakpoints
```

**Quy tắc:** Tên hooks bắt đầu bằng `use`

---

### **8. Thư Mục `src/types/` - TypeScript Type Definitions**

```
src/types/
├── lang.ts            # Language/i18n type definitions
│   └── type Language = 'en' | 'vi'
├── locations.ts       # Location types
│   └── interface Location { city, district, ward }
├── response.ts        # API response wrapper type
│   └── interface ApiResponse<T> { code, data, message }
└── index.ts          # Export types
```

**Quy tắc:** Export tất cả types từ `index.ts` để dễ import.

---

### **9. Thư Mục `src/validates/` - Form Validation**

```
src/validates/
├── index.ts           # Export validators
├── register.ts        # Validation schema cho registration form
│   └── Sử dụng: Yup schema hoặc Zod
└── [feature].ts       # Validation schema cho các forms khác
```

**Ví dụ:**
```typescript
// register.ts
import * as yup from 'yup'
export const registerSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})
```

---

### **10. Thư Mục `src/utils/` - Utility Functions**

```
src/utils/
├── index.ts           # Export utilities
├── constants.ts       # Global constants
│   └── APP_NAME, DEFAULT_PAGE_SIZE, v.v.
└── [helper].ts        # Helper functions
    └── formatDate, parseJSON, slugify, v.v.
```

---

### **11. Thư Mục `src/resources/` - Static Resources**

```
src/resources/
├── css/               # Global styles
│   └── main.scss      # SCSS global styles
│
└── trans/            # Internationalization (i18n)
    ├── en.ts         # English translations
    │   └── export const en = { hello: 'Hello', goodbye: 'Goodbye' }
    ├── vi.ts         # Vietnamese translations
    │   └── export const vi = { hello: 'Xin chào', goodbye: 'Tạm biệt' }
    └── index.ts      # Export i18n object
```

---

### **12. Thư Mục `public/` - Static Files**

```
public/
├── sitemap.xml        # Generated sitemap
├── sitemap-0.xml      # Sitemap chunks
├── icons/             # Icon files
│   └── logo_main.svg, logo_main.png
└── img/              # Image files
    └── Hình ảnh tĩnh của dự án
```

---

## 🔄 LUỒNG DỮ LIỆU & MỐI LIÊN KẾT

### **Luồng 1: Page Load & Initialization**
```
1. next start/dev
2. src/app/layout.tsx (Root Layout load)
3. AntdRegistry (Setup Ant Design CSS-in-JS)
4. Providers (Setup Redux + Theme + Alert)
5. store/index.ts (Create Redux Store)
6. store/reducer.ts (Combine all slices - alert, location, modal)
7. Page component renders (src/app/page.tsx hoặc /routes/*)
```

### **Luồng 2: Component Render & Layout**
```
Page Component (src/app/*/page.tsx)
    └── MainLayout (từ src/layouts/)
        ├── MainHeader
        ├── <main>{children}</main>
        │   └── Shared Components (buttons, icons, images, inputs)
        │   └── Content Component dùng Redux state
        │       ├── useSelector để lấy state
        │       └── useDispatch để thay đổi state
        └── MainFooter
```

### **Luồng 3: Form Submission & API Call**
```
User Input trong Component
    └── Formik (từ package.json dependency)
        └── Validation (từ src/validates/)
            └── Dispatch Redux Action (src/store/*/action.ts)
                └── Redux Thunk (Async logic)
                    └── API Call (src/apis/*)
                        └── Axios Instance (src/apis/constant/axios-config)
                            └── Backend Server
                                └── Response
                                    └── Redux Reducer (src/store/*/slice.ts)
                                        └── Update Store
                                            └── Component rerender (useSelector)
                                                └── Show Success/Error Alert
```

### **Luồng 4: State Management**
```
Component (UI Layer)
    ↓ useDispatch(action)
    ↓
Action Creator (src/store/*/action.ts)
    ↓ mayAsyncLogic + API call
    ↓
Reducer (src/store/*/slice.ts)
    ↓ Update state
    ↓
Redux Store (src/store/index.ts, rootReducer)
    ↓ state changes
    ↓
Component (re-render via useSelector)
```

---

## 📝 PATH ALIASES (tsconfig.json)

Để import dễ dàng, sử dụng path aliases:

```typescript
// Thay vì:
import { Button } from '../../../components/shared/buttons'

// Dùng:
import { Button } from '@components/shared/buttons'
```

**Defined aliases:**
```json
{
  "@components/*": ["./src/components/*"],
  "@layouts/*": ["./src/layouts/*"],
  "@store/*": ["./src/store/*"],
  "@apis/*": ["./src/apis/*"],
  "@hooks/*": ["./src/hooks/*"],
  "@utils/*": ["./src/utils/*"],
  "@type/*": ["./src/types/*"],
  "@validates/*": ["./src/validates/*"],
  "@resources/*": ["./src/resources/*"],
  "@actions/*": ["./src/store/actions/*"],
  "@slices/*": ["./src/store/slices/*"],
  "@services/*": ["./src/services/*"],
  "@features/*": ["./src/features/*"],
  "@hocs/*": ["./src/hocs/*"]
}
```

---

## 📦 DEPENDENCIES CHÍNH

```json
{
  "dependencies": {
    "next": "^14.2.13",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.1.6",
    
    // State Management
    "@reduxjs/toolkit": "^1.6.2",
    "react-redux": "^7.2.4",
    "redux": "^4.1.0",
    "redux-thunk": "^2.3.0",
    "redux-logger": "^3.0.6",
    
    // UI Components & Styling
    "antd": "^5.21.1",
    "@ant-design/cssinjs": "^1.21.1",
    "tailwindcss": "^3.x",
    "styled-components": "^6.1.12",
    "sass": "^1.37.0",
    
    // Form & Validation
    "formik": "^2.4.1",
    "yup": "^1.2.0",
    
    // HTTP Client
    "axios": "^0.21.4",
    
    // Utilities
    "lodash": "^4.17.21",
    "moment": "^2.29.1",
    "react-scroll": "^1.8.9",
    "react-cookies": "^0.1.1",
    "react-s-alert": "^1.4.1"
  }
}
```

---

## 🎯 NAMING CONVENTIONS

| Item | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `UserProfile.tsx`, `BaseButton.tsx` |
| Files | PascalCase (components), camelCase (utils) | `MainHeader.tsx`, `useDebounce.ts` |
| Folders | kebab-case hoặc camelCase | `shared-ui`, `components/` |
| Functions | camelCase | `fetchUsers()`, `formatDate()` |
| Constants | UPPER_SNAKE_CASE | `API_TIMEOUT = 5000` |
| Types/Interfaces | PascalCase, I prefix optional | `User`, `IUserResponse` |
| Redux Slices | camelCase | `user.slice.ts`, `alert.slice.ts` |

---

## 🚀 SCRIPTS

```bash
npm run dev              # Development server (port 4000)
npm run build            # Production build
npm run start            # Start production server (port 4002)
npm run lint             # ESLint check
npm run format           # Prettier format
npm run postbuild        # Generate sitemap
npm run build:dev        # Build dev config
npm run start:test       # Start test server (port 4001)
```

---

## ✅ HOW TO USE THIS PROMPT FOR NEW PROJECT

**Bước 1:** Copy prompt này  
**Bước 2:** Đưa cho AI và nói: *"Tạo dự án Next.js mới theo cấu trúc thư mục trong hướng dẫn này"*  
**Bước 3:** AI sẽ tạo các file và thư mục theo đúng cấu trúc

**Hoặc upload file này và nói:**  
*"Dùng file PROJECT_STRUCTURE_PROMPT.md này để tạo dự án mới"*

---

