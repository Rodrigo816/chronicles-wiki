---
id: server-setup
title: Server Setup Guide
description: Guide for setting up server locally or on a server host.
slug: /server-setup
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Accordion from '@site/src/components/Accordion';
import AccordionItem from '@site/src/components/AccordionItem';

This guide will explain how to set up an server locally, or with a server host.

---

## 📋 Requirements
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

Check the [Requirements](#-requirements) section to see which version of Java is required to run the modpack correctly.  
If you don't know how to install Java, refer to the [Java Installation Guide](/docs/java-setup/).

If you have multiple Java versions installed, the system default (`java`) might point to the wrong version. Fortunately, the server's startup script allows you to specify which Java installation to use.

#### How script works

The script checks for an environment variable called `CCB_JAVA`. If it's set, it will use that as the Java executable.  
If not, it defaults to your system’s installed `java` command (`JAVA_HOME`).

---
### 🔍 Step 1: Check Your Java Version

Run this command in your terminal:

```bash
java -version
```
You should see output similar to:
```bash
openjdk version "17.x.x"
```
#### If the version matches the one listed in the requirements, you're good to continue! ✅
---
### 🔍 Step 2: Check if `JAVA_HOME` is already set

Before setting anything, check if it's already configured:

<Tabs>
  <TabItem value="w1" label="Windows (Command Prompt)">
    ```cmd
      echo %JAVA_HOME%
    ```
  * ✅ If it returns a valid path (like ``C:\Program Files\Java\jdk-17...``), you're good! You can <span className="bold-primary">skip Step 3.</span>

  * ❌ If it returns ``%JAVA_HOME%``, it means it's not set —<span className="bold-primary"> continue to Step 3</span> to set it.
  </TabItem>
  <TabItem value="mac2" label="Linux">
    ```cmd
      echo $JAVA_HOME
    ```
    If it returns nothing or an invalid path, follow the steps below to set it.
  </TabItem>
</Tabs>
---
### Step 3: Set JAVA_HOME
<span className="bold-primary">JAVA_HOME</span> tells your system (and most launchers) where Java is installed.

<Tabs>
  <TabItem value="ww1" label="Windows">
▶️ [Watch YouTube Video Guide](https://www.youtube.com/watch?v=UVlNBv3Yhv8) (if needed)

1. Search for **Environment Variables** in the Start Menu  
2. Click **"Edit the system environment variables"**  
3. In the **System Properties** window, click **Environment Variables**

4. **Check if `JAVA_HOME` is already listed** under:
   - 🔸 **System variables**

👉 If it exists, select it and click **Edit** instead of adding a duplicate.

5. If it's not already set, click **New**:
   - **Variable name**: `JAVA_HOME`  
   - **Value**: your Java install folder (⚠️ *not* the `bin` folder)  
     Example:

     ```text
     C:\Program Files\Eclipse Adoptium\jdk-17.0.9.9-hotspot
     ```

6. Click **OK → OK → OK**

7. To verify it’s working, open **Command Prompt** and run:
```cmd
  echo %JAVA_HOME%
```

#### If it returns a valid path you did everything correct ✅

:::tip
### 🔍 How to Find the JDK Installation Path
If you're unsure where your JDK is installed, you can run one of the following command to find its location:
```
where java
```
This will return something like:
```
C:\Program Files\Eclipse Adoptium\jdk-17.0.9.9-hotspot\bin\java.exe
```
Now just remove the ``\bin\java.exe`` part, and that’s your ``JAVA_HOME`` path:
```
C:\Program Files\Eclipse Adoptium\jdk-17.0.9.9-hotspot
```

:::
  </TabItem>
  <TabItem value="macc2" label="Linux">
Add the following lines to your `~/.bashrc`, `~/.zshrc`, or `~/.profile`:

```bash
export JAVA_HOME="/path/to/java"
export PATH="$JAVA_HOME/bin:$PATH"
````

#### 🔄 Reload the config:
After editing the file, reload it using:
```bash
  source ~/.bashrc
```
> Replace ``.bashrc`` with ``.zshrc`` or ``.profile`` depending on your shell.

#### To verify Run the following:
```bash
  echo $JAVA_HOME
```

  </TabItem>
</Tabs>
---
### Optional: Use `CCB_JAVA` to Run Java (Skip this if you don't know)

If you want to use a **specific Java version just for the server script**, you can set the `CCB_JAVA` environment variable.


---

## 🖥️ Local Installation

- Extract the server files to a folder.

:::info
#### 🐧 Linux Users:

- Ensure the server folder has **read/write permissions**.
- Run this command once to make the start script executable:

```bash
sudo chmod +x startserver.sh
```
:::

### ▶️ Start the Server

- **Windows**: Run `startserver.bat`
- **Linux**: Run `startserver.sh`

📌 The first launch will generate several files. **Do not interrupt** this process.

 ### Accept the EULA
Then open `eula.txt` and change:
`eula=false` to `eula=true`

##### Once you see:
```
Dedicated server took XX seconds to load
```

#### **🎉 Your server is ready, and you can join!**


<Accordion>
  <AccordionItem header="How to configure RAM?">
    Edit the ``-Xms`` (Startup Ram) and ``-Xmx`` (Maximum Ram) within the ``usr_jvm_args.txt`` file.
  </AccordionItem>
</Accordion>

## ☁️ Server Host Installation

Most server hosts support one-click modpack installs, but if not, follow these steps:

- Set up a fresh **Forge server** matching the modpack’s Forge version.
- If no Forge installer is available, see the **Custom JAR** section below.
- Upload the extracted **Server Files** using **FTP/SFTP** (e.g. with FileZilla).
- If SFTP isn't available, upload the `.zip` file and extract it using the host’s **file manager**.

---

## 🛠 Server Host Custom JAR

If your server host requires a `.jar` file:

#### For newer Forge versions:

- Use `ServerStarter.jar`

#### For older Forge versions:

- You may be able to use `forge-*-universal.jar`

#### ✅ Steps:

1. Upload the server files to the **root directory**
2. Adjust `mcVersion` and `loaderVersion` if needed
3. Set the **custom JAR** to `ServerStarter.jar` in your host settings

## 🔁 Updating Your Server

:::warning
Make sure the server is completely shut down before proceeding.
:::

:::tip
🔒 Back up your world before updating!
:::

---

### ✅ Automatic (Host Installer)

- Use your host's **modpack control panel** to perform a one-click update (if available)

---

### 🧰 Manual Update Steps

#### 1. Delete the following folders from your server:

```bash
config/
defaultconfigs/
kubejs/
mods/
```
#### 2. Download the latest Server Files

#### 3. Replace the deleted folders:
  * Unzip the downloaded server files.
  * Copy and replace the deleted folders on your server with the new ones from the archive.

**✅ Your server is now updated and ready to launch!**