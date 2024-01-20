import { auth } from "@/auth";

async function SettingsPage() {
  const session = await auth();
  return (
    <div>
    {JSON.stringify(session)}
    </div>
    )
  }
  
  export default SettingsPage;