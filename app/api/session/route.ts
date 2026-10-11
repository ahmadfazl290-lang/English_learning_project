import {getChatGPTUser} from '../../chatgpt-auth';
import {env} from '../../../lib/runtime';
export const dynamic='force-dynamic';
export async function GET(){return Response.json({mode:'hosted',development:false,emailAuth:true,databaseConfigured:!!env.DB,registrationCodeRequired:!!process.env.REGISTRATION_CODE,user:await getChatGPTUser(),aiConfigured:!!env.ANTHROPIC_API_KEY},{headers:{'Cache-Control':'no-store'}});}
