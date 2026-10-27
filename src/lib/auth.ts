/**
 * The login form asks for a Name. Accounts in the backend use an email, so the
 * name is turned into a private sign-in address: "Priya" -> "priya@ourlittleworld.app".
 * Create the account in Cloud → Users with exactly that email and your chosen password.
 */
export const LOGIN_DOMAIN = "ourlittleworld.app";

export function nameToEmail(name: string) {
  const raw = name.trim();
  // A full email typed in the Name box is used exactly as entered.
  if (raw.includes("@")) return raw.toLowerCase();
  const slug = name.trim().toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, "");
  return `${slug || "guest"}@${LOGIN_DOMAIN}`;
}
