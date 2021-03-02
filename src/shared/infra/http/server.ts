import express from 'express';

import '@shared/infra/typeorm';

const app = express();

app.listen(3333, () => {
  console.log('no ar');
});
