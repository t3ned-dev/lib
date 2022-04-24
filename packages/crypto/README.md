<div align="center">
<img src="https://imgur.com/xPygSgY.png" align="center" width="10%" alt="">

# @t3ned/crypto

**Cryptography functions for hashing and encrypting data**

</div>

# Installation

```sh
# npm
> npm i -D @t3ned/crypto

# yarn
> yarn add -D @t3ned/crypto

# pnpm
> pnpm add -D @t3ned/crypto
```

# Usage

```ts
import { Encryption, sha1 } from "@t3ned/crypto";
import { randomBytes } from "crypto";

const cipherKey = randomBytes(16).toString("hex");
const encryption = new Encryption(cipherKey);

// Encrypt
encryption.encrypt("hello world"); // 6811f1f5d0a7757a9b5be67a88745ea0:6ff98b44a09b7a72c38257613e45b359

// Decrypt
encryption.decrypt("6811f1f5d0a7757a9b5be67a88745ea0:6ff98b44a09b7a72c38257613e45b359"); // hello world

// Hash
sha1("hello world"); // 403926033d001b5279df37cbbe5287b7c7c267fa
```
