/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ExpensesIndexImport } from './routes/expenses.index'
import { Route as ComponentUnderlinedTextInputImport } from './routes/component/underlined-text-input'
import { Route as ComponentToasterImport } from './routes/component/toaster'
import { Route as ComponentTextInputImport } from './routes/component/text-input'
import { Route as ComponentTextAreaImport } from './routes/component/text-area'
import { Route as ComponentSubPageHeaderImport } from './routes/component/sub-page-header'
import { Route as ComponentSelectMonthDrawerImport } from './routes/component/select-month-drawer'
import { Route as ComponentInputCategoryTagsImport } from './routes/component/input-category-tags'
import { Route as ComponentIconTestImport } from './routes/component/icon-test'
import { Route as ComponentCategoryTagsImport } from './routes/component/category-tags'
import { Route as ComponentCalendarDrawerImport } from './routes/component/calendar-drawer'
import { Route as ComponentButtonsTestImport } from './routes/component/buttons-test'
import { Route as CategoriesUidImport } from './routes/categories.$uid'
import { Route as ExpensesNewIndexImport } from './routes/expenses.new.index'
import { Route as ExpensesNewCategoriesIndexImport } from './routes/expenses.new.categories.index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ExpensesIndexRoute = ExpensesIndexImport.update({
  id: '/expenses/',
  path: '/expenses/',
  getParentRoute: () => rootRoute,
} as any)

