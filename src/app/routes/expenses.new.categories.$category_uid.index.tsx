import { createFileRoute } from '@tanstack/react-router';

import CategoryRoute from '@/features/category/ui/routes/CategoryRoute';

export const Route = createFileRoute('/expenses/new/categories/$category_uid/')(
  {
    component: CategoryRoute,
  }
);
