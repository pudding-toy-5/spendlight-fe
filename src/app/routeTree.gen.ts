/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ExpensesImport } from './routes/expenses'
import { Route as ComponentTestImport } from './routes/component-test'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ComponentTextInputImport } from './routes/component/text-input'
import { Route as ComponentTextAreaImport } from './routes/component/text-area'

// Create/Update Routes

const ExpensesRoute = ExpensesImport.update({
  id: '/expenses',
  path: '/expenses',
  getParentRoute: () => rootRoute,
} as any)

const ComponentTestRoute = ComponentTestImport.update({
  id: '/component-test',
  path: '/component-test',
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
    '/component-test': {
      id: '/component-test'
      path: '/component-test'
      fullPath: '/component-test'
      preLoaderRoute: typeof ComponentTestImport
      parentRoute: typeof rootRoute
    }
    '/expenses': {
      id: '/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof ExpensesImport
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
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/component-test': typeof ComponentTestRoute
  '/expenses': typeof ExpensesRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/component-test': typeof ComponentTestRoute
  '/expenses': typeof ExpensesRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/component-test': typeof ComponentTestRoute
  '/expenses': typeof ExpensesRoute
  '/component/text-area': typeof ComponentTextAreaRoute
  '/component/text-input': typeof ComponentTextInputRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/component-test'
    | '/expenses'
    | '/component/text-area'
    | '/component/text-input'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/component-test'
    | '/expenses'
    | '/component/text-area'
    | '/component/text-input'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/component-test'
    | '/expenses'
    | '/component/text-area'
    | '/component/text-input'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ComponentTestRoute: typeof ComponentTestRoute
  ExpensesRoute: typeof ExpensesRoute
  ComponentTextAreaRoute: typeof ComponentTextAreaRoute
  ComponentTextInputRoute: typeof ComponentTextInputRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ComponentTestRoute: ComponentTestRoute,
  ExpensesRoute: ExpensesRoute,
  ComponentTextAreaRoute: ComponentTextAreaRoute,
  ComponentTextInputRoute: ComponentTextInputRoute,
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
        "/component-test",
        "/expenses",
        "/component/text-area",
        "/component/text-input"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/component-test": {
      "filePath": "component-test.tsx"
    },
    "/expenses": {
      "filePath": "expenses.tsx"
    },
    "/component/text-area": {
      "filePath": "component/text-area.tsx"
    },
    "/component/text-input": {
      "filePath": "component/text-input.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
