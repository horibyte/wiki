---
layout: main
title: LexNova Arctic
permalink: LexNova_Arctic
hatnote: This article details a work-in-progress project by <a href="LexNova">LexNova</a> and is currently incomplete.
redirect_from:
  - Horibyte_LeafyOS
  - LeafyOS
  - Project_Arctic
  - Arctic
  - Horibyte_Arctic
  - Lexibyte_Arctic
---

**LexNova Arctic**[&sup1;](#notec1){: id="note1"} is an open-source operating system for personal computers, developed and maintained by [LexNova](LexNova). It was first released on May 26, 2025, and its source code is available on GitHub ([github.com/thelexibyte/arctic](https://github.com/thelexibyte/arctic)).

![LexNova Arctic 0.1.5 Demo on QEMU](img/articles/arctic/0.1.5demo.png){: style="box-shadow:none!important;"}
<p id="caption">QEMU running LexNova Arctic 0.1.5a</p>

Arctic is currently **only compatible with QEMU and VMware**. This limitation stems from how other virtualization and emulation software manage image files, whereas QEMU and VMware allow for disks without pre-existing file systems.

The latest stable release, as of May 27, 2025, is version 0.1.5.


#### Overview

LexNova Arctic operates as a 16-bit real mode system, making it potentially compatible with processors as early as the Intel 8088 (citation needed). LexNova suggests the following recommended system requirements:

* A 486 processor
* 4 MB of RAM
* A floppy disk drive
* Keyboard
* A VGA card

Arctic supports the following commands (information derived from version 0.1.5):

```
help         Display this help message
clear        Clear the screen
echo <text>  Prints text (e.g., echo Hello World)
ver          Display version information
shutdown     Halts the system
```
*(More commands coming soon!)*

Arctic is available in two SKUs: **Standard** and **Server**. The Server SKU is currently only accessible within Lab02.


#### Development

Development of Arctic began around May 26, 2025, initially featuring a command-line interface (CLI) as its primary user interface. All development builds available as of May 27, 2025, are written in Assembly.

Interestingly, instances of a `LeafyOS` virtual machine have been observed in LexNova's VMware VM library. Additionally, LexNova has mentioned and even shared screenshots of several `kernel.bin` files, although all of these files have since been lost.

**Lab02**, one of LexNova's virtual development labs, contains code for a <span id="tt2">i386</span> version of Arctic 0.1.5, known as [Arctic32](Arctic32). LexNova has stated that this build is unstable:

<div class="mdl-tooltip mdl-tooltip--large" for="tt2">
32-bit
</div>


> It won't even boot, I'll tell ya that.
>

*— LexNova*

The source code for this experimental build has been uploaded to GitHub.

**Lab03** serves as a testing ground for core servicing changes within the operating system's code. The most notable project developed within Lab03 is the ***LexNova Arctic Setup Program***.

While LexNova has not shared the code from this development lab, screenshots of its contents do (and even compiled builds) do exist.


#### Kernel Overview

The Arctic loading process involves three key files:

1.  `bootloader.bin` - The Arctic Bootloader, internally codenamed **Midori**, which is responsible for loading `osload.bin`.
2.  `osload.bin` - An intermediary component between the bootloader and the kernel, responsible for loading necessary functions and preparing for the launch of `rekanto.bin`.
3.  `rekanto.bin` - The main Arctic kernel, codenamed **ReKanto**, which contains all of the operating system's commands and drivers.

The Arctic kernel is a monolithic kernel, a design choice attributed to its current simplicity. The codename "ReKanto" is a nod to the *Kanto* region from **Pokémon Red & Blue**, with "Re" added because the original Kanto kernel was rewritten due to issues encountered during the transition to 32-bit protected mode. Addionally, the i386 rewrite of the kernel is codenamed **Kanto32**.

As it stands, Arctic remains a 16-bit real mode system due to the aforementioned challenges faced during the attempt to transition from 16-bit to 32-bit.



#### The Mockup Era™ Gallery

*This gallery showcases the finished Arctic mockups created by LexNova.*

Before active development began, LexNova designed several Arctic mockups using GIMP. These images are conceptual representations and are **not** actual screenshots of functional builds—*yet!*

![](img/articles/arctic/7078personal.png)
<p id="caption">Horibyte Arctic Personal Beta 2 Build 7078</p>

![](img/articles/arctic/7089professional.png)
<p id="caption">Horibyte Arctic Professional Beta 2 Build 7089</p>

![](img/articles/arctic/7089personal.png)
<p id="caption">Horibyte Arctic Personal Beta 2 Build 7089</p>

![](img/articles/arctic/7089server.png)
<p id="caption">Horibyte Arctic Server Family Beta 2 Build 7089</p>

![](img/articles/arctic/7089bs.png)
<p id="caption">Horibyte Arctic Professional Beta 2 Build 7089 Boot Screen</p>
