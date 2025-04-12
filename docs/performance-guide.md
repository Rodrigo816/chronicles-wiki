---
id: performance-guide
title: Performance Guide
description: A guide how to improve minecraft performance.
slug: /performance-guide
sidebar_position: 3
toc_max_heading_level: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Accordion from '@site/src/components/Accordion';
import AccordionItem from '@site/src/components/AccordionItem';

Running a modded Minecraft like <span className="bold-primary">Create Chronicles</span> can be demanding. This guide will help you get the best performance by adjusting RAM, CPU usage, and key config settings.

---

### How Minecraft Uses System Resources

- **RAM (Memory)**: Needed to load mods, world data, and keep entities active. Too little = lag, crashes. Too much = garbage collection issues.
- **CPU (Processor)**: Minecraft is mostly single-threaded but uses more threads for mods, chunk loading, and world gen.
- **Storage**: SSDs dramatically improve world loading and chunk saving speed.
---
## Using a Reliable Launcher

To ensure the modpack runs smoothly and updates properly, we strongly recommend using one of the following trusted launchers:

- ✅ **CurseForge Launcher** — Official curseforge launcher with mod support and easy updates.
- ✅ **ATLauncher** — Lightweight and stable alternative.

:::danger
❌ Avoid cracked or unofficial launchers. These often cause unexpected issues, and we cannot provide support for them.
:::
---

## RAM Allocation

Recommended: <span className="bold-primary"> 8 GB of RAM</span>

Too little RAM = crashes  
Too much RAM = laggy garbage collection (GC) and lagg spikes in game.

:::note
💡 Giving Minecraft too much RAM is like giving your browser 64 tabs — it’ll eat them all and ask for more 😅
:::

### How to Change RAM on:

#### CurseForge Launcher:
1. Go to **Settings > Minecraft**
![Alt text](/img/cfstep1.png)
![Alt text](/img/cfstep2.png)
2. Scroll to **Allocated Memory**
3. Set it to **`8192 MB (8 GB)`**

![Alt text](/img/cfstep3.png)

#### ATLauncher:
Adjust the **maximum memory (Xmx)** and **minimum memory (Xms)** in the Java settings.

```bash
-Xmx8G -Xms4G
```
---

## Recommended Java Args (JVM Flags)
Need smoother performance or fewer stutters?  
Try these JVM arguments to optimize memory usage and garbage collection.
<Tabs>
  <TabItem value="client" label="Client">
    ```bash
    -XX:+UnlockExperimentalVMOptions 
    -XX:+UseG1GC 
    -XX:G1NewSizePercent=20 
    -XX:G1ReservePercent=20 
    -XX:MaxGCPauseMillis=50 
    -XX:G1HeapRegionSize=32M
    ````
  </TabItem>
    <TabItem value="sv" label="Server">
      Most modded server packs include preconfigure<span className="bold-primary"> Aikar's flags</span>, which are optimized for performance.
    </TabItem>
</Tabs>
---
## Update GPU Drivers

Keeping your drivers up to date = better FPS.

#### Check your GPU:
1. Open **Task Manager** → **Performance tab**
2. Click **GPU 0** to see your GPU model

#### 🔗 Driver Downloads:
- **AMD**: [amd.com/en/support](https://www.amd.com/en/support)
- **Intel**: [intel.com/download-center](https://www.intel.com/content/www/us/en/download-center/home.html)
- **NVIDIA**: [nvidia.com/download](https://www.nvidia.com/Download/index.aspx?lang=en-us)
---
## Video Settings

- **Turn off FPS counter** and avoid using F3 — it lowers performance.
- **Disable VSync** — use the FPS cap slider instead.
- **Lower game resolution** (great for high-res displays like Retina).
- **Reduce Render Distance** to 6–8 chunks.
- **Lower Simulation Distance** (can affect farms).
- **Set Particles** to Minimal or Decreased.
- **Lower Entity Distance** to ~75%.
---

## CPU Tips

Minecraft <span className="bold-primary">loves clock speed</span>, not core count.

* Ideal: CPU with <span className="bold-primary">3.5 GHz or higher</span>
* Minecraft uses:
  * 1 thread for the main game loop
  * Extra threads for world gen, IO, and some mods (like Create, Distant Horizons, etc.)

:::warning
💡 Avoid shared hosting with low GHz CPUs. Use a dedicated server or premium host (like Bisect Hosting).
:::
---

## Last Tips

* **Install Minecraft on an SSD** — much faster chunk loading and smoother gameplay.
* **Enable XMP in BIOS** — ensures your RAM runs at full speed.
* **Set Java priority to "Above Normal"** in Task Manager after launching Minecraft.
* **Force Minecraft to use your discrete GPU** (check with F3):
  * Go to **Windows Settings > Display > Graphics Settings**
  * Add `javaw.exe` and set it to **High Performance**
* **Close background apps** — browsers, Discord, and launchers eat CPU, RAM, and disk speed.