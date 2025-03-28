/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ExpensesImport } from './routes/expenses'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ComponentToasterImport } from './routes/component/toaster'
import { Route as ComponentTextInputImport } from './routes/component/text-input'
import { Route as ComponentTextAreaImport } from './routes/component/text-area'
import { Route as ComponentSelectMonthDrawerImport } from './routes/component/select-month-drawer'
import { Route as ComponentPageHeaderImport } from './routes/component/page-header'
import { Route as ComponentIconTestImport } from './routes/component/icon-test'
import { Route as ComponentCalendarDrawerImport } from './routes/component/calendar-drawer'
import { Route as ComponentButtonsTestImport } from './routes/component/buttons-test'

// Create/Update Routes

const ExpensesRoute = ExpensesImport.update({
  id: '/expenses',
  path: '/expenses',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ComponentToasterRoute = ComponentToasterImport.update({
  id: '/component/toaster',
  path: '/component/toaster',
  getParentRoute: () => rootRoute,
} as any)

const ComponentTextInputRoute = ComponentTextInputImport.update({
  id: '/component/text-input',
  path: '/component/text-input',
  getParentRoute: () => rootRoute,
} as any)

const ComponentTextAreaRoute = ComponentTextAreaImport.update({
  id: '/component/text-area',
  path: '/component/text-area',
  getParentRoute: () => rootRoute,
} as any)

const ComponentSelectMonthDrawerRoute = ComponentSelectMonthDrawerImport.update(
  {
    id: '/component/select-month-drawer',
    path: '/component/select-month-drawer',
    getParentRoute: () => rootRoute,
  } as any,
)

const ComponentPageHeaderRoute = ComponentPageHeaderImport.update({
  id: '/component/page-header',
  path: '/component/page-header',
  getParentRoute: () => rootRoute,
} as any)

const ComponentIconTestRoute = ComponentIconTestImport.update({
  id: '/component/icon-test',
  path: '/component/icon-test',
  getParentRoute: () => rootRoute,
} as any)

const ComponentCalendarDrawerRoute = ComponentCalendarDrawerImport.update({
  id: '/component/calendar-drawer',
  path: '/component/calendar-drawer',
  getParentRoute: () => rootRoute,
} as any)

const ComponentButtonsTestRoute = ComponentButtonsTestImport.update({
  id: '/component/buttons-test',
  path: '/component/buttons-test',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/expenses': {
      id: '/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof ExpensesImport
      parentRoute: typeof rootRoute
    }
    '/component/buttons-test': {
      id: '/component/buttons-test'
      path: '/component/buttons-test'
      fullPath: '/component/buttons-test'
      preLoaderRoute: typeof ComponentButtonsTestImport
      parentRoute: typeof rootRoute
    }
    '/component/calendar-drawer': {
      id: '/component/calendar-drawer'
      path: '/component/calendar-drawer'
      fullPath: '/component/calendar-drawer'
      preLoaderRoute: typeof ComponentCalendarDrawerImport
      parentRoute: typeof rootRoute
    }
    '/component/icon-test': {
      id: '/component/icon-test'
      path: '/component/icon-test'
      fullPath: '/component/icon-test'
      preLoaderRoute: typeof ComponentIconTestImport
      parentRoute: typeof rootRoute
    }
    '/component/page-header': {
      id: '/component/page-header'
      path: '/component/page-header'
      fullPath: '/component/page-header'
      preLoaderRoute: typeof ComponentPageHeaderImport
      parentRoute: typeof rootRoute
    }
    '/component/select-month-drawer': {
      id: '/component/select-month-drawer'
      path: '/component/select-month-drawer'
      fullPath: '/component/select-month-drawer'
      preLoaderRoute: typeof ComponentSelectMonthDrawerImport
      parentRoute: typeof rootRoute
    }
    '/component/text-area': {
      id: '/component/text-area'
      path: '/component/text-area'
      fullPath: '/component/text-area'
      preLoaderRoute: typeof ComponentTextAreaImport
      parentRoute: typeof rootRoute
    }
    '/component/text-input': {
      id: '/component/text-input'
      path: '/component/text-input'
      fullPath: '/component/text-input'
      preLoaderRoute: typeof ComponentTextInputImport
      parentRoute: typeof rootRoute
    }
    '/component/toaster': {
      id: '/component/toaster'
      path: '/component/toaster'
      fullPath: '/component/toaster'
      preLoaderRoute: typeof ComponentToasterImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/expenses': typeof ExpensesRoute
  '/component/buttons-test': typeof ComponentButtonsTestRoute
  '/component/calendar-drawer': typeof ComponentCalendarDrawerRoute
  '/component/icon-test': typeof ComponentIconTestRoute
  '/component/page-header': typeof ComponentPageHeaderRoute
  '/component/select-month-drawer': typeof ComponentSelectMonthDrawerRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
  '/component/toaster': typeof ComponentToasterRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/expenses': typeof ExpensesRoute
  '/component/buttons-test': typeof ComponentButtonsTestRoute
  '/component/calendar-drawer': typeof ComponentCalendarDrawerRoute
  '/component/icon-test': typeof ComponentIconTestRoute
  '/component/page-header': typeof ComponentPageHeaderRoute
  '/component/select-month-drawer': typeof ComponentSelectMonthDrawerRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
  '/component/toaster': typeof ComponentToasterRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/expenses': typeof ExpensesRoute
  '/component/buttons-test': typeof ComponentButtonsTestRoute
  '/component/calendar-drawer': typeof ComponentCalendarDrawerRoute
  '/component/icon-test': typeof ComponentIconTestRoute
  '/component/page-header': typeof ComponentPageHeaderRoute
  '/component/select-month-drawer': typeof ComponentSelectMonthDrawerRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
  '/component/toaster': typeof ComponentToasterRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/expenses'
    | '/component/buttons-test'
    | '/component/calendar-drawer'
    | '/component/icon-test'
    | '/component/page-header'
    | '/component/select-month-drawer'
    | '/component/text-area'
    | '/component/text-input'
    | '/component/toaster'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/expenses'
    | '/component/buttons-test'
    | '/component/calendar-drawer'
    | '/component/icon-test'
    | '/component/page-header'
    | '/component/select-month-drawer'
    | '/component/text-area'
    | '/component/text-input'
    | '/component/toaster'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/expenses'
    | '/component/buttons-test'
    | '/component/calendar-drawer'
    | '/component/icon-test'
    | '/component/page-header'
    | '/component/select-month-drawer'
    | '/component/text-area'
    | '/component/text-input'
    | '/component/toaster'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ExpensesRoute: typeof ExpensesRoute
  ComponentButtonsTestRoute: typeof ComponentButtonsTestRoute
  ComponentCalendarDrawerRoute: typeof ComponentCalendarDrawerRoute
  ComponentIconTestRoute: typeof ComponentIconTestRoute
  ComponentPageHeaderRoute: typeof ComponentPageHeaderRoute
  ComponentSelectMonthDrawerRoute: typeof ComponentSelectMonthDrawerRoute
  ComponentTextAreaRoute: typeof ComponentTextAreaRoute
  ComponentTextInputRoute: typeof ComponentTextInputRoute
  ComponentToasterRoute: typeof ComponentToasterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ExpensesRoute: ExpensesRoute,
  ComponentButtonsTestRoute: ComponentButtonsTestRoute,
  ComponentCalendarDrawerRoute: ComponentCalendarDrawerRoute,
  ComponentIconTestRoute: ComponentIconTestRoute,
  ComponentPageHeaderRoute: ComponentPageHeaderRoute,
  ComponentSelectMonthDrawerRoute: ComponentSelectMonthDrawerRoute,
  ComponentTextAreaRoute: ComponentTextAreaRoute,
  ComponentTextInputRoute: ComponentTextInputRoute,
  ComponentToasterRoute: ComponentToasterRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/expenses",
        "/component/buttons-test",
        "/component/calendar-drawer",
        "/component/icon-test",
        "/component/page-header",
        "/component/select-month-drawer",
        "/component/text-area",
        "/component/text-input",
        "/component/toaster"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/expenses": {
      "filePath": "expenses.tsx"
    },
    "/component/buttons-test": {
      "filePath": "component/buttons-test.tsx"
    },
    "/component/calendar-drawer": {
      "filePath": "component/calendar-drawer.tsx"
    },
    "/component/icon-test": {
      "filePath": "component/icon-test.tsx"
    },
    "/component/page-header": {
      "filePath": "component/page-header.tsx"
    },
    "/component/select-month-drawer": {
      "filePath": "component/select-month-drawer.tsx"
    },
    "/component/text-area": {
      "filePath": "component/text-area.tsx"
    },
    "/component/text-input": {
      "filePath": "component/text-input.tsx"
    },
    "/component/toaster": {
      "filePath": "component/toaster.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
