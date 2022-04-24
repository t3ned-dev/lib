<div align="center">
<img src="https://imgur.com/xPygSgY.png" align="center" width="10%" alt="">

# @t3ned/snowflake

**A snowflake id generator and deconstructor**

</div>

# Installation

```sh
# npm
> npm i -D @t3ned/snowflake

# yarn
> yarn add -D @t3ned/snowflake

# pnpm
> pnpm add -D @t3ned/snowflake
```

# Usage

```ts
import { Snowflake } from "@t3ned/snowflake";

// Generate a snowflake
Snowflake.generate(); // 32614907904004096n

// Generate a snowflake with a worker id of 1n and process id of 2n
Snowflake.generate({ workerId: 1n, processId: 2n }); // 41203673124184064n

// Deconstruct a snowflake
Snowflake.deconstruct(41203673124184064n);
// {
//   timestamp: 1650818921200n,
//   workerId: 1n,
//   processId: 2n,
//   increment: 0n,
//   epoch: 1640995200000n
// }
```
