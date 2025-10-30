import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Box } from "@/components/ui/box";

function Main() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid sm:grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <Box raised="single" className="w-full">
            <AccordionRoot
              className="w-full"
              defaultValue={["product-information"]}
            >
              <AccordionItem value="product-information">
                <AccordionTrigger>Product Information</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Our flagship product combines cutting-edge technology with
                    sleek design. Built with premium materials, it offers
                    unparalleled performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and
                    an intuitive user interface designed for both beginners and
                    experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping-details">
                <AccordionTrigger>Shipping Details</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    We offer worldwide shipping through trusted courier
                    partners. Standard delivery takes 3-5 business days, while
                    express shipping ensures delivery within 1-2 business days.
                  </p>
                  <p>
                    All orders are carefully packaged and fully insured. Track
                    your shipment in real-time through our dedicated tracking
                    portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="return-policy">
                <AccordionTrigger>Return Policy</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping
                    and full refunds processed within 48 hours of receiving the
                    returned item.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </Box>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <AccordionRoot
            className="w-full"
            variant="boxed"
            defaultValue={["product-information"]}
          >
            <AccordionItem raised="single" value="product-information">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem raised="single" value="shipping-details">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem raised="single" value="return-policy">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
