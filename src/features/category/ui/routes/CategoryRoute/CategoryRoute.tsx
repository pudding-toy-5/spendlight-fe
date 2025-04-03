import { useParams, useRouter } from '@tanstack/react-router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useCategoryByUid } from '@/features/category/api/useCategoryQuery';
import Layout from '@/shared/ui/layout/Layout';
import { cn } from '@/shared/ui/styles/utils';
import SubPageHeader from '@/shared/ui/SubPageHeader';
import UnderlinedTextInput from '@/shared/ui/UnderlinedTextInput';

const CategoryRoute: React.FC = () => {
  const router = useRouter();
  const { category_uid } = useParams({ strict: false });
  const uid = category_uid as string;

  const { category, error } = useCategoryByUid(uid);

  if (error) {
    // handle on category is undefined
    router.history.back();
  }

  const form = useForm<{ categoryName: string }>({
    defaultValues: { categoryName: '' },
  });

  const onSubmit = (values: { categoryName: string }) => {
    console.log(values);
  };

  return (
    <Layout>
      <SubPageHeader title='카테고리명 편집' close />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex-1 flex flex-col h-fit py-6 px-5 mb-auto'
        >
          <FormField
            control={form.control}
            name='categoryName'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <UnderlinedTextInput
                    value={field.value}
                    onChange={(newValue) => {
                      field.onChange(newValue);
                    }}
                    placeholder='카테고리명을 입력하세요.'
                    guideText='최대 20자 입력'
                    maxLength={20}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='flex flex-row w-full gap-2 mt-auto'>
            <Drawer>
              <DrawerTrigger
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'flex-1 rounded-full h-13 text-[15px] text-[#222] bg-[#efefef] hover:bg-[#efefef]/80'
                )}
              >
                삭제
              </DrawerTrigger>
              <DrawerContent className='w-full max-w-sm mx-auto py-8 px-5 rounded-t-[20px]'>
                <DrawerHeader className='p-0'>
                  <DrawerTitle className='text-[19px] text-[#222] font-semibold'>
                    카테고리를 삭제할까요?
                  </DrawerTitle>
                  <DrawerDescription className='text-15px text-[#555]'>
                    카테고리를 삭제하면, 연결된 지출 내역의 친구 생일선물 태그도
                    함께 삭제돼요.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='p-0 mt-9'>
                  <Button
                    className='h-13 rounded-full'
                    onClick={() => {
                      console.log('on delete', category_uid);
                    }}
                  >
                    삭제
                  </Button>
                  <DrawerClose>
                    <Button
                      variant='ghost'
                      className='h-13 w-full rounded-full'
                    >
                      취소
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Button
              type='submit'
              className='flex-1 rounded-full h-13 text-[15px] text-white bg-[#222] hover:bg-[#222]/80'
            >
              저장
            </Button>
          </div>
        </form>
      </Form>
    </Layout>
  );
};

export default CategoryRoute;
