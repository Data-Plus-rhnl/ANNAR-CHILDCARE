import { redirect } from "next/navigation";

export default function PartyRedirectPage() {
  redirect("/events/birthday-parties");
}
