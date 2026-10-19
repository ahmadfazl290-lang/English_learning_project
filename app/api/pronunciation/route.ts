import {pronunciationStatus,pronunciationUnavailable} from '../../../lib/pronunciation-disabled.mjs';
export const dynamic='force-dynamic';
// Deliberately do not import the provider or read configuration/body/cookies.
export const GET=pronunciationStatus;
export const POST=pronunciationUnavailable;
