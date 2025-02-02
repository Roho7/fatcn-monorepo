'use client';

import {
  cn,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@fatcn-ui';
import * as React from 'react';
import { registry } from '../../_registry/examples-registry';

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  extractClassname?: boolean;
  extractedClassNames?: string;
  align?: 'center' | 'start' | 'end';
  description?: string;
  hideCode?: boolean;
  type?: 'block' | 'component' | 'example';
  code?: React.ReactElement;
  Component?: React.ReactNode;
}

export function ComponentPreview({
  name,
  type,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = 'center',
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Preview = React.useMemo(() => {
    const Component = registry[name as keyof typeof registry].component;
    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{' '}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{' '}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        <TabsContent
          value="preview"
          className="relative overflow-hidden rounded-md border border-border"
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2"></div>
          </div>
          <div
            className={cn(
              'preview flex min-h-[350px] w-full justify-center p-10',
              {
                'items-center': align === 'center',
                'items-start': align === 'start',
                'items-end': align === 'end',
              }
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </div>
          <img
            src="/grid.svg"
            className="absolute left-0 top-0 -z-10 h-full w-full origin-top scale-110 fill-primary opacity-10 dark:opacity-50 object-cover"
          ></img>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
