import app from './app'
import { env } from "./config/env";

const PORT = Number(env.PORT);

if (isNaN(PORT) || PORT < 0 || PORT > 65535) {
  throw new Error(`Invalid PORT: ${env.PORT}`);
}

console.log(PORT);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
})