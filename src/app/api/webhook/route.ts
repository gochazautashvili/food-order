import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body.map((product: any) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.title,
              images: [product.image],
            },
            unit_amount: product.price * 100,
            tax_behavior: "exclusive",
          },
          quantity: product.quantity,
        };
      }),
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000/order",
    });

    return NextResponse.json(session.url);
  } catch (error) {
    return NextResponse.json("/");
  }
}
