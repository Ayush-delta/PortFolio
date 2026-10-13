export default async function SettingsPage() {
  // Simulate dynamic fetch delay to showcase loading transitions
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div>
      <h1>Settings</h1>
      <p>Update your profile, theme, and preferences.</p>
    </div>
  );
}
