import RepositoryClient from '../../components/RepositoryClient';
import EntryController from '../../components/EntryController';
export default function PracticeLibrary(){return <EntryController><nav className="p-3 flex gap-4"><a href="/">English-Co</a><a href="/account?provider=supabase">My Account</a></nav><RepositoryClient/></EntryController>;}
