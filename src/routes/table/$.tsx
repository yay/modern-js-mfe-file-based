// $.tsx file is the entry of the main application convention route.
// `$` represents fuzzy match, that is, /table and /table/test will match this
// $.tsx as the entry file of the route, which will ensure that the sub-application
// route is loaded correctly in the micro frontend scenario).

import { useModuleApps } from '@modern-js/plugin-garfish/runtime';

// File-based routing sub-app.

const Index = () => {
  const { Table } = useModuleApps();

  return (
    <div>
      <Table />
    </div>
  );
};

export default Index;
