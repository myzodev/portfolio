import type { Metadata } from "next";

import { createMetadata } from "@/utils/metadata";

import AppWIP from "@/components/layout/AppWIP";

export const metadata: Metadata = createMetadata(
	"Myžo • Let's get in touch",
	"Contact me for any questions or inquiries",
);

export default function Page() {
	return <AppWIP />;
}
