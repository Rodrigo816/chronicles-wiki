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

Create Chronicles: Bosses and Beyond requires **Java 17** to run correctly.

If you have multiple Java versions installed, the system default (`java`) might point to the wrong version. Fortunately, the server's startup script allows you to specify which Java installation to use.

### ✅ How it works

The script checks for an environment variable called `CCB_JAVA`. If it's set, it will use that as the Java executable.  
If not, it defaults to your system’s installed `java` command.

### 📋 What happens if `CCB_JAVA` is not set?

- The script will run using the default `java` command.
- If that version is **older than Java 17**, the script will warn you and **exit**.
- If it's Java 17 or newer, it will continue running normally.

---

### 🔧 Recommended Options

#### Option 1: Use the system's Java (no CCB_JAVA needed)
If ``java -version`` returns 17 or higher, you're good to go without setting anything.`
:::tip
## 🧪 Check Your Java Version

Run:

```bash
java -version
```
Expected output should include something like:
openjdk version "17.x.x"
If not, either install Java 17 or set the CCB_JAVA variable manually.
:::

💡 **Tip:** You can download Java 17 from [Adoptium (Temurin)](https://adoptium.net/temurin/releases/?version=17&package=jdk) — a trusted open-source Java distribution.


#### ✅ Option 2: Set `CCB_JAVA` temporarily (per run)

**Windows:**

```powershell
set CCB_JAVA="C:\Program Files\Eclipse Adoptium\jdk-17.0.9\bin\java.exe"
start startserver.bat```

**Linux/macOS:**
```CCB_JAVA="/usr/lib/jvm/java-17-openjdk-amd64/bin/java" ./startserver.sh```

#### ✅ Option 3: Set it permanently
* Windows: Add ``CCB_JAVA`` to your system environment variables.
* Linux/macOS: Add this to your ``.bashrc``, ``.zshrc``, or profile:

Linux/macOS: Add this to your .bashrc, .zshrc, or profile:
```export CCB_JAVA="/your/custom/path/java```


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



d


:warning: Common Pitfall
:x: Do not edit server-ip or server-port unless you know what you’re doing — this can cause startup failures.




:jigsaw: No Start Script? Adding Args or RAM?
See:

How to Add Arguments

How to Add RAM

How to Import a World

Performance Tips / Lag Profiling

(You can turn these into internal Docusaurus links later!)

:cloud: Server Host Installation
Most server hosts support one-click modpack installs, but if not:

Set up a fresh Forge server matching the pack’s Forge version

If no Forge installer is available, see the section below

Upload the extracted Server Files using FTP/SFTP (e.g. via FileZilla)

If no SFTP access, upload the zip file and extract it using the host’s file manager

:wrench: Server Host Custom JAR
If the host requires a .jar:

For newer Forge versions:

Use ServerStarter.jar

For older versions:

You may be able to use forge-*-universal.jar

Steps:
Upload the server files to the root directory

Create a server-setup-config.yaml file

Paste the config for your pack (example for ATM9)

Adjust mcVersion and loaderVersion if needed

Set the custom jar to ServerStarter.jar

:arrows_counterclockwise: Updating Your Server
:lock: Back up your world before updating!

Automatic (Host Installer)
Use your host's modpack control panel to one-click update

Manual (2 methods)
Method 1: Replace folders
Download updated Server Files

Delete:

kubejs

defaultconfigs

mods

config

If Forge version changed: also delete libraries, startserver.bat, forge-installer.jar

Extract new files into server folder

Method 2: Fresh folder
Extract new server files to a new folder

Copy:

world/

eula.txt

server.properties

journeymap/ (if present)

any modified config or kubejs scripts