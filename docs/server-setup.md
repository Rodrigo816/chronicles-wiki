---
id: server-setup
title: Server Setup Guide
description: Guide for setting up server locally or on a server host.
slug: /server-setup
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

(WORK IN PROGRESS)This guide will explain how to set up an server locally, or with a server host.

---

## 🧰 Prerequisites
<Tabs>
  <TabItem value="ccbb" label="Create Chronicles: Bosses and Beyond">
    - A server with at least <span className="bold-primary">8GB</span> of RAM
    - A CPU with <span className="bold-primary">at least 3.5GHz</span>
    - <span className="bold-primary">Java 17</span> installed (preferably from [Adoptium](https://adoptium.net/temurin/releases/?version=17&package=jdk)).
  </TabItem>
  <TabItem value="ccsj" label="Create Chronicles: TBA">
  </TabItem>
</Tabs>


---

## 📦 Installation

1. Go to the [CurseForge page](https://www.curseforge.com/minecraft/modpacks) of the modpack
2. Click on **Files** and choose the **same version** you plan to use on your client.
3. Scroll to **Additional Files** and download the **Server Files**
4. Extract the `Server-Files.zip` into a new folder.

:::warning
If you're using third-party antivirus software, **exclude** this folder to prevent important files from being deleted or corrupted.
:::
:::tip
It’s a good idea to keep your server and client version up-to-date to benefit from bug fixes, performance improvements, and new features.
:::

---

## ☕ Java Setup

If you have multiple Java versions installed, `java -version` may return the wrong version. You have several options:

#### ✅ Solutions:

- **Option 1**: Uninstall all Java versions except the one you need
- TODO

---

## 🖥️ Local Installation

- Extract the server files to a folder.

#### 🐧 Linux Users:

- Ensure the server folder has **read/write permissions**.
- Run this command once to make the start script executable:

```bash
sudo chmod +x startserver.sh
```

#### ▶️ Start the Server

- **Windows**: Run `startserver.bat`
- **Linux**: Run `./startserver.sh`

📌 The first launch will generate several files. **Do not interrupt** this process.

 #### Accept the EULA
Then open `eula.txt` and change:
`eula=false` to `eula=true`

##### Once you see:
```
Dedicated server took XX seconds to load
```

**🎉 Your server is ready, and you can join!**

:::warning
Common Pitfall Do not edit server-ip or server-port unless you're absolutely sure.
Setting these incorrectly can prevent your server from starting.
:::