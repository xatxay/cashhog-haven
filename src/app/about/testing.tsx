import { api } from "@/trpc/server";

const TestApi = async () => {
  const health = await api.health.checkHealth.query();
  return (
    <div>
      <span>{health.success}</span>
      {health.message}
    </div>
  );
};

export default TestApi;
