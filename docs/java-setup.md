---
id: javar-setup
title: Java Setup
description: Guide for installing Java.
slug: /java-setup
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A Simple guide how to install Java.

---

## Which Java Version Should I Install to Play the Pack?
<Tabs>
  <TabItem value="ccbb" label="Create Chronicles: Bosses and Beyond">
    - <span className="bold-primary">Java 17</span>
  </TabItem>
  <TabItem value="ccsj" label="Create Chronicles: TBA">
    - <span className="bold-primary">Java 21</span>
  </TabItem>
</Tabs>

## ☕ How to Install Java (Adoptium)

We recommend downloading **Eclipse Temurin** (an open-source Java distribution) from:

🔗 https://adoptium.net/temurin/releases/?version=17&package=jdk

1. Go to the link above and select the following options:
   - **Operating System**: Choose based on your platform (Windows, macOS, Linux)
   - **Architecture**: Select according to your system (e.g., `x64` for most Windows PCs, `aarch64` for Apple Silicon Macs)
   - **Package Type**: JDK
   - **Version**: Choose the version listed in the [📋 Which Java Version Should I Install to Play the Pack?](#which-java-version-should-i-install-to-play-the-pack) section. Always pick an <span className="bold-primary">LTS version</span> if available (e.g. 17-LTS).


Once installed, you can verify that Java is correctly set up by checking your version:

## Check Your Java Version
<Tabs>
  <TabItem value="windows1" label="Windows">
    1. Press `Windows + R`, type `cmd`, and press Enter to open **Command Prompt**  
      (You can also open **PowerShell** if preferred)

    2. Type the following command and press Enter:
    ```bash
    java -version
    ```
    ✅ Expected output should include something like:
    ```
    java version "17.0.9" 2023-10-17 LTS
    Java(TM) SE Runtime Environment ...
    Java HotSpot(TM) 64-Bit Server VM ...
    ```
    ⚠️ If you get:
    ```
    "java" is not recognized as an internal or external command
    ```
    That means Java isn't installed, or it's not added to your system PATH.
    [Installation](#-how-to-install-java-adoptium)
  </TabItem>
  <TabItem value="linux1" label="Linux">
    1. Open the Terminal (Cmd + Space, search for "Terminal", and press Enter)

    2. Run:
    ```bash
    java -version
    ```
    ✅ Expected output should include something like:
    ```
      openjdk version "17.0.9" 2023-10-17
      OpenJDK Runtime Environment ...
      OpenJDK 64-Bit Server VM ...
    ```
    ⚠️ If you get:
    ```
    No Java runtime present, requesting install.
    ```
    That means Java isn't installed. 
    [Installation](#-how-to-install-java-adoptium)
  </TabItem>
</Tabs>