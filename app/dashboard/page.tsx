export default async function DashboardPage() {
  // Simulate dynamic API or database fetch delay to show the runner animation
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Manage your portfolio content here.</p>
    </div>
  );
}
