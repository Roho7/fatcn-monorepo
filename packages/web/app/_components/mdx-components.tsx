'use client';

import {
  Button,
  Callout,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cn,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ToastProvider,
  TooltipProvider,
} from '@fatcn/ui';
import { Add01Icon, Settings01Icon } from 'hugeicons-react';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Link from 'next/link';
import * as React from 'react';
import { ComponentPreview } from './component-preview';
import CopyButton from './copy.button';
import './mdx.css';

export enum Events {
  copy_to_clipboard = 'copy_to_clipboard',
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'font-heading mt-2 scroll-m-20 text-4xl font-bold',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-12 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-primary-foreground first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-secondary-foreground',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-accent',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'leading-7 text-primary-foreground/90 [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),
  Callout: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <Callout {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        'my-6 ml-6 list-disc text-primary-foreground/90',
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        'my-6 ml-6 list-decimal text-primary-foreground/90',
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 border-border md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn(
          'relative w-full overflow-hidden border-none text-sm',
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('last:border-b-none m-0 border-b', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'px-4 py-2 text-left font-bold text-secondary-foreground [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'px-4 py-2 text-left text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    __npmCommand__,
    __yarnCommand__,
    __src__,
    __event__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
    __withMeta__?: boolean;
    __npmCommand__?: string;
    __yarnCommand__?: string;
    __src__?: string;
    __event__?: Events;
  }) => {
    const rawCode = __rawString__ || '';
    if (__npmCommand__ || __yarnCommand__) {
      return (
        <Tabs defaultValue="npm">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </TabsList>
          <TabsContent value="npm">
            <div className="relative">
              <pre
                className={cn(
                  'mb-4 mt-2 w-full overflow-x-auto rounded-xl bg-primary p-4 text-primary-foreground',
                  className
                )}
              >
                <code className="relative font-mono text-sm">
                  {__npmCommand__}
                </code>
              </pre>
              <CopyButton
                value={__npmCommand__ || ''}
                className="absolute right-4 top-4"
              />
            </div>
          </TabsContent>
          <TabsContent value="yarn">
            <div className="relative">
              <pre
                className={cn(
                  'mb-4 mt-2 w-full overflow-x-auto rounded-xl bg-primary p-4 text-primary-foreground',
                  className
                )}
              >
                <code className="relative font-mono text-sm">
                  {__yarnCommand__}
                </code>
              </pre>
              <CopyButton
                value={__yarnCommand__ || ''}
                className="absolute right-4 top-4"
              />
            </div>
          </TabsContent>
        </Tabs>
      );
    }

    return (
      <div className="relative w-full">
        <pre
          className={cn(
            'mb-4 mt-6 w-full overflow-x-auto rounded-xl !bg-primary p-4 !text-primary-foreground',
            className
          )}
          {...props}
        />
        <CopyButton
          value={rawCode}
          src={__src__}
          event={__event__}
          className={cn('absolute right-4 top-4', __withMeta__ && 'top-16')}
        />
      </div>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <code
      className={cn(
        'w-full rounded-lg bg-primary px-2 py-1 font-mono text-sm text-primary-foreground',
        className
      )}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Button: ({ ...props }: React.ComponentProps<typeof Button>) => (
    <Button {...props} />
  ),
  Card: ({ className, ...props }: React.ComponentProps<typeof Card>) => (
    <Card
      variant="secondary"
      className={cn('mt-6 border border-border', className)}
      {...props}
    />
  ),
  CardHeader: ({
    className,
    ...props
  }: React.ComponentProps<typeof CardHeader>) => (
    <CardHeader
      className={cn('border-b border-border', className)}
      {...props}
    />
  ),
  CardTitle: ({
    className,
    ...props
  }: React.ComponentProps<typeof CardTitle>) => (
    <CardTitle className={cn(className)} {...props} />
  ),
  CardDescription: ({
    className,
    ...props
  }: React.ComponentProps<typeof CardDescription>) => (
    <CardDescription className={cn(className)} {...props} />
  ),
  CardContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof CardContent>) => (
    <CardContent className={cn('py-6', className)} {...props} />
  ),
  CardFooter: ({
    className,
    ...props
  }: React.ComponentProps<typeof CardFooter>) => (
    <CardFooter className={cn(className)} {...props} />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn('relative mt-6 w-full', className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        'w-full justify-start rounded-none border-b border-border bg-transparent p-0 overflow-x-auto no-scrollbar',
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        'relative h-9 rounded-none bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none',
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      // className={cn(
      //   'relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold',
      //   className
      // )}
      {...props}
    />
  ),
  //   FrameworkDocs: ({
  //     className,
  //     ...props
  //   }: React.ComponentProps<typeof FrameworkDocs>) => (
  //     <FrameworkDocs className={cn(className)} {...props} />
  //   ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10',
        className
      )}
      {...props}
    />
  ),
  ComponentPreview: ({ ...props }: any) => <ComponentPreview {...props} />,
  Add01Icon,
  Settings01Icon,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  //   const [config] = useConfig()
  const Component = useMDXComponent(code);

  return (
    <div className="mdx w-full">
      <ToastProvider>
        <TooltipProvider>
          <Component components={components} />
        </TooltipProvider>
      </ToastProvider>
    </div>
  );
}
