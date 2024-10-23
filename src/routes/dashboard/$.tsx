import { useModuleApps } from '@modern-js/plugin-garfish/runtime';

// Self-controlled routing sub-app.

const Index = () => {
  const { Dashboard } = useModuleApps();

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Index;
