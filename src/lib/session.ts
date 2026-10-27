// Distinguishes a deliberate logout from a session that expired on its own.
let intentional = false;
export const markIntentionalSignOut = () => { intentional = true; };
export const consumeIntentionalSignOut = () => { const v = intentional; intentional = false; return v; };
