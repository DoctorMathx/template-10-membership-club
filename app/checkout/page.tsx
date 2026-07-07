import type { Metadata } from "next";
import { CheckoutClient } from "./checkout-client";

export const metadata: Metadata = { title: "Join · Checkout" };

export default function CheckoutPage() {
  return <CheckoutClient />;
}