const ComponentUnderlinedTextInputRoute =
  ComponentUnderlinedTextInputImport.update({
    id: '/component/underlined-text-input',
    path: '/component/underlined-text-input',
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

const ComponentSubPageHeaderRoute = ComponentSubPageHeaderImport.update({
  id: '/component/sub-page-header',
  path: '/component/sub-page-header',
  getParentRoute: () => rootRoute,
} as any)

const ComponentSelectMonthDrawerRoute = ComponentSelectMonthDrawerImport.update(
  {
    id: '/component/select-month-drawer',
    path: '/component/select-month-drawer',
    getParentRoute: () => rootRoute,
  } as any,
)

const ComponentInputCategoryTagsRoute = ComponentInputCategoryTagsImport.update(
  {
    id: '/component/input-category-tags',
    path: '/component/input-category-tags',
    getParentRoute: () => rootRoute,
  } as any,
)

const ComponentIconTestRoute = ComponentIconTestImport.update({
  id: '/component/icon-test',
  path: '/component/icon-test',
  getParentRoute: () => rootRoute,
} as any)

const ComponentCategoryTagsRoute = ComponentCategoryTagsImport.update({
  id: '/component/category-tags',
  path: '/component/category-tags',
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

const CategoriesUidRoute = CategoriesUidImport.update({
  id: '/categories/$uid',
  path: '/categories/$uid',
  getParentRoute: () => rootRoute,
} as any)

const ExpensesNewIndexRoute = ExpensesNewIndexImport.update({
  id: '/expenses/new/',
  path: '/expenses/new/',
  getParentRoute: () => rootRoute,
} as any)

const ExpensesNewCategoriesIndexRoute = ExpensesNewCategoriesIndexImport.update(
  {
    id: '/expenses/new/categories/',
    path: '/expenses/new/categories/',
    getParentRoute: () => rootRoute,
  } as any,
)

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
    '/categories/$uid': {
      id: '/categories/$uid'
      path: '/categories/$uid'
      fullPath: '/categories/$uid'
      preLoaderRoute: typeof CategoriesUidImport
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
    '/component/category-tags': {
      id: '/component/category-tags'
      path: '/component/category-tags'
      fullPath: '/component/category-tags'
      preLoaderRoute: typeof ComponentCategoryTagsImport
      parentRoute: typeof rootRoute
    }
    '/component/icon-test': {
      id: '/component/icon-test'
      path: '/component/icon-test'
      fullPath: '/component/icon-test'
      preLoaderRoute: typeof ComponentIconTestImport
      parentRoute: typeof rootRoute
    }
    '/component/input-category-tags': {
      id: '/component/input-category-tags'
      path: '/component/input-category-tags'
      fullPath: '/component/input-category-tags'
      preLoaderRoute: typeof ComponentInputCategoryTagsImport
      parentRoute: typeof rootRoute
    }
    '/component/select-month-drawer': {
      id: '/component/select-month-drawer'
      path: '/component/select-month-drawer'
      fullPath: '/component/select-month-drawer'
      preLoaderRoute: typeof ComponentSelectMonthDrawerImport
      parentRoute: typeof rootRoute
    }
    '/component/sub-page-header': {
      id: '/component/sub-page-header'
      path: '/component/sub-page-header'
      fullPath: '/component/sub-page-header'
      preLoaderRoute: typeof ComponentSubPageHeaderImport
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
    '/component/underlined-text-input': {
      id: '/component/underlined-text-input'
      path: '/component/underlined-text-input'
      fullPath: '/component/underlined-text-input'
      preLoaderRoute: typeof ComponentUnderlinedTextInputImport
      parentRoute: typeof rootRoute
    }
    '/expenses/': {
      id: '/expenses/'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof ExpensesIndexImport
      parentRoute: typeof rootRoute
    }
    '/expenses/new/': {
      id: '/expenses/new/'
      path: '/expenses/new'
      fullPath: '/expenses/new'
      preLoaderRoute: typeof ExpensesNewIndexImport
      parentRoute: typeof rootRoute
    }
    '/expenses/new/categories/': {
      id: '/expenses/new/categories/'
      path: '/expenses/new/categories'
      fullPath: '/expenses/new/categories'
      preLoaderRoute: typeof ExpensesNewCategoriesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/categories/$uid': typeof CategoriesUidRoute
  '/component/buttons-test': typeof ComponentButtonsTestRoute
  '/component/calendar-drawer': typeof ComponentCalendarDrawerRoute
  '/component/category-tags': typeof ComponentCategoryTagsRoute
  '/component/icon-test': typeof ComponentIconTestRoute
  '/component/input-category-tags': typeof ComponentInputCategoryTagsRoute
  '/component/select-month-drawer': typeof ComponentSelectMonthDrawerRoute
  '/component/sub-page-header': typeof ComponentSubPageHeaderRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
  '/component/toaster': typeof ComponentToasterRoute
  '/component/underlined-text-input': typeof ComponentUnderlinedTextInputRoute
  '/expenses': typeof ExpensesIndexRoute
  '/expenses/new': typeof ExpensesNewIndexRoute
  '/expenses/new/categories': typeof ExpensesNewCategoriesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/categories/$uid': typeof CategoriesUidRoute
  '/component/buttons-test': typeof ComponentButtonsTestRoute
  '/component/calendar-drawer': typeof ComponentCalendarDrawerRoute
  '/component/category-tags': typeof ComponentCategoryTagsRoute
  '/component/icon-test': typeof ComponentIconTestRoute
  '/component/input-category-tags': typeof ComponentInputCategoryTagsRoute
  '/component/select-month-drawer': typeof ComponentSelectMonthDrawerRoute
  '/component/sub-page-header': typeof ComponentSubPageHeaderRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
  '/component/toaster': typeof ComponentToasterRoute
  '/component/underlined-text-input': typeof ComponentUnderlinedTextInputRoute
  '/expenses': typeof ExpensesIndexRoute
  '/expenses/new': typeof ExpensesNewIndexRoute
  '/expenses/new/categories': typeof ExpensesNewCategoriesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/categories/$uid': typeof CategoriesUidRoute
  '/component/buttons-test': typeof ComponentButtonsTestRoute
  '/component/calendar-drawer': typeof ComponentCalendarDrawerRoute
  '/component/category-tags': typeof ComponentCategoryTagsRoute
  '/component/icon-test': typeof ComponentIconTestRoute
  '/component/input-category-tags': typeof ComponentInputCategoryTagsRoute
  '/component/select-month-drawer': typeof ComponentSelectMonthDrawerRoute
  '/component/sub-page-header': typeof ComponentSubPageHeaderRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
  '/component/toaster': typeof ComponentToasterRoute
  '/component/underlined-text-input': typeof ComponentUnderlinedTextInputRoute
  '/expenses/': typeof ExpensesIndexRoute
  '/expenses/new/': typeof ExpensesNewIndexRoute
  '/expenses/new/categories/': typeof ExpensesNewCategoriesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/categories/$uid'
    | '/component/buttons-test'
    | '/component/calendar-drawer'
    | '/component/category-tags'
    | '/component/icon-test'
    | '/component/input-category-tags'
    | '/component/select-month-drawer'
    | '/component/sub-page-header'
    | '/component/text-area'
    | '/component/text-input'
    | '/component/toaster'
    | '/component/underlined-text-input'
    | '/expenses'
    | '/expenses/new'
    | '/expenses/new/categories'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/categories/$uid'
    | '/component/buttons-test'
    | '/component/calendar-drawer'
    | '/component/category-tags'
    | '/component/icon-test'
    | '/component/input-category-tags'
    | '/component/select-month-drawer'
    | '/component/sub-page-header'
    | '/component/text-area'
    | '/component/text-input'
    | '/component/toaster'
    | '/component/underlined-text-input'
    | '/expenses'
    | '/expenses/new'
    | '/expenses/new/categories'
  id:
    | '__root__'
    | '/'
    | '/categories/$uid'
    | '/component/buttons-test'
    | '/component/calendar-drawer'
    | '/component/category-tags'
    | '/component/icon-test'
    | '/component/input-category-tags'
    | '/component/select-month-drawer'
    | '/component/sub-page-header'
    | '/component/text-area'
    | '/component/text-input'
    | '/component/toaster'
    | '/component/underlined-text-input'
    | '/expenses/'
    | '/expenses/new/'
    | '/expenses/new/categories/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CategoriesUidRoute: typeof CategoriesUidRoute
  ComponentButtonsTestRoute: typeof ComponentButtonsTestRoute
  ComponentCalendarDrawerRoute: typeof ComponentCalendarDrawerRoute
  ComponentCategoryTagsRoute: typeof ComponentCategoryTagsRoute
  ComponentIconTestRoute: typeof ComponentIconTestRoute
  ComponentInputCategoryTagsRoute: typeof ComponentInputCategoryTagsRoute
  ComponentSelectMonthDrawerRoute: typeof ComponentSelectMonthDrawerRoute
  ComponentSubPageHeaderRoute: typeof ComponentSubPageHeaderRoute
  ComponentTextAreaRoute: typeof ComponentTextAreaRoute
  ComponentTextInputRoute: typeof ComponentTextInputRoute
  ComponentToasterRoute: typeof ComponentToasterRoute
  ComponentUnderlinedTextInputRoute: typeof ComponentUnderlinedTextInputRoute
  ExpensesIndexRoute: typeof ExpensesIndexRoute
  ExpensesNewIndexRoute: typeof ExpensesNewIndexRoute
  ExpensesNewCategoriesIndexRoute: typeof ExpensesNewCategoriesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CategoriesUidRoute: CategoriesUidRoute,
  ComponentButtonsTestRoute: ComponentButtonsTestRoute,
  ComponentCalendarDrawerRoute: ComponentCalendarDrawerRoute,
  ComponentCategoryTagsRoute: ComponentCategoryTagsRoute,
  ComponentIconTestRoute: ComponentIconTestRoute,
  ComponentInputCategoryTagsRoute: ComponentInputCategoryTagsRoute,
  ComponentSelectMonthDrawerRoute: ComponentSelectMonthDrawerRoute,
  ComponentSubPageHeaderRoute: ComponentSubPageHeaderRoute,
  ComponentTextAreaRoute: ComponentTextAreaRoute,
  ComponentTextInputRoute: ComponentTextInputRoute,
  ComponentToasterRoute: ComponentToasterRoute,
  ComponentUnderlinedTextInputRoute: ComponentUnderlinedTextInputRoute,
  ExpensesIndexRoute: ExpensesIndexRoute,
  ExpensesNewIndexRoute: ExpensesNewIndexRoute,
  ExpensesNewCategoriesIndexRoute: ExpensesNewCategoriesIndexRoute,
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
        "/categories/$uid",
        "/component/buttons-test",
        "/component/calendar-drawer",
        "/component/category-tags",
        "/component/icon-test",
        "/component/input-category-tags",
        "/component/select-month-drawer",
        "/component/sub-page-header",
        "/component/text-area",
        "/component/text-input",
        "/component/toaster",
        "/component/underlined-text-input",
        "/expenses/",
        "/expenses/new/",
        "/expenses/new/categories/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/categories/$uid": {
      "filePath": "categories.$uid.tsx"
    },
    "/component/buttons-test": {
      "filePath": "component/buttons-test.tsx"
    },
    "/component/calendar-drawer": {
      "filePath": "component/calendar-drawer.tsx"
    },
    "/component/category-tags": {
      "filePath": "component/category-tags.tsx"
    },
    "/component/icon-test": {
      "filePath": "component/icon-test.tsx"
    },
    "/component/input-category-tags": {
      "filePath": "component/input-category-tags.tsx"
    },
    "/component/select-month-drawer": {
      "filePath": "component/select-month-drawer.tsx"
    },
    "/component/sub-page-header": {
      "filePath": "component/sub-page-header.tsx"
    },
    "/component/text-area": {
      "filePath": "component/text-area.tsx"
    },
    "/component/text-input": {
      "filePath": "component/text-input.tsx"
    },
    "/component/toaster": {
      "filePath": "component/toaster.tsx"
    },
    "/component/underlined-text-input": {
      "filePath": "component/underlined-text-input.tsx"
    },
    "/expenses/": {
      "filePath": "expenses.index.tsx"
    },
    "/expenses/new/": {
      "filePath": "expenses.new.index.tsx"
    },
    "/expenses/new/categories/": {
      "filePath": "expenses.new.categories.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
