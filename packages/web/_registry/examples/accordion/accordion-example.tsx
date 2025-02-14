import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@fatcn-ui'

type Props = {}

const AccordionExample = (props: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I track my order?</AccordionTrigger>
        <AccordionContent>
          You can track your order by logging into your account and visiting the
          "Order History" section. There, you'll find your tracking number and
          real-time updates on your package's location. We also send automated
          email notifications at key shipping milestones.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What's your return policy?</AccordionTrigger>
        <AccordionContent>
          We offer a hassle-free 30-day return policy for all unused items in their
          original packaging. Simply initiate a return through your account, and
          we'll provide a prepaid shipping label. Once we receive the item, your
          refund will be processed within 3-5 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
        <AccordionContent>
          Yes! We ship to over 100 countries worldwide. International shipping
          typically takes 7-14 business days, depending on the destination.
          Please note that customs fees and import duties may apply, and these
          charges are the responsibility of the recipient.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionExample