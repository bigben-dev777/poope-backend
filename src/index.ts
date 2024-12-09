import { init, run } from "src/system";

const bootstrap = async () => {
  await init();
  run();
  load();
};

const load = () => {
  // Load workload
};

bootstrap().catch((error) => {
  console.error(error);
});
